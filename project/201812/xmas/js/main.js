$(function() {
  //set camera
  'use strict';
  // Put variables in global scope to make them available to the browser console.
  //
  console.log(adapter.browserDetails.browser);
  var isPlaying = false;
  var firstCatch = false;
  var modelTF = false;
  var myVideoStream = document.getElementById('video') // make it a global variable
  async function stopVideo() {
    myVideoStream.srcObject.getTracks().forEach(track => track.stop())
  }
  async function getVideo() {

    // var constraints = window.constraints = {
    //     audio: false,
    //     video: {
    //       facingMode:'enviroment'
    //     }
    // };
    // function handleSuccess(stream) {
    //     var videoTracks = stream.getVideoTracks();
    //     //console.log('Using video device: ' + videoTracks[0].label);
    //     myVideoStream.srcObject = stream;
    // }
    // function handleError(error) {
    //     console.log('getUserMedia error: ' + error.name, error);
    // }
    // navigator.mediaDevices.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    // navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({
        video: {
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
        alert('webcam not working');
      });
  }
  getVideo();
  myVideoStream.setAttribute("playsinline", true);
  myVideoStream.setAttribute("controls", true);
  setTimeout(() => {
    myVideoStream.removeAttribute("controls");
  });
  //
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
  let modelPromise;
  var checkTime = 30;
  var myRuntime;

  var resize_canvas = document.getElementById('resizeCanvas');
  var resize_ctx = resize_canvas.getContext("2d");
  var myCanvas = document.getElementById('myCan');
  var ctx = myCanvas.getContext("2d");
  async function init() {
    //console.log('init');
    $('.loading').hide();
    runtime();
    console.log(myVideoStream.height);
    modelTF = true;

    //myRuntime = setInterval(checkModel,checkTime);
  }
  var model;
  async function myLoadUrl() {
    modelPromise = tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL);
    model = await modelPromise;
    const img = document.getElementById('img');
    var cs = tf.fromPixels(img);
    var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    res1.map(t => t.dataSync());
    init();
  }
  myLoadUrl();
  var num = 0;
  async function runtime() {
    num++;
    // drawCanvas()
    if (num > checkTime) {
      //checkModel();
      num = 0;
    }
    requestAnimationFrame(runtime);
  }

  async function checkModel() {
    resize_ctx.drawImage(myVideoStream, 0, 0, 320, 480, 0, 0, 160, 240);
     myPredict();
  }

  function drawCanvas() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.drawImage(myVideoStream, 0, 0, 320, 480, 0, 0, 320, 480);
    //ctx.fillStyle = "#FF0000";
    //ctx.fillRect(min_x * stgW, min_y * stgH, (max_x - min_x) * stgW, (max_y - min_y) * stgH);
  }
  var nowHeight;
  function play_cry(){
    const instance = sound_cry.play();
    instance.on('progress', function(progress) {
        nowHeight = progress;
        //console.log('Amount played: ', Math.round(progress * 100) + '%');
    });
    instance.on('end', function() {
        console.log('Sound finished playing');
        getResult();
    });
  }
  function getResult(){

  }
  var gotit = false;
  var checkNum = 0.99;
  async function myPredict() {
    //const model = await modelPromise;
    var cs = tf.fromPixels(resize_canvas);
    var res1 = model.executeAsync(cs.reshape([1, ...cs.shape]));
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
      //console.log(min_y);
      //drawCanvas();
    } else {
      //$(".drawBox").css("background-color", "#000");
      min_y = 0;
      min_x = 0;
      max_y = 0;
      max_x = 0;
      gotit = false;
      //ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
  }
  var app = new PIXI.Application(stgW, stgH, {
    antialias: true,
    transparent: true
  });
  document.getElementById("drawBox").appendChild(app.view);
  app.view.style = "position:absolute";
  app.stage.interactive = true;
  var container = new PIXI.Container();
  container.x = 0;
  container.y = 0;
  var showView = new PIXI.Sprite();
  var maskLayer = new PIXI.Graphics();
  var mask2Layer = new PIXI.Graphics();
  var wave1Layer = PIXI.Sprite.fromImage('img/wave1.png');
  var wave2Layer = PIXI.Sprite.fromImage('img/wave2.png');
  var wave3Layer = PIXI.Sprite.fromImage('img/wave3.png');
  var wave4Layer = PIXI.Sprite.fromImage('img/wave4.png');
  var wave5Layer = PIXI.Sprite.fromImage('img/wave5.png');
  var wave6Layer = PIXI.Sprite.fromImage('img/wave6.png');
  wave1Layer.width =wave2Layer.width =wave3Layer.width=wave4Layer.width=wave5Layer.width=wave6Layer.width = 0;
  wave1Layer.height =wave2Layer.height =wave3Layer.height =wave4Layer.height =wave5Layer.height =wave6Layer.height =0;
  //
  container.addChild(showView);
  container.addChild(wave1Layer);
  container.addChild(wave2Layer);
  container.addChild(wave3Layer);
  container.addChild(wave4Layer);
  container.addChild(wave5Layer);
  container.addChild(wave6Layer);
  container.addChild(maskLayer);
  container.addChild(mask2Layer);
  app.stage.addChild(container);
  //
  var texture = PIXI.Texture.from(myVideoStream);
  showView.texture = texture;
  var pixitime = 0;
  app.ticker.add(function() {
    pixitime += 1;
    if (pixitime > checkTime) {
      if (modelTF == true) {
        checkModel();
      }
      pixitime = 0;
    }
    maskLayer.clear();
    mask2Layer.clear();
    //
    if (gotit == true) {
      wave1Layer.height = (max_y - min_y) * stgH;
      wave1Layer.width = (max_x - min_x) * stgW;
      wave1Layer.x = min_x*stgW;
      wave1Layer.y = min_y*stgH;
      wave1Layer.mask = maskLayer;
      //
      wave2Layer.height = (max_y - min_y) * stgH;
      wave2Layer.width = (max_x - min_x) * stgW;
      wave2Layer.x = min_x*stgW;
      wave2Layer.y = min_y*stgH;
      wave2Layer.mask = maskLayer;
      //
      wave3Layer.height = (max_y - min_y) * stgH;
      wave3Layer.width = (max_x - min_x) * stgW;
      wave3Layer.x = min_x*stgW;
      wave3Layer.y = min_y*stgH;
      wave3Layer.mask = maskLayer;
      //
      wave4Layer.height = (max_y - min_y) * stgH;
      wave4Layer.width = (max_x - min_x) * stgW;
      wave4Layer.x = min_x*stgW;
      wave4Layer.y = min_y*stgH;
      wave4Layer.mask = mask2Layer;
      //
      wave5Layer.height = (max_y - min_y) * stgH;
      wave5Layer.width = (max_x - min_x) * stgW;
      wave5Layer.x = min_x*stgW;
      wave5Layer.y = min_y*stgH;
      wave5Layer.mask = mask2Layer;
      //
      wave6Layer.height = (max_y - min_y) * stgH;
      wave6Layer.width = (max_x - min_x) * stgW;
      wave6Layer.x = min_x*stgW;
      wave6Layer.y = min_y*stgH;
      wave6Layer.mask = mask2Layer;
      //
      maskLayer.beginFill(0xFFFFFF, 1);
      maskLayer.drawRect(0, max_y*stgH, stgW, (min_y - max_y) * stgH * nowHeight);
      //
      mask2Layer.beginFill(0xFFFFFF, 1);
      mask2Layer.drawRect(0, max_y*stgH, stgW, (min_y - max_y) * stgH * nowHeight * 0.9);
    } else {
      wave1Layer.width =wave2Layer.width =wave3Layer.width=wave4Layer.width=wave5Layer.width=wave6Layer.width = 0;
      wave1Layer.height =wave2Layer.height =wave3Layer.height =wave4Layer.height =wave5Layer.height =wave6Layer.height =0;
    }
  });
  const sound_cry = PIXI.sound.Sound.from({
    url: 'sounds/cry.mp3',
    preload: true,
  });
});
