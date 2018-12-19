$(function() {
  var manifest = [];

  function setupManifest() {

    manifest.push({
      id: "img0",
      src: "img/get_cam_bg.png",
    });
  }
  //開始載入
  function startPreload() {
    preload = new createjs.LoadQueue(true);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(manifest);
  }
  //處理單個文件下載
  function handleFileLoad(event) {
    console.log("文件类型: " + event.item.type);
  }
  //下載錯誤
  function loadError(evt) {
    console.log("加载出错！", evt.text);
  }
  //處以完畢的進度
  function handleFileProgress(event) {
    console.log((preload.progress * 100 | 0) + " %");
    stage.update();
  }
  //全部下載完成
  function loadComplete(event) {
    //console.log("全部下載完成");
    //$(".loading").hide();
    //init();
  }
  setupManifest();
  startPreload();
  //get camera

  'use strict';

  // Put variables in global scope to make them available to the browser console.
  const video = document.querySelector('video');
  const canvas = window.canvas = document.querySelector('canvas');
  canvas.width = 320;
  canvas.height = 480;

  const button = document.querySelector('button');
  button.onclick = function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  const constraints = {
    audio: false,
    video: {facingMode: 'environment'}
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

    const model = await modelPromise;
    const cs = tf.fromPixels(img);
    //cs.print()
    // console.log(model.executor);
    //console.log(model);
    const res1 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    console.log(res1);
    res1.map(t => t.dataSync());
    //console.log(res1.map);
    //const res2 = await model.executeAsync(cs.reshape([1, ...cs.shape]));
    const boxes = res1[0].dataSync();
    const scores = res1[1].dataSync();
    const classes = res1[2].dataSync();
    const count = res1[3].dataSync()[0];
    const IMAGENET_CLASSES = {
      0: 'lgmouse'
    }
    //
    console.log(boxes[0]);
    console.log("scores", scores[0]);
    showIndex();

  }
  function showIndex(){
    $('.loading').hide();
    runtime();
  }
  function runtime(){
    requestAnimationFrame(runtime);
  }

  function drawCanvas() {
    console.log('number of detections: ', count);
    const c = document.getElementById('canvas');
    const context = c.getContext('2d');
    context.drawImage(img, 0, 0);
    context.font = '20px Arial';

    for (let i = 0; i < 1; i++) {
      const min_y = boxes[i * 4] * 320;
      const min_x = boxes[i * 4 + 1] * 240;
      const max_y = boxes[i * 4 + 2] * 320;
      const max_x = boxes[i * 4 + 3] * 240;

      context.beginPath();
      context.rect(min_x, min_y, max_x - min_x, max_y - min_y);
      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.stroke();
      context.fillText(
        scores[i].toFixed(3) + 'lgmouse',
        min_x, min_y - 5);
    }

  }
  checkModel()
});
