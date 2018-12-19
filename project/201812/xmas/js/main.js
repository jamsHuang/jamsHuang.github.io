$(function() {
  //get camera
  'use strict';
  // Put variables in global scope to make them available to the browser console.
  const video = document.querySelector('video');
  const canvas = window.canvas = document.querySelector('canvas');
  const constraints = {
    audio: false,
    video: {
      facingMode: 'environment',
      width: { min: 320, ideal: 480, max: 640 },
      height: { min: 640, ideal: 960, max: 1280 }
    }
  };

  function handleSuccess(stream) {
    window.stream = stream; // make stream available to browser console
    video.srcObject = stream;
  }

  function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

  //
  const img = document.getElementById('img');
  //console.log(img);
  const MODEL_URL = 'web_model/tensorflowjs_model.pb'
  const WEIGHTS_URL = 'web_model/weights_manifest.json'

  let modelPromise;
  modelPromise = tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL);
  //
  async function checkModel() {

    showIndex();
  }
  function showIndex(){
    $('.loading').hide();
    runtime();
  }
  function runtime(){
    keepChecking();
    drawCanvas();
    requestAnimationFrame(runtime);
  }
  var boxes=[];
  var scores =[];
  var classes =[];
  var count= [];
  var model;
  const IMAGENET_CLASSES = {
    0: 'lgmouse'
  }
  async function keepChecking(){
    model = await modelPromise;
    var cs = tf.fromPixels(canvas).resizeNearestNeighbor([224, 224]);
    var res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    //console.log(res1);
    res1.map(t => t.dataSync());
    //console.log(res1.map);
    //const res2 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    boxes = res1[0].dataSync();
    scores = res1[1].dataSync();
    classes = res1[2].dataSync();
    count = res1[3].dataSync()[0];
    //console.log(scores[0]);
    if(scores[0]>=0.99){
      $("#button").css("background-color","#FFF");
    }
    else{
      $("#button").css("background-color","#000");
    }
  }

  function drawCanvas() {
    //console.log('number of detections: ', count);
    var c = document.getElementById('canvas');
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    var context = c.getContext('2d');
    context.drawImage(video, 0, 0, c.width, c.height);
    context.font = '20px Arial';


  }
  checkModel()
});
