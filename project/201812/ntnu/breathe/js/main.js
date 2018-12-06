$(function() {
  var total_frames = 50;
  var now_frame = 25;
  var front_bones_images_url = [];
  var manifest = [];
  var preload;

  var bone_slider;
  var lung_slider;
  var yokohama_slider;

  var spd = .20;
  var runSpd = spd;
  var num = 25.0;
  var breathe = true;
  var inhale = false;
  var exhale = false;
  //
  function init() {
    setupSlider();
    switchImg();
    runtime(now_frame);
    $('.button_box_breathe').css('background-color','#ACACAC');

    $('.button_box_breathe').click(function(){
      resetBtn();
      if(breathe == true){
        breathe = false;
        inhale = false;
        exhale = false;
      }
      else{
        $('.button_box_breathe').css('background-color','#ACACAC');
        breathe = true;
        inhale = false;
        exhale = false;
        runSpd = spd;
      }
      //runtime(now_frame);
    })
    $('.button_box_inhale').click(function(){
      resetBtn();
      if(inhale == true){
        breathe = false;
        inhale = false;
        exhale = false;
      }else{
          $('.button_box_inhale').css('background-color','#ACACAC');
        breathe = false;
        inhale = true;
        exhale = false;
        num = 0;
      }
    })
    $('.button_box_exhale').click(function(){
      resetBtn();
      if(exhale == true){
        exhale = false;
      }
      else{
          $('.button_box_exhale').css('background-color','#ACACAC');
        breathe = false;
        inhale = false;
        exhale = true;
        num = 49;
      }
    })
  }

  function runtime() {
    num += runSpd;
    now_frame = Math.round(num);

    //console.log(breathe,inhale,exhale);
    if(breathe){

      if(num>(total_frames-1) || num<0 )
      {
        runSpd*=-1;
      }
      else{

      }
    }else if(inhale){
      if(num>(total_frames-1))
      {
        num = total_frames-1;
        runSpd = 0;
        inhale = false;
        resetBtn();
      }
      else {

        runSpd = spd;
      }
    }
    else if(exhale){
      if(num<0){
        num = 0;
        runSpd = 0;
        exhale = false;
        resetBtn();
      }else{

        runSpd = -spd;
      }
    }
    else{
      runSpd = 0;
      //resetBtn();
    }
    //console.log(num);
    switchImg();
    requestAnimationFrame(runtime);
  }
  function resetBtn(){
    $('.button_box_breathe').css('background-color','#FFFFFF');
    $('.button_box_inhale').css('background-color','#FFFFFF');
    $('.button_box_exhale').css('background-color','#FFFFFF');
  }

  function setupSlider() {
    bone_slider = $("#bones_ctrl").slider();
    $("#bones_ctrl").on("slide", function(slideEvt) {
      breathe = false;
      inhale = false;
      exhale = false;
      now_frame = slideEvt.value;
      num = now_frame;
      resetBtn();
      switchImg();

    });
    lung_slider = $("#lung_ctrl").slider();
    lung_slider.slider("disable");
    $("#lung_ctrl").on("slide", function(slideEvt) {
      breathe = false;
      inhale = false;
      exhale = false;
      now_frame = slideEvt.value;
      num = now_frame;
      resetBtn();
      switchImg();

    });
    yokohama_slider = $("#yokohama_ctrl").slider();
    $("#yokohama_ctrl").on("slide", function(slideEvt) {
      breathe = false;
      inhale = false;
      exhale = false;
      now_frame = slideEvt.value;
      num = now_frame;
      resetBtn();
      switchImg();
    });
  }

  function switchImg() {
    var urlCreator = window.URL || window.webkitURL;
    var boneUrl = urlCreator.createObjectURL(preload.getResult("fb" + now_frame, true));
    var lungUrl = urlCreator.createObjectURL(preload.getResult("fl" + now_frame, true));
    // var smokeUrl = urlCreator.createObjectURL(preload.getResult("fs" + now_frame, true));
    $('.front_lung_img').attr("src", lungUrl);
    $('.front_bone_img').attr("src", boneUrl);
    // $('.front_smoke_img').attr("src", smokeUrl);
    yokohama_slider.slider('setValue', now_frame);
    bone_slider.slider('setValue', now_frame);

    var counter = { var: lung_slider.slider('getValue') };
    TweenLite.to(counter, 0.05, {
        var: now_frame, delay:0.01,
        onUpdate: function () {
            //console.log(Math.ceil(counter.var));
            lung_slider.slider('setValue',Math.round(counter.var));
        },
        ease:Power2.easeOut
    });

  }

  function setupManifest() {
    for (var i = 0; i < total_frames; i++) {
      var fbname = "fb" + i;
      var flname = "fl" + i;
      var fsname = "fs" + i;
      manifest.push({
        id: fbname,
        src: "img/video/front_bone/image__" + i + ".png",
      }, {
        id: flname,
        src: "img/video/front_lung/image__" + i + ".png",
      },
      // {
      //   id: fsname,
      //   src: "img/video/front_smoke/image__" + i + ".png",
      // }
      );
    }
    //console.log(manifest);
  }
  //开始预加载
  function startPreload() {
    preload = new createjs.LoadQueue(true);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(manifest);

  }
  //处理单个文件加载
  function handleFileLoad(event) {
    console.log("文件类型: " + event.item.type);
  }
  //处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
  function loadError(evt) {
    console.log("加载出错！", evt.text);
  }
  //已加载完毕进度
  function handleFileProgress(event) {
    console.log((preload.progress * 100 | 0) + " %");
    stage.update();
  }
  //全度资源加载完毕
  function loadComplete(event) {
    console.log("已加载完毕全部资源");
    $(".loading").hide();
    init();
  }
  setupManifest();
  startPreload();
});
