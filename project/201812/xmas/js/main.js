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
  async function takeSnapshot() {
    var myCanvasElement = document.getElementById('canvas');
    var myCTX = myCanvasElement.getContext('2d');
    myCTX.drawImage(myVideoStream, 0, 0, myCanvasElement.width, myCanvasElement.height);
    //
    drawCanvas();
  }
  var num = 0;
  async function runtime(){
    num++
    console.log(num);
    await takeSnapshot();
    //await myPredict();
    requestAnimationFrame(runtime);
  }
  //
  const MODEL_URL = 'web_model/tensorflowjs_model.pb';
  const WEIGHTS_URL = 'web_model/weights_manifest.json';
  const IMAGENET_CLASSES = {
    0: 'lgmouse'
  }
  var boxes=[];
  var scores =[];
  var classes =[];
  var count= [];
  var min_y;
  var min_x;
  var max_y;
  var max_x;
  var stgH = 320;
  var stgW = 320;
  let modelPromise;
  async function init(){
    //console.log('init');
    $('.loading').hide();
    runtime();
  }
  async function myLoadUrl(){
    modelPromise = tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL);
    const img = document.getElementById('img');
    const model = await modelPromise;
    var cs = tf.fromPixels(img).resizeNearestNeighbor([224, 224]);
    var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    res1.map(t => t.dataSync());
    init();
  }
  myLoadUrl();

  async function drawCanvas(){
    var myCanvas = document.getElementById('canvas');
    myCanvas.width = stgW;
    myCanvas.height = stgH;
    var myContext = myCanvas.getContext('2d');

    myContext.drawImage(myVideoStream, 0, 0, stgW, stgH);
    myContext.beginPath();
    myContext.rect(min_x*stgW, min_y*stgH, (max_x - min_x)*stgW, (max_y - min_y)*stgH);
    myContext.lineWidth = 1;
    myContext.strokeStyle = 'black';
    myContext.stroke();
  }
  async function myPredict() {
    const model = await modelPromise;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var cs = tf.fromPixels(canvas).resizeNearestNeighbor([224, 224]);
    var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    res1.map(t => t.dataSync());
    boxes = res1[0].dataSync();
    scores = res1[1].dataSync();
    classes = res1[2].dataSync();
    count = res1[3].dataSync()[0];
    if(scores[0]>=0.9999){
      $("#button").css("background-color","#FFF");
      min_y = boxes[0];
      min_x = boxes[1];
      max_y = boxes[2];
      max_x = boxes[3];
      //console.log(min_y);
      //drawCanvas();
    }
    else{
      $("#button").css("background-color","#000");
      min_y = 0;
      min_x = 0;
      max_y = 0;
      max_x = 0;
    }
  }
});
