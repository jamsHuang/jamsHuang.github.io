$(function() {
  'use strict';
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  //
  cosole.log(isAndroid);
  cosole.log(isiOS);
  console.log(adapter.browserDetail);
  var isPlaying = false;
  var firstCatch = false;
  var modelTF = false;
  var myVideoStream = document.getElementById('video') // make it a global variable
  var starName = ['何潤東', '何超蓮', '修杰楷', '吳建豪', '吳慷仁',
    '宋芸樺', '康康', '林心如', '梁靜茹', '楊一展', '王大陸',
    '羅景壬', '聶雲', '茵茵', '薛妞妞', '謝依霖', '鄭元暢', '陶晶瑩'
  ];
  var rArray = [0, 0, 0, 0, 0,
    1,
    2, 2, 2,
    3, 3, 3, 3, 3, 3, 3,
    4, 4, 4,
    5,
    6, 6, 6,
    7, 7, 7, 7, 7, 7, 7, 7,
    8, 8, 8, 8, 8, 8, 8, 8,
    9, 9, 9, 9,
    10, 10, 10, 10, 10, 10,
    11,
    12, 12, 12,
    13,
    14,
    15,
    16, 16, 16, 16, 16,
    17, 17, 17, 17, 17, 17, 17
  ]
  var rNum = Math.floor(Math.random() * rArray.length);
  var gNum = rArray[rNum];
  if (sharing) {
    gNum = num;
  }
  //console.log(gNum);
  var boxes = [];
  var scores = [];
  var classes = [];
  var count = [];
  var min_y;
  var min_x;
  var max_y;
  var max_x;
  var stgH = 480;
  var stgW = 320;
  //
  var org_img, share_img;
  //
  var checkTime = 30;
  var myRuntime;
  //
  var resize_canvas;
  var resize_ctx;
  let modelPromise;
  var model;
  //
  var catch_num = 0;
  var share_url;
  //
  var nowHeight;
  //
  var star_playing = false;
  var shine = false;

  //
  var gotit = false;
  var checkNum = 0.99;
  //

  var step2 = false;
  var container;
  var maskLayer;
  var wave1Layer, wave2Layer, starLayer, treeLayer;
  var checkingLayer;
  var checking1, checking2, checking0, camLayer, noticeLayer;

  // get detect model
  const IMAGENET_CLASSES = {
    0: 'xmastree',
    1: 'yellowstar'
  }
  const MODEL_URL = 'web_model/tensorflowjs_model.pb';
  const WEIGHTS_URL = 'web_model/weights_manifest.json';

  //

  var cry_url;
  if (gNum % 3 == 0) {
    cry_url = 'sounds/cry_0.mp3';
  } else if (gNum % 3 == 1) {
    cry_url = 'sounds/cry_1.mp3';
  } else {
    cry_url = 'sounds/cry_2.mp3';
  }
  //console.log(cry_url);
  const sound_cry = PIXI.sound.Sound.from({
    url: cry_url,
    preload: true,
    loaded: function(err, sound) {
      //console.log(sound);
    }
  });
  const sound_star = PIXI.sound.Sound.from({
    url: 'sounds/' + gNum + '.mp3',
    preload: true
  });
  //
  var app = new PIXI.Application(stgW, stgH, {
    antialias: true,
    transparent: true
  });
  document.getElementById("drawBox").appendChild(app.view);
  app.view.style = "position:absolute";
  app.view.id = 'stage_canvas';
  app.stage.interactive = true;

  var camContainer;
  var showView;
  var texture;
  var black_bg;
  var shareImg;
  if (sharing == true) {
    gNum = num;
    min_y = (Number(posY) - (Number(height) / 2)) / stgH;
    min_x = (Number(posX) - (Number(width) / 2)) / stgW;
    max_y = (Number(posY) + (Number(height) / 2)) / stgH;
    max_x = (Number(posX) + (Number(width) / 2)) / stgW;
    //
    console.log(min_y, min_x)
    modelTF = true;
    gotit = true;
    //
    $('#shareImg').attr("src", ori_image);
    init();
    sec_step();
    const sound_cry = PIXI.sound.Sound.from({
      url: cry_url,
      preload: true,
      loaded: function(err, sound) {
        const instance = sound.play();
        instance.on('progress', function(progress) {
          nowHeight = progress / 0.38;
          if (progress > 0.30 && progress <= 0.38) {
            if (shine == false) {
              shine = true;
              modelTF = false;
              var star_tween = TweenLite.fromTo(starLayer, 0.3, {
                alpha: 0
              }, {
                alpha: 1,
                onComplete: function() {
                  star_tween.kill();
                }
              });
              //
              var tree_tween = TweenLite.fromTo(treeLayer, 2, {
                alpha: 0
              }, {
                alpha: 1,
                onComplete: function() {
                  tree_tween.kill();
                  drawResult();
                }
              });
            }
          } else if (progress > 0.38) {
            if (star_playing == false) {
              star_playing = true;
              getResult();
            } else {

            }

          } else {

          }
        });
        instance.on('end', function() {

        });
      }
    });

  } else {
    getVideo();
    myVideoStream.setAttribute("playsinline", true);
    myVideoStream.setAttribute("controls", true);
    setTimeout(() => {
      //console.log(myVideoStream.width, myVideoStream.height);
      myVideoStream.removeAttribute("controls");
    });

    resize_canvas = document.getElementById('resizeCanvas');
    resize_ctx = resize_canvas.getContext("2d");
    //
    myLoadUrl();
    //

    //camera
    camContainer = new PIXI.Container();
    showView = new PIXI.Sprite();
    camContainer.addChild(showView);
    app.stage.addChild(camContainer);
    texture = PIXI.Texture.from(myVideoStream);
    showView.texture = texture;
    black_bg = new PIXI.Graphics();
    black_bg.beginFill(0x000000, 0.5);
    black_bg.drawRect(0, 0, stgW, stgH);
    camContainer.addChild(black_bg);
    //
    TweenLite.fromTo(black_bg, 1, {
      alpha: 0
    }, {
      alpha: 1,
      onComplete: first_step
    });
    //
  }
  //
  //
  async function getVideo() {
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({
        video: {
          width: {
            min: 320,
            max: 640
          },
          facingMode: 'environment'
        },
        audio: false
      },
      function(stream) {
        var videoTracks = stream.getVideoTracks();
        myVideoStream.srcObject = stream;

      },
      function(error) {
        //console.log(error);
        $('.notsupport').css("display", "flex");
      });
  }
  async function stopVideo() {
    texture.destroy();
    myVideoStream.srcObject.getTracks().forEach(track => track.stop())
  }
  async function init() {
    $('.loading').hide();
    myRuntime();
  }
  async function myLoadUrl() {
    modelPromise = tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL);
    model = await modelPromise;
    const img = document.getElementById('img');
    var cs = tf.fromPixels(img);
    var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    res1.map(t => t.dataSync());
    modelTF = true;
    init();
  }
  async function checkModel() {
    resize_ctx.drawImage(myVideoStream, 0, 0, 320, 480, 0, 0, 160, 240);
    await myPredict();
  }

  function send_org() {
    var record_canvas = document.getElementById('record_canvas');
    var record_ctx = record_canvas.getContext("2d");
    //
    record_ctx.drawImage(myVideoStream, 0, 0, 320, 480, 0, 0, 320, 480);
    org_img = record_canvas.toDataURL("image/jpeg");
    //
    var canBg = document.getElementById('sbg');
    var canTree = document.getElementById('stree');
    record_ctx.drawImage(canBg, 0, 0, 320, 480, 0, 0, 320, 480);
    var xx = (min_x) * stgW;
    var yy = (min_y) * stgH;
    var ww = (max_x - min_x) * stgW;
    var hh = (max_y - min_y) * stgH;
    record_ctx.drawImage(canTree, 0, 0, 320, 480, xx, yy, ww, hh);
    share_img = record_canvas.toDataURL("image/jpeg");
    //console.log(share_img);
    $.ajax({
      url: 'make_img.php',
      cache: false,
      dataType: 'JSON',
      type: 'POST',
      data: {
        original_img_url: org_img,
        share_img_url: share_img,
        num: gNum,
        posX: ((max_x - min_x) / 2 + min_x) * stgW,
        posY: ((max_y - min_y) / 2 + min_y) * stgH,
        width: (max_x - min_x) * stgW,
        height: (max_y - min_y) * stgH
      },
      error: function() {
        //alert('Ajax request 發生錯誤');
      },
      jsonCallback: "result",
      success: result
    });

    function result(responseText) {
      var obj = jQuery.parseJSON(responseText);
      share_url = obj.share_url;
    }
  }

  async function myPredict() {
    var cs = tf.fromPixels(resize_canvas);
    var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    res1.map(t => t.dataSync());
    boxes = res1[0].dataSync();
    scores = res1[1].dataSync();
    classes = res1[2].dataSync();
    count = res1[3].dataSync()[0];
    if (scores[0] >= checkNum) {
      min_y = boxes[0];
      min_x = boxes[1];
      max_y = boxes[2];
      max_x = boxes[3];
      gotit = true;
      catch_num = 0;
      //
      if (firstCatch == false) {
        firstCatch = true;
        play_cry();
        send_org();
        checkNum = 0.85;
      } else {}
    } else {
      catch_num++;
      if (catch_num > 3 && nowHeight < 0.5) {
        sound_cry.stop();
        min_y = 0;
        min_x = 0;
        max_y = 0;
        max_x = 0;
        gotit = false;
        firstCatch = false;
        checkNum = 0.99;
        nowHeight = 0;
      } else {

      }
    }
  }

  function play_cry() {
    const instance = sound_cry.play();
    instance.on('progress', function(progress) {
      nowHeight = progress / 0.38;
      if (progress > 0.30 && progress <= 0.38) {
        if (shine == false) {
          shine = true;
          modelTF = false;
          var star_tween = TweenLite.fromTo(starLayer, 0.3, {
            alpha: 0
          }, {
            alpha: 1,
            onComplete: function() {
              star_tween.kill();
            }
          });
          //
          var tree_tween = TweenLite.fromTo(treeLayer, 2, {
            alpha: 0
          }, {
            alpha: 1,
            onComplete: function() {
              tree_tween.kill();
              drawResult();
            }
          });
        }
      } else if (progress > 0.38) {
        if (star_playing == false) {
          star_playing = true;
          getResult();
        } else {

        }

      } else {

      }
    });
    instance.on('end', function() {

    });
  }

  function getResult() {
    if (sharing) {} else {
      stopVideo();
    }
    //clearAllSprite();
    sound_star.play();
  }

  function clearAllSprite() {
    if (app.stage.children.length > 0) {
      for (var i = app.stage.children.length - 1; i >= 0; i--) {
        app.stage.removeChild(app.stage.children[i]);
      };
      clearAllSprite();
    } else {

    }
  }

  var entrance;

  function first_step() {
    //first page
    var tween_cam, tween_welcome, tween_text, tween_btn;
    //
    entrance = new PIXI.Container();
    entrance.x = app.screen.width / 2;
    entrance.y = app.screen.height / 2;
    var cam_icon = PIXI.Sprite.fromImage('img/get_cam_iconcam.png');
    cam_icon.anchor.set(0.5);
    cam_icon.width = 74.4;
    cam_icon.height = 60;
    cam_icon.y = -200;
    cam_icon.alpha = 0;
    //
    var welcome_icon = PIXI.Sprite.fromImage('img/get_cam_iconwelcome.png');
    welcome_icon.anchor.set(0.5);
    welcome_icon.width = 98.1;
    welcome_icon.height = 79.2;
    welcome_icon.y = -100;
    welcome_icon.alpha = 0;
    //
    var welcome_icon = PIXI.Sprite.fromImage('img/get_cam_iconwelcome.png');
    welcome_icon.anchor.set(0.5);
    welcome_icon.width = 195;
    welcome_icon.height = 28.8;
    welcome_icon.y = -100;
    welcome_icon.alpha = 0;
    //
    var text_icon = PIXI.Sprite.fromImage('img/get_cam_textbox.png');
    text_icon.anchor.set(0.5);
    text_icon.width = 185;
    text_icon.height = 115;
    text_icon.y = -30;
    text_icon.alpha = 0;
    //
    var btn_icon = PIXI.Sprite.fromImage('img/get_cam_btn.png');
    btn_icon.anchor.set(0.5);
    btn_icon.width = 259.2;
    btn_icon.height = 43.8;
    btn_icon.y = 150;
    btn_icon.alpha = 0;
    btn_icon.interactive = true;
    btn_icon.on('pointerdown', sec_step);
    //
    tween_cam = TweenLite.to(cam_icon, 1, {
      alpha: 1,
      y: -150,
      onComplete: function() {
        tween_cam.kill();
      }
    });
    tween_welcome = TweenLite.to(welcome_icon, 1, {
      alpha: 1,
      y: -80,
      delay: 0.5,
      onComplete: function() {
        tween_welcome.kill();
      }
    });
    tween_text = TweenLite.to(text_icon, 1, {
      alpha: 1,
      y: 30,
      delay: 0.75,
      onComplete: function() {
        tween_text.kill();
      }
    });
    tween_btn = TweenLite.to(btn_icon, 1, {
      alpha: 1,
      y: 160,
      delay: 1,
      onComplete: function() {
        tween_btn.kill();
      }
    });
    //
    entrance.addChild(cam_icon);
    entrance.addChild(welcome_icon);
    entrance.addChild(text_icon);
    entrance.addChild(btn_icon);
    app.stage.addChild(entrance);
  }

  function sec_step() {
    step2 = true;
    if (sharing) {} else {
      var tween_entrance = TweenLite.to(entrance, 1, {
        alpha: 0,
        onComplete: function() {
          tween_entrance.kill();
          app.stage.removeChild(entrance);
        }
      });
    }
    //
    container = new PIXI.Container();
    container.x = 0;
    container.y = 0;
    container.name = "ct";
    //
    maskLayer = new PIXI.Graphics();
    wave1Layer = PIXI.Sprite.fromImage('img/wave13.png');
    wave1Layer.width = 0;
    wave1Layer.height = 0;
    wave1Layer.alpha = 0.8;
    //
    wave2Layer = PIXI.Sprite.fromImage('img/wave13.png');
    wave2Layer.width = 0;
    wave2Layer.height = 0;
    wave2Layer.alpha = 0.3;
    //
    starLayer = PIXI.Sprite.fromImage('img/star.png');
    starLayer.anchor.set(0.5);
    starLayer.width = 200;
    starLayer.height = 200;
    starLayer.alpha = 1;
    //tree.png
    treeLayer = PIXI.Sprite.fromImage('img/tree.png');
    treeLayer.width = stgW;
    treeLayer.height = stgH;
    treeLayer.alpha = 0;
    //
    container.addChild(wave2Layer);
    container.addChild(wave1Layer);
    container.addChild(maskLayer);
    container.addChild(starLayer);
    container.addChild(treeLayer);
    app.stage.addChild(container);
    //
    checkingLayer = new PIXI.Container();
    checkingLayer.x = stgW / 2;
    checkingLayer.y = stgH / 2;
    checkingLayer.alpha = 0;
    //
    camLayer = PIXI.Sprite.fromImage('img/get_cam_iconcam.png');
    camLayer.anchor.set(0.5);
    camLayer.width = 74.4;
    camLayer.height = 60;
    //
    noticeLayer = PIXI.Sprite.fromImage('img/notice_camera.png');
    noticeLayer.anchor.set(0.5);
    noticeLayer.width = 129.15;
    noticeLayer.height = 47.25;
    noticeLayer.y = 150;
    //
    checking0 = PIXI.Sprite.fromImage('img/checking0.png');
    checking1 = PIXI.Sprite.fromImage('img/checking1.png');
    checking2 = PIXI.Sprite.fromImage('img/checking1.png');
    //
    checking0.width = checking0.height = 146;
    checking1.width = checking1.height = 180;
    checking2.width = checking2.height = 214;
    //
    checking0.anchor.set(0.5);
    checking1.anchor.set(0.5);
    checking2.anchor.set(0.5);
    //
    checkingLayer.addChild(camLayer);
    checkingLayer.addChild(checking0);
    checkingLayer.addChild(checking1);
    checkingLayer.addChild(checking2);
    checkingLayer.addChild(noticeLayer);
    app.stage.addChild(checkingLayer);
  }
  var resultLayer, resultBg;
  var treemaskLayer;
  var step3 = false;
  var time3 = 0;
  var tilingSprite;
  var snow;
  //
  var resultCv, resultStar, resultBb, rf, rr;
  //
  function drawResult() {
    step3 = true;
    time3 = 0;
    resultLayer = new PIXI.Container();

    resultLayer.x = stgW / 2;
    resultLayer.y = stgH / 2;
    //
    resultBg = PIXI.Sprite.fromImage("img/result_bg.png");
    resultBg.width = 337.5;
    resultBg.height = 600.3;
    resultBg.anchor.set(0.5);
    resultBg.alpha = 0;
    resultBg.y = -150;
    //
    treemaskLayer = new PIXI.Graphics();
    //
    var tiltexture = PIXI.Texture.fromImage('img/result_snow.png');
    tilingSprite = new PIXI.extras.TilingSprite(tiltexture, stgW, stgH);
    tilingSprite.anchor.set(0.5);
    //
    resultBg.mask = treemaskLayer;
    //
    resultCv = PIXI.Sprite.fromImage("img/result_tc.png");
    resultCv.anchor.set(0.5);
    resultCv.width = 210;
    resultCv.height = 283.5;
    resultCv.y = -40;
    resultCv.x = -15;
    //
    resultStar = PIXI.Sprite.fromImage("img/star.png");
    resultStar.anchor.set(0.5);
    resultStar.width = 300;
    resultStar.height = 300;
    resultStar.y = -180;
    //
    resultLayer.addChild(resultBg);
    var randomStarPos = [
      [45, -100],
      [-35, -40],
      [60, -20],
      [-5, 120],
      [-90, 60],
      [80, 90]
    ];
    for (var i = 0; i < 6; i++) {
      var randomStar = PIXI.Sprite.fromImage("img/star.png");
      randomStar.anchor.set(0.5);
      randomStar.height = randomStar.width = Math.random() * 150 + 50;
      randomStar.x = randomStarPos[i][0];
      randomStar.y = randomStarPos[i][1];
      randomStar.rotation = Math.random() * 360;
      randomStar.name = "star" + i;
      TweenMax.set(randomStar, {
        width: 50,
        height: 50
      })
      TweenMax.to(randomStar, 1, {
        width: 250,
        height: 250,
        repeat: -1,
        delay: i / 10,
        yoyo: true,
        ease: Power2.easeInOut
      });

      resultLayer.addChild(randomStar);
    }
    //
    resultBb = PIXI.Sprite.fromImage("img/result_bg_b.png");
    //337 168
    resultBb.anchor.set(0.5);
    resultBb.y = 240;
    resultBb.width = 337;
    resultBb.height = 168;
    resultBb.alpha = 0;
    var resultBb_tween = TweenLite.to(resultBb, 1, {
      alpha: 1,
      y: 156,
      onComplete: function() {
        resultBb_tween.kill();
      }
    });
    rf = PIXI.Sprite.fromImage("img/result_fb.png");
    rf.width = 337;
    rf.height = 68;
    rf.anchor.set(0.5);
    rf.y = 100;
    //
    rr = PIXI.Sprite.fromImage("img/result_f.png");
    rr.width = 114;
    rr.height = 95;
    rr.anchor.set(0.5);
    rr.y = 85;
    //
    resultLayer.addChild(treemaskLayer);
    resultLayer.addChild(resultCv);
    resultLayer.addChild(tilingSprite);
    resultLayer.addChild(resultStar);
    resultLayer.addChild(resultBb);
    resultLayer.addChild(rf);
    resultLayer.addChild(rr);
    app.stage.addChild(resultLayer);
    //
    snow = true;
    var resultBg_tween = TweenLite.to(resultBg, 1.5, {
      alpha: 1,
      y: 0,
      onComplete: function() {
        resultBg_tween.kill();
        removeWaves();
        addText();
      }
    });
  }
  var textLayer, text1, text2;

  function addText() {
    textLayer = new PIXI.Container();
    textLayer.name = "textLayer";
    textLayer.x = stgW / 2;
    textLayer.y = stgH / 2;
    text1 = PIXI.Sprite.fromImage('img/tt0.png');
    text1.anchor.set(0.5);
    text1.width = 196;
    text1.height = 51.45;
    text1.y = 190;
    text1.alpha = 0;
    //
    var text_tween = TweenMax.to(text1, 1, {
      alpha: 1,
      onComplete: function() {
        text_tween.kill();
        var text_tween1 = TweenMax.to(text1, 1, {
          alpha: 0,
          delay: 4,
          onComplete: function() {
            text_tween1.kill();
          }
        })
      }
    })

    text2 = PIXI.Sprite.fromImage('img/tt1.png');
    text2.anchor.set(0.5);
    text2.width = 168.35;
    text2.height = 44.8;
    text2.y = 180;
    text2.alpha = 0;
    //
    var text_tween2 = TweenMax.to(text2, 1, {
      alpha: 1,
      delay: 5,
      onComplete: function() {
        text_tween2.kill();
        var text_tween22 = TweenMax.to(text2, 1, {
          alpha: 0,
          delay: 4,
          onComplete: function() {
            text_tween22.kill();
          }
        })
      }
    });
    //
    textLayer.addChild(text1);
    textLayer.addChild(text2);
    app.stage.addChild(textLayer);
    //
    let nameBox = new PIXI.Text(starName[gNum] + "：", {
      fontFamily: 'Arial',
      fontSize: 25,
      fill: 0xFFFFFF,
      align: 'left'
    });
    nameBox.anchor.set(0.5);
    nameBox.x = -85;
    nameBox.y = 130;
    nameBox.alpha = 0;
    textLayer.addChild(nameBox);
    var nameBox_tween2 = TweenMax.to(nameBox, 1, {
      alpha: 1,
      onComplete: function() {
        nameBox_tween2.kill();
        var nameBox_tween22 = TweenMax.to(nameBox, 1, {
          alpha: 0,
          delay: 9,
          onComplete: function() {
            nameBox_tween22.kill();
            killText();
          }
        })
      }
    });
  }

  function killText() {
    let textLayer = app.stage.getChildByName('textLayer');
    if (textLayer.children.length > 0) {
      for (var i = textLayer.children.length - 1; i >= 0; i--) {
        textLayer.removeChild(textLayer.children[i]);
      };
      killText();
    } else {
      lastView();
    }
  }
  var help_icon, logo_icon, logo2_icon, last_words, btn_donate, btn_share;
  var mySh = location.href;

  function lastView() {
    help_icon = PIXI.Sprite.fromImage('img/last_help.png');
    logo_icon = PIXI.Sprite.fromImage('img/last_logo1.png');
    logo2_icon = PIXI.Sprite.fromImage('img/last_logo2.png');
    last_words = PIXI.Sprite.fromImage('img/last_text.png');
    btn_donate = PIXI.Sprite.fromImage('img/last_btn_donate.png');
    btn_share = PIXI.Sprite.fromImage('img/last_btn_share.png');
    //
    help_icon.anchor.set(0.5);
    logo_icon.anchor.set(0.5);
    logo2_icon.anchor.set(0.5);
    last_words.anchor.set(0.5);
    btn_donate.anchor.set(0.5);
    btn_share.anchor.set(0.5);
    //
    help_icon.width = 118.8;
    help_icon.height = 118.8;
    logo_icon.width = 121.5;
    logo_icon.height = 29.25;
    logo2_icon.width = 83.7;
    logo2_icon.height = 29.25;
    last_words.width = 220.5;
    last_words.height = 19.35;
    btn_donate.width = 132.75;
    btn_donate.height = 31.75;
    btn_share.width = 132.75;
    btn_share.height = 48.15;
    //
    help_icon.x = 0;
    help_icon.y = 160;
    logo_icon.x = -84.25;
    logo_icon.y = -200;
    logo2_icon.x = 93.15;
    logo2_icon.y = -200;
    last_words.x = 0;
    last_words.y = 145;
    btn_donate.x = -70;
    btn_donate.y = 180;
    btn_share.x = 70;
    btn_share.y = 188.325;
    //
    help_icon.alpha = 0;
    logo_icon.alpha = 0;
    logo2_icon.alpha = 0;
    last_words.alpha = 0;
    btn_donate.alpha = 0;
    btn_share.alpha = 0;
    //
    if (sharing) {
      share_url = mySh.replace('share.html', 'share.php');
      console.log(share_url);
    } else {

    }
    //
    btn_donate.interactive = true;
    btn_donate.on('pointerdown', open_donate);

    $('#iBut').css("display","block");
    //
    textLayer.addChild(help_icon);
    textLayer.addChild(logo_icon);
    textLayer.addChild(logo2_icon);
    textLayer.addChild(last_words);
    textLayer.addChild(btn_donate);
    textLayer.addChild(btn_share);
    //
    var help_tween = TweenMax.to(help_icon, 1, {
      alpha: 1,
      onComplete: function() {
        help_tween.kill();
        var help_tween2 = TweenMax.to(help_icon, 1, {
          alpha: 0,
          delay: 2,
          onComplete: function() {
            help_tween2.kill();
            showLast();
          }
        })
      }
    })
  }

  function open_donate() {
    window.open("https://goo.gl/c1qMWT", "_self");
  }
  $("#iBut").on("click", function() {
    //console.log("click"); //
    FB.ui({
      method: 'share',
      href: share_url,
    }, function(response) {
      //console.log(response);
    });
  });
  function showLast() {
    var logo_tween = TweenMax.to(logo_icon, 1, {
      alpha: 1,
      onComplete: function() {
        logo_tween.kill();
      }
    });
    var logo2_tween = TweenMax.to(logo2_icon, 1, {
      alpha: 1,
      onComplete: function() {
        logo2_tween.kill();
      }
    });
    var last_words_tween = TweenMax.to(last_words, 1, {
      alpha: 1,
      delay: 0.5,
      onComplete: function() {
        last_words_tween.kill();
      }
    });
    var btn_donate_tween = TweenMax.to(btn_donate, 1, {
      alpha: 1,
      delay: 1,
      onComplete: function() {
        btn_donate_tween.kill();
      }
    });
    var btn_share_tween = TweenMax.to(btn_share, 1, {
      alpha: 1,
      delay: 1,
      onComplete: function() {
        btn_share_tween.kill();
      }
    });
  }

  function removeWaves() {
    let ct = app.stage.getChildByName('ct');
    if (ct.children.length > 0) {
      for (var i = ct.children.length - 1; i >= 0; i--) {
        ct.removeChild(ct.children[i]);
      };
      removeWaves();
    } else {
      app.stage.removeChild(ct);
    }
  }

  function startShine() {
    starLayer.x = ((max_x - min_x) / 2 + min_x) * stgW;
    starLayer.y = min_y * stgH / 2 + 30;
    starLayer.rotation += 0.1;
    //
    treeLayer.x = min_x * stgW - 10;
    treeLayer.y = min_y * stgH - 10;
    //
    treeLayer.height = (max_y - min_y) * stgH + 20;
    treeLayer.width = (max_x - min_x) * stgW + 20;
    //console.log(starLayer.x,starLayer.y);
  }
  var time2 = 0;
  var stopRunning = false;

  function myRuntime() {

    if (step2) {
      if (shine == true) {
        startShine();
      }
      if (modelTF == true) {
        time2++;
        if (time2 > 60) {
          if (sharing) {} else {
            checkModel();
            time2 = 0;
          }
        }
      }
      if (maskLayer) {
        maskLayer.clear();
      }
      if (gotit == true) {
        //
        wave1Layer.height = (max_y - min_y) * stgH;
        wave1Layer.width = (max_x - min_x) * stgW;
        //console.log(wave1Layer.height,"mmmmm");
        wave1Layer.x = min_x * stgW;
        wave1Layer.y = min_y * stgH;
        wave1Layer.mask = maskLayer;
        //
        wave2Layer.height = (max_y - min_y) * stgH;
        wave2Layer.width = (max_x - min_x) * stgW + 60;
        wave2Layer.x = min_x * stgW - 30;
        wave2Layer.y = min_y * stgH;
        wave2Layer.mask = maskLayer;
        //
        maskLayer.beginFill(0xFFFFFF, 1);
        maskLayer.drawRect(0, max_y * stgH, stgW, (min_y - max_y) * stgH * nowHeight);
        checkingLayer.alpha = 0;
      } else {
        wave1Layer.width = 0;
        wave1Layer.height = 0;
        checkingLayer.alpha = 1;
        checking0.rotation += 0.05;
        checking1.rotation -= 0.08;
        checking2.rotation += 0.06;
      }
    }
    if (step3) {
      if (time3 < 1) {
        if(treemaskLayer){
          time3 += 0.07;
          treemaskLayer.clear();
          treemaskLayer.beginFill(0xFFFFFF, .5);
          treemaskLayer.drawRect(-stgW / 2, -stgH / 2, stgW, stgH * time3);
        }
      }
      resultStar.rotation += 0.1;
      if (snow) {
        tilingSprite.tilePosition.y += 1;
        if (tilingSprite.tilePosition.y > 480) {
          tilingSprite.tilePosition.y = 0;
        }
      }
    }

    if (stopRunning == true) {

    } else {
      requestAnimationFrame(myRuntime);
    }
  }

});
