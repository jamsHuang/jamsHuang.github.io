$(function() {
  var total_frames = 50;
  var now_frame = 25;
  var front_bones_images_url = [];
  var manifest = [];
  var preload;

  var bone_slider;
  var chest_slider;
  var lung_slider;
  var yokohama_slider;
  var chest_time;
  var lung_time;

  var spd = .20;
  var runSpd = spd;
  var num = 25.0;
  var breathe = true;
  var inhale = false;
  var exhale = false;
  //
  var showImg = 0;
  //
  var pass_frame;

  function init() {
    setupSlider();
    switchImg();
    runtime(now_frame);
    $('.button_box_breathe').css('background-color', '#ACACAC');

    $('.button_box_breathe').click(function() {
      showImg = 0;
      $('.show_img').css({opacity:0.5});
      $('.all_img').css({opacity:1});
      resetBtn();
      if (breathe == true) {
        breathe = false;
        inhale = false;
        exhale = false;
      } else {
        $('.button_box_breathe').css('background-color', '#ACACAC');
        breathe = true;
        inhale = false;
        exhale = false;
        runSpd = spd;
      }
      //runtime(now_frame);
    })
    $('.button_box_inhale').click(function() {
      showImg = 0;
      $('.show_img').css({opacity:0.5});
      $('.all_img').css({opacity:1});
      resetBtn();
      if (inhale == true) {
        breathe = false;
        inhale = false;
        exhale = false;
      } else {
        $('.button_box_inhale').css('background-color', '#ACACAC');
        breathe = false;
        inhale = true;
        exhale = false;
        num = 0;
      }
    })
    $('.button_box_exhale').click(function() {
      showImg = 0;
      $('.show_img').css({opacity:0.5});
      resetBtn();
      if (exhale == true) {
        exhale = false;
      } else {
        $('.button_box_exhale').css('background-color', '#ACACAC');
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
    if (breathe) {

      if (num > (total_frames - 1) || num < 0) {
        runSpd *= -1;
      } else {

      }
    } else if (inhale) {
      if (num > (total_frames - 1)) {
        num = total_frames - 1;
        runSpd = 0;
        inhale = false;
        resetBtn();
      } else {

        runSpd = spd;
      }
    } else if (exhale) {
      if (num < 0) {
        num = 0;
        runSpd = 0;
        exhale = false;
        resetBtn();
      } else {

        runSpd = -spd;
      }
    } else {
      runSpd = 0;
      //resetBtn();
    }
    //console.log(num);
    switchImg();
    requestAnimationFrame(runtime);
  }

  function resetBtn() {
    $('.button_box_breathe').css('background-color', '#FFFFFF');
    $('.button_box_inhale').css('background-color', '#FFFFFF');
    $('.button_box_exhale').css('background-color', '#FFFFFF');
  }

  function setupSlider() {
    bone_slider = $("#bones_ctrl").slider();
    $("#bones_ctrl").on("slide", function(slideEvt) {
      $('.show_img').css({opacity:1});
      $('.all_img').css({opacity:0.5});
      showImg = 1;
      breathe = false;
      inhale = false;
      exhale = false;
      now_frame = slideEvt.value;
      num = now_frame;
      resetBtn();
      switchImg();

    });
    chest_slider = $("#chest_ctrl").slider();
    chest_slider.slider("disable");
    $("#chest_ctrl").on("slide", function(slideEvt) {
      // $('.show_img').css({opacity:1});
      // $('.all_img').css({opacity:0.5});
      // showImg = 1;
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
      $('.show_img').css({opacity:1});
      $('.all_img').css({opacity:0.5});
      showImg = 2;
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

    if (now_frame == pass_frame) {

    } else {
      var urlCreator = window.URL || window.webkitURL;
      var front_all_Url = urlCreator.createObjectURL(preload.getResult("fa" + now_frame, true));
      var side_all_Url = urlCreator.createObjectURL(preload.getResult("sa" + now_frame, true));
      // var smokeUrl = urlCreator.createObjectURL(preload.getResult("fs" + now_frame, true));
      var show_url_front;
      var show_url_side;
      if (showImg == 0) {
        show_url_front = urlCreator.createObjectURL(preload.getResult("fs" + now_frame, true));
        show_url_side = urlCreator.createObjectURL(preload.getResult("ss" + now_frame, true));
      } else if (showImg == 1) {
        show_url_front = urlCreator.createObjectURL(preload.getResult("fb" + now_frame, true));
        show_url_side = urlCreator.createObjectURL(preload.getResult("sb" + now_frame, true));
      } else if (showImg == 2) {
        show_url_front = urlCreator.createObjectURL(preload.getResult("fd" + now_frame, true));
        show_url_side = urlCreator.createObjectURL(preload.getResult("sd" + now_frame, true));
      } else if (showImg == 3) {
        show_url_front = urlCreator.createObjectURL(preload.getResult("fl" + now_frame, true));
        show_url_side = urlCreator.createObjectURL(preload.getResult("sl" + now_frame, true));
      }
      $('.front_all_img').attr("src", front_all_Url);
      $('.side_all_img').attr("src", side_all_Url);
      // $('.front_smoke_img').attr("src", smokeUrl);
      $('.front_show_img').attr("src", show_url_front);
      $('.side_show_img').attr("src", show_url_side);
      //
      yokohama_slider.slider('setValue', now_frame);
      bone_slider.slider('setValue', now_frame);
      chest_time = now_frame;
      //console.log(lung_time);
      // if (pass_frame < now_frame) {
      //   $('.textbox_text').html("胸腔變大");
      // } else if (pass_frame > now_frame) {
      //   $('.textbox_text').html("胸腔縮小");
      // } else {
      //   $('.textbox_text').html("");
      // }
      var runChest = setTimeout(run_chest, 100);
      pass_frame = now_frame
    }
  }
  function run_chest(){
    chest_slider.slider('setValue', chest_time);
    lung_time = chest_time;
    var runLung = setTimeout(run_lung, 100);
  }
  function run_lung(){
    lung_slider.slider('setValue', lung_time);
  }

  function setupManifest() {
    for (var i = 0; i < total_frames; i++) {
      var faname = "fa" + i;
      var fbname = "fb" + i;

      var fsname = "fs" + i;
      var fdname = "fd" + i;
      //
      var saname = "sa" + i;
      var sbname = "sb" + i;

      var ssname = "ss" + i;
      var sdname = "sd" + i;

      manifest.push({
        id: faname,
        src: "img/video/front_all/image__" + i + ".png",
      }, {
        id: fbname,
        src: "img/video/front_bone/image__" + i + ".png",
      }, {
        id: fdname,
        src: "img/video/front_diaphragm/image__" + i + ".png",
      }, {
        id: fsname,
        src: "img/video/front_smoke/image__" + i + ".png",
      }, {
        id: saname,
        src: "img/video/side_all/image__" + i + ".png",
      }, {
        id: sbname,
        src: "img/video/side_bone/image__" + i + ".png",
      }, {
        id: sdname,
        src: "img/video/side_diaphragm/image__" + i + ".png",
      }, {
        id: ssname,
        src: "img/video/side_smoke/image__" + i + ".png",
      }, );
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
