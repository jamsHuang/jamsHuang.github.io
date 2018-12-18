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
  // var chest_time;
  // var lung_time;
  //
  var spd = .20;
  var runSpd = spd;
  var num = 25.0;
  //
  var breathe = true;
  var inhale = false;
  var exhale = false;
  //
  var chest_frame = now_frame;
  var chest_time = now_frame;
  var chest_spd = spd;
  var chest_end = false;
  //
  var lung_frame = now_frame;
  var lung_time = now_frame;
  var lung_spd = spd;
  var lung_end = false;
  //
  var showImg = 0;
  //
  var delayTime = 300;
  var pass_frame;
  function resetTime(){
    chest_time = now_frame;
    setTimeout(run_chest, delayTime);
    lung_time = now_frame;
    setTimeout(run_lung, delayTime * 2);
  }
  function init() {
    setupSlider();
    switchImg();
    runtime();
    setTimeout(run_chest, delayTime);
    lung_time = now_frame;
    setTimeout(run_lung, delayTime * 2);
    //
    $('.button_box_breathe').css('background-color', '#ACACAC');

    $('.button_box_breathe').click(function() {
      showImg = 0;
      $('.show_img').css({
        opacity: 0.5
      });
      $('.all_img').css({
        opacity: 1
      });
      resetBtn();
      if (breathe == true) {
        breathe = false;
        inhale = false;
        exhale = false;
        cancelAnimationFrame(chest_req);
        cancelAnimationFrame(lung_req);
      } else {
        $('.button_box_breathe').css('background-color', '#ACACAC');
        breathe = true;
        inhale = false;
        exhale = false;
        chest_frame=lung_frame = now_frame;
        runSpd = spd;
        chest_spd = spd;
        lung_spd = spd;
        cancelAnimationFrame(chest_req);
        cancelAnimationFrame(lung_req);
        resetTime();
      }
      //runtime(now_frame);
    })
    $('.button_box_inhale').click(function() {
      showImg = 0;
      $('.show_img').css({
        opacity: 0.5
      });
      $('.all_img').css({
        opacity: 1
      });
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
      $('.show_img').css({
        opacity: 0.5
      });
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
    //
    if (breathe) {
      if (num > (total_frames - 1) || num < 0) {
        if (num > (total_frames - 1)) {
          if (chest_end === true && lung_end === true) {
            //console.log("runSpd",runSpd);
            runSpd = -spd;
          } else {
            runSpd = 0;
          }

        } else if (num <= 0) {
          if (chest_end === true && lung_end === true) {
            runSpd = spd;
          } else {
            runSpd = 0;
          }
        }
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
    }
    //console.log(now_frame);
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
      $('.show_img').css({
        opacity: 1
      });
      $('.all_img').css({
        opacity: 0.5
      });
      showImg = 1;
      breathe = false;
      inhale = false;
      exhale = false;
      now_frame = slideEvt.value;
      num = now_frame;
      cancelAnimationFrame(chest_req);
      cancelAnimationFrame(lung_req);
      setTimeout(function() {
        chest_frame = now_frame;
      }, delayTime);
      setTimeout(function() {
        lung_frame = now_frame;
      }, delayTime * 2)
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
      $('.show_img').css({
        opacity: 1
      });
      $('.all_img').css({
        opacity: 0.5
      });
      showImg = 2;
      breathe = false;
      inhale = false;
      exhale = false;
      now_frame = slideEvt.value;
      num = now_frame;
      cancelAnimationFrame(chest_req);
      cancelAnimationFrame(lung_req);
      setTimeout(function() {
        chest_frame = now_frame;
      }, delayTime);
      setTimeout(function() {
        lung_frame = now_frame;
      }, delayTime * 2)
      resetBtn();
      //switchImg();
    });
  }

  function switchImg() {

    var urlCreator = window.URL || window.webkitURL;
    var front_all_Url = urlCreator.createObjectURL(preload.getResult("fa" + now_frame, true));
    var side_all_Url = urlCreator.createObjectURL(preload.getResult("sa" + now_frame, true));
    // var smokeUrl = urlCreator.createObjectURL(preload.getResult("fs" + now_frame, true));
    var show_url_front;
    var show_url_side;
    if (showImg == 0) {
      show_url_front = urlCreator.createObjectURL(preload.getResult("fs" + lung_frame, true));
      show_url_side = urlCreator.createObjectURL(preload.getResult("ss" + lung_frame, true));
    } else if (showImg == 1) {
      show_url_front = urlCreator.createObjectURL(preload.getResult("fb" + now_frame, true));
      show_url_side = urlCreator.createObjectURL(preload.getResult("sb" + now_frame, true));
    } else if (showImg == 2) {
      show_url_front = urlCreator.createObjectURL(preload.getResult("fd" + now_frame, true));
      show_url_side = urlCreator.createObjectURL(preload.getResult("sd" + now_frame, true));
    } else if (showImg == 3) {
      show_url_front = urlCreator.createObjectURL(preload.getResult("fl" + lung_frame, true));
      show_url_side = urlCreator.createObjectURL(preload.getResult("sl" + lung_frame, true));
    }
    $('.front_all_img').attr("src", front_all_Url);
    $('.side_all_img').attr("src", side_all_Url);
    // $('.front_smoke_img').attr("src", smokeUrl);
    $('.front_show_img').attr("src", show_url_front);
    $('.side_show_img').attr("src", show_url_side);

    yokohama_slider.slider('setValue', now_frame);
    bone_slider.slider('setValue', now_frame);
    chest_slider.slider('setValue', chest_frame);
    lung_slider.slider('setValue', lung_frame);
  }
  var chest_req;

  function run_chest() {
    if (chest_end == false) {
      chest_time += chest_spd;
      chest_frame = Math.round(chest_time);
      if (breathe) {
        if (chest_time >= (total_frames - 1)) {
          if (chest_end == false) {
            chest_spd = 0;
            chest_end = true;
          }
        } else if (chest_time <= 0) {
          if (chest_end == false) {
            chest_spd = 0;
            chest_end = true;
          }
        } else {
          //chest_end = false;
        }
      }
      chest_req = requestAnimationFrame(run_chest);
    } else {
      if (breathe) {
        if (lung_end == true) {
          if (chest_time >= (total_frames - 1)) {
            chest_spd = -spd;
          } else if (chest_time <= 0) {
            chest_spd = spd;
          }
          cancelAnimationFrame(chest_req);
          chest_end = false;
          setTimeout(run_chest, delayTime);
        } else {
          console.log("wait for lung");
          chest_req = requestAnimationFrame(run_chest);
        }
      }
    }
    console.log('chest_time', chest_frame);
  }
  var lung_req;

  function run_lung() {
    //lung_slider.slider('setValue', lung_time);
    if (lung_end == false) {
      lung_time += lung_spd;
      lung_frame = Math.round(lung_time);
      if (breathe) {
        if (lung_time > (total_frames - 1)) {
          lung_spd = 0;
          lung_end = true;
        } else if (lung_time < 0) {
          lung_spd = 0;
          lung_end = true;
        } else {
          //lung_end = false;
        }
      } else {
        lung_spd = 0;
      }
      //
      //console.log("lung_frame", lung_frame);
      lung_req = requestAnimationFrame(run_lung);
    } else {
      if (breathe) {
        cancelAnimationFrame(lung_req);
        if (lung_time >= (total_frames - 1)) {
          lung_spd = -spd;
        } else if (lung_time <= 0) {
          lung_spd = spd;
        } else {
          //lung_end = false;
        }
        lung_end = false;
        setTimeout(run_lung, delayTime * 2);
      } else {
        lung_spd = 0;
      }
    }
  }

  function setupManifest() {
    for (var i = 0; i < total_frames; i++) {
      var faname = "fa" + i;
      var fbname = "fb" + i;
      //
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
