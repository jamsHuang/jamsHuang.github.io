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
  var now_chest, pass_chest;
  var chest_frame = now_frame;
  var chest_time = now_frame;
  var chest_spd = spd;
  var chest_end = false;
  //
  var now_lung, pass_lung;
  var lung_frame = now_frame;
  var lung_time = now_frame;
  var lung_spd = spd;
  var lung_end = false;
  //
  var showImg = 0;
  //
  var delayTime = 300;
  var pass_frame;

  function resetTime() {
    chest_time = now_frame;
    setTimeout(run_chest, delayTime);
    lung_time = now_frame;
    setTimeout(run_lung, delayTime * 2);
  }

  function init() {
    setupSlider();
    runtime();
    setTimeout(run_chest, delayTime);
    chest_run = true;
    setTimeout(run_lung, delayTime * 2);
    lung_run = true;
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
      if (breathe) {
        breathe = false;
      } else {
        exhale = false;
        inhale = false;
        breathe = true;
        $('.button_box_breathe').css('background-color', '#ACACAC');
        chest_frame = lung_frame = chest_time = lung_time = num = now_frame = 25;
        chest_spd = lung_spd = runSpd = spd;
        //
        resetChest();
        resetLung();
        //
      }
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
      if (inhale) {
        inhale = false;
      } else {
        breathe = false;
        exhale = false;
        inhale = true;
        chest_frame = lung_frame = chest_time = lung_time = num = now_frame = 0;
        chest_spd = lung_spd = spd;
        resetChest();
        resetLung();
        $('.button_box_inhale').css('background-color', '#ACACAC');
      }
    })
    $('.button_box_exhale').click(function() {
      showImg = 0;
      $('.show_img').css({
        opacity: 0.5
      });
      resetBtn();
      if (exhale) {
        exhale = false;
      } else {
        breathe = false;
        inhale = false;
        chest_frame = lung_frame = chest_time = lung_time = num = now_frame = total_frames - 1;
        chest_spd = lung_spd = -spd;
        exhale = true;
        //
        resetChest();
        resetLung();
        $('.button_box_exhale').css('background-color', '#ACACAC');
      }
    })
  }
  var chest_req;
  var chest_run = false;

  function run_chest() {
    chest_time += chest_spd;
    now_chest = chest_time;
    chest_frame = Math.round(now_chest);
    //console.log('chest_run', now_chest);
    if (chest_run) {
      if (chest_frame == now_frame) {
        if (breathe || inhale || exhale) {
          //console.log('keep going');
          if (lung_frame == now_frame) {
            chest_spd = runSpd;
          } else {

          }
        } else {
          cancelAnimationFrame(chest_req);
          chest_run = false;
          //console.log("stop");
        }
      } else {
        if (chest_frame >= (total_frames - 1)) {
          chest_spd = -spd;
        } else if (chest_frame <= 0) {
          chest_spd = spd;
        } else {

        }
        chest_req = requestAnimationFrame(run_chest);
      }

    } else {
      cancelAnimationFrame(chest_req);
      chest_run = false;
    }
    //pass_chest = chest_time;
    //console.log(now_chest);
  }

  function resetChest() {
    cancelAnimationFrame(chest_req);
    chest_run = true;
    chest_time = now_frame;
    setTimeout(run_chest, delayTime);
  }
  var lung_req;
  var lung_run = false;

  function run_lung() {
    lung_time += lung_spd;
    now_lung = lung_time;
    lung_frame = Math.round(now_lung);
    //console.log("lung_run", lung_frame);
    if (lung_run) {
      if (lung_frame == now_frame) {
        if (breathe || inhale || exhale) {
          lung_spd = runSpd;
        } else {
          cancelAnimationFrame(lung_req);
          lung_run = false;
          //console.log('stop');
        }
      } else {
        if (lung_frame >= (total_frames - 1)) {
          lung_spd = -spd;
        } else if (lung_frame <= 0) {
          lung_spd = spd;
        } else {

        }
        lung_req = requestAnimationFrame(run_lung);
      }

    } else {
      cancelAnimationFrame(lung_req);
      lung_run = false;
    }
    //pass_lung = lung_time;
    //console.log(now_lung);
  }

  function resetLung() {
    cancelAnimationFrame(lung_req);
    lung_run = true;
    lung_time = now_frame;
    setTimeout(run_lung, delayTime * 2);
  }

  function runtime() {
    if (breathe || exhale || inhale) {
      num += runSpd;
      now_frame = Math.round(num);
      if (now_frame >= (total_frames - 1)) {
        if (inhale) {
          runSpd = 0;
          if (chest_frame >= (total_frames - 1) && lung_frame >= (total_frames - 1)) {
            resetBtn();
            inhale = false;
            chest_run = lung_run = false;
          }
        } else {
          if (exhale) {
            runSpd = -spd;
          } else {
            if (breathe) {
              if (chest_frame >= (total_frames - 1) && lung_frame >= (total_frames - 1)) {
                runSpd = -spd;
                resetChest();
                resetLung();
              } else {
                runSpd = 0;
              }
            } else {

            }
          }
        }

      } else if (now_frame <= 0) {
        if (exhale) {
          runSpd = 0;
          if (chest_frame <= 0 && lung_frame <= 0) {
            resetBtn();
            exhale = false;
            chest_run = lung_run = false;
          }
        } else {
          if (inhale) {
            runSpd = spd;
          } else {
            if (breathe) {
              if (chest_frame <= 0 && lung_frame <= 0) {
                runSpd = spd;
                resetChest();
                resetLung();
              } else {
                runSpd = 0;
              }
            } else {

            }
          }
        }
      } else {

      }

    }
    switchImg();
    //pass_chest = now_chest;
    //pass_lung = now_lung;
    pass_frame = now_frame;
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
      chest_run = false;
      lung_run = false;
      now_frame = slideEvt.value;
      num = now_frame;
      var temp_frame = now_frame;
      setTimeout(function(){
        chest_frame = temp_frame;
        setTimeout(function(){
          lung_frame = temp_frame;
        },200);
      },200);
    });
    chest_slider = $("#chest_ctrl").slider();
    chest_slider.slider("disable");
    $("#chest_ctrl").on("slide", function(slideEvt) {
      breathe = false;
      inhale = false;
      exhale = false;
      resetBtn();
    });
    lung_slider = $("#lung_ctrl").slider();
    lung_slider.slider("disable");
    $("#lung_ctrl").on("slide", function(slideEvt) {
      breathe = false;
      inhale = false;
      exhale = false;
      resetBtn();
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
      //
      chest_run = false;
      lung_run = false;
      //
      now_frame = slideEvt.value;
      num = now_frame;
      var temp_frame = now_frame;
      setTimeout(function(){
        chest_frame = temp_frame;
        setTimeout(function(){
          lung_frame = temp_frame;
        },200);
      },200);
      //lung_frame = now_frame;
      resetBtn();
    });
  }

  function switchImg() {

    var urlCreator = window.URL || window.webkitURL;
    if (now_frame == pass_frame && now_chest == pass_chest && now_lung == pass_lung) {

    } else {
      //console.log(now_frame);
      var front_all_Url = urlCreator.createObjectURL(preload.getResult("fa" + now_frame, true));
      var side_all_Url = urlCreator.createObjectURL(preload.getResult("sa" + now_frame, true));
      $('.front_all_img').attr("src", front_all_Url);
      $('.side_all_img').attr("src", side_all_Url);
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
      //
      $('.front_show_img').attr("src", show_url_front);
      $('.side_show_img').attr("src", show_url_side);
      //
      yokohama_slider.slider('setValue', now_frame);
      bone_slider.slider('setValue', now_frame);
      chest_slider.slider('setValue', chest_frame);
      lung_slider.slider('setValue', lung_frame);
    }
    pass_chest = now_chest;
    pass_lung = now_lung;
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
    //console.log("文件类型: " + event.item.type);
  }
  //处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
  function loadError(evt) {
    //console.log("加载出错！", evt.text);
  }
  //已加载完毕进度
  function handleFileProgress(event) {
    //console.log((preload.progress * 100 | 0) + " %");
    stage.update();
  }
  //全度资源加载完毕
  function loadComplete(event) {
    //console.log("已加载完毕全部资源");
    $(".loading").hide();
    init();
  }
  setupManifest();
  startPreload();
});
