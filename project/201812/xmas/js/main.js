$(function() {
  //set camera
  'use strict';
  // Put variables in global scope to make them available to the browser console.
  //
  var myVideoStream = document.getElementById('video') // make it a global variable
  async function stopVideo() {
    myVideoStream.srcObject.getTracks().forEach(track => track.stop())
  }
  async function getVideo() {
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({
        video: {
          facingMode: 'environment'
        },
        audio: false
      },
      function(stream) {
        myVideoStream.srcObject = stream;
        myVideoStream.play();
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
    0: 'lgmouse'
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
  var stgH = 320;
  var stgW = 320;
  let modelPromise;
  async function init() {
    //console.log('init');
    $('.loading').hide();
    runtime();
  }
  var model;
  async function myLoadUrl() {
    modelPromise = tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL);
    model = await modelPromise;
    const img = document.getElementById('img');
    var cs = tf.fromPixels(img).resizeNearestNeighbor([224, 224]);
    var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    res1.map(t => t.dataSync());
    init();
  }
  myLoadUrl();
  var num = 0;
  async function runtime() {
    num++;
    //console.log(num);
    //await myPredict();
    if(num> 30){
      await myPredict();
      num = 0;
    }
    requestAnimationFrame(runtime);
  }
  var myCanvas = document.getElementById('myCan');
  var ctx = myCanvas.getContext("2d");
  function drawCanvas(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(min_x*320, min_y*320, (max_x-min_x)*320, (max_y-min_y)*320);
  }
  async function myPredict() {
    //const model = await modelPromise;
    var cs = tf.fromPixels(myVideoStream).resizeNearestNeighbor([224, 224]);
    var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    res1.map(t => t.dataSync());
    boxes = res1[0].dataSync();
    scores = res1[1].dataSync();
    classes = res1[2].dataSync();
    count = res1[3].dataSync()[0];
    if (scores[0] >= 0.9999) {
      $(".drawBox").css("background-color", "#FFF");
      min_y = boxes[0];
      min_x = boxes[1];
      max_y = boxes[2];
      max_x = boxes[3];
      //console.log(min_y);
      drawCanvas();
    } else {
      $(".drawBox").css("background-color", "#000");
      min_y = 0;
      min_x = 0;
      max_y = 0;
      max_x = 0;
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
  }
});
