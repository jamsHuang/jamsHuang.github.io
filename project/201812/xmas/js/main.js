$(function() {
  'use strict';
  //console.log(adapter.browserDetails.browser);
  var isPlaying = false;
  var firstCatch = false;
  var modelTF = false;
  var myVideoStream = document.getElementById('video') // make it a global variable

  async function getVideo() {
  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({
        video: {
          width: {min:320, max:640},
          facingMode: 'environment'
        },
        audio: false
      },
      function(stream) {
        var videoTracks = stream.getVideoTracks();
        myVideoStream.srcObject = stream;
        //myVideoStream.play();
      },
      function(error) {
         $('.notsupport').css("display","flex");
      });
  }
  getVideo();
  myVideoStream.setAttribute("playsinline", true);
  myVideoStream.setAttribute("controls", true);
  setTimeout(() => {
    console.log(myVideoStream.width,myVideoStream.height);
    myVideoStream.removeAttribute("controls");
  });
  async function stopVideo() {
    myVideoStream.srcObject.getTracks().forEach(track => track.stop())
  }
  // get detect model
  const MODEL_URL = 'web_model/tensorflowjs_model.pb';
  const WEIGHTS_URL = 'web_model/weights_manifest.json';
  const IMAGENET_CLASSES = {
    0: 'xmastree'
  }
  //
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
  var checkTime = 30;
  var myRuntime;
  //
  var resize_canvas = document.getElementById('resizeCanvas');
  var resize_ctx = resize_canvas.getContext("2d");
  let modelPromise;
  var model;
  //
  async function init() {
    $('.loading').hide();
  }
  async function myLoadUrl() {
    // modelPromise = tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL);
    // model = await modelPromise;
    // const img = document.getElementById('img');
    // var cs = tf.fromPixels(img);
    // var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    // res1.map(t => t.dataSync());
    // modelTF = true;
    init();
  }
  myLoadUrl();
  //
  async function checkModel() {
    resize_ctx.drawImage(myVideoStream, 0, 0, 320, 480, 0, 0, 160, 240);
    await myPredict();
  }
  var catch_num=0;
  async function myPredict() {
    //const model = await modelPromise;
    var cs = tf.fromPixels(resize_canvas);
    var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    res1.map(t => t.dataSync());
    boxes = res1[0].dataSync();
    scores = res1[1].dataSync();
    classes = res1[2].dataSync();
    count = res1[3].dataSync()[0];
    //console.log(res1[1].dataSync()[0]);

    if (scores[0] >= checkNum) {
      //$(".drawBox").css("background-color", "#FFF");
      min_y = boxes[0];
      min_x = boxes[1];
      max_y = boxes[2];
      max_x = boxes[3];
      gotit = true;
      //
      if(firstCatch==false){
        firstCatch = true;
        play_cry();
      }else{
        checkNum = 0.85;
      }
    } else {
      min_y = 0;
      min_x = 0;
      max_y = 0;
      max_x = 0;
      gotit = false;
      catch_num++;
      if(catch_num>10 && nowHeight<0.5)
      {
        sound_cry.stop();
        firstCatch = false;
        checkNum = 1;
      }
      else{

      }
    }
  }
  var nowHeight;
  function play_cry(){
    const instance = sound_cry.play();
    instance.on('progress', function(progress) {
        nowHeight = progress;
    });
    instance.on('end', function() {
        getResult();
    });
  }
  function getResult(){
    stopVideo();
  }
  var gotit = false;
  var checkNum = 0.99;
  //
  var app = new PIXI.Application(stgW, stgH, {
    antialias: true,
    transparent: true
  });
  document.getElementById("drawBox").appendChild(app.view);
  app.view.style = "position:absolute";
  app.stage.interactive = true;
  //camera
  var camContainer = new PIXI.Container();
  var showView = new PIXI.Sprite();
  camContainer.addChild(showView);
  app.stage.addChild(camContainer);
  var texture = PIXI.Texture.from(myVideoStream);
  showView.texture = texture;
  var black_bg = new PIXI.Graphics();
  black_bg.beginFill(0x000000, 0.5);
  black_bg.drawRect(0, 0, stgW, stgH);
  camContainer.addChild(black_bg);
  //
  TweenLite.fromTo( black_bg, 1, {alpha:0}, {alpha:1, onComplete:first_step} );
  //

  function first_step(){
    //first page
    var tween_cam, tween_welcome, tween_text, tween_btn;
    //
    var entrance = new PIXI.Container();
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
    welcome_icon.width = 220;
    welcome_icon.height = 32;
    welcome_icon.y = -100;
    welcome_icon.alpha = 0;
    //
    var welcome_icon = PIXI.Sprite.fromImage('img/get_cam_iconwelcome.png');
    welcome_icon.anchor.set(0.5);
    welcome_icon.width = 220;
    welcome_icon.height = 32;
    welcome_icon.y = -100;
    welcome_icon.alpha = 0;
    //
    var text_icon = PIXI.Sprite.fromImage('img/get_cam_textbox.png');
    text_icon.anchor.set(0.5);
    text_icon.width = 137.3;
    text_icon.height = 85.6;
    text_icon.y = -30;
    text_icon.alpha = 0;
    //
    var btn_icon = PIXI.Sprite.fromImage('img/get_cam_btn.png');
    btn_icon.anchor.set(0.5);
    btn_icon.width = 218.6;
    btn_icon.height = 32.6;
    btn_icon.y = 150;
    btn_icon.alpha = 0;
    //
    tween_cam = TweenLite.to( cam_icon, 1, {alpha:1, y: -150 , onComplete: function(){tween_cam.kill();}} );
    tween_welcome =TweenLite.to( welcome_icon, 1, {alpha:1, y: -80, delay:0.5, onComplete: function(){tween_welcome.kill();} } );
    tween_text =TweenLite.to( text_icon, 1, {alpha:1, y: 20, delay:0.75, onComplete: function(){tween_text.kill();} } );
    tween_btn =TweenLite.to( btn_icon, 1, {alpha:1, y: 150, delay:1, onComplete: function(){tween_btn.kill();} } );
    //
    entrance.addChild(cam_icon);
    entrance.addChild(welcome_icon);
    entrance.addChild(text_icon);
    entrance.addChild(btn_icon);
    app.stage.addChild(entrance);
  }

  var step2 = false;
  function sec_step(){
    step2 = true;
    //
    var container = new PIXI.Container();
    container.x = 0;
    container.y = 0;
    //
    var maskLayer = new PIXI.Graphics();
    var mask2Layer = new PIXI.Graphics();
    var wave1Layer = PIXI.Sprite.fromImage('img/wave13.png');
    wave1Layer.width = 0
    // wave2Layer.width =wave3Layer.width=wave4Layer.width=wave5Layer.width=wave6Layer.width = 0;
    wave1Layer.height =0
    // wave2Layer.height =wave3Layer.height =wave4Layer.height =wave5Layer.height =wave6Layer.height =0;
    //
    container.addChild(wave1Layer);
    container.addChild(maskLayer);
    app.stage.addChild(container);
  }

  app.ticker.add(function() {
    if(step2){
      if (modelTF == true) {
        checkModel();
      }
      maskLayer.clear();
      if (gotit == true) {
        wave1Layer.height = (max_y - min_y) * stgH;
        wave1Layer.width = (max_x - min_x) * stgW;
        wave1Layer.x = min_x*stgW;
        wave1Layer.y = min_y*stgH;
        wave1Layer.mask = maskLayer;
        //
        maskLayer.beginFill(0xFFFFFF, 1);
        maskLayer.drawRect(0, max_y*stgH, stgW, (min_y - max_y) * stgH * nowHeight);
      } else {
        wave1Layer.width = 0 ;
        wave1Layer.height = 0;
      }
    }
  });
  const sound_cry = PIXI.sound.Sound.from({
    url: 'sounds/cry.mp3',
    preload: true,
  });
});
