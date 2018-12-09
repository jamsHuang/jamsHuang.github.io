$(function() {

  const b0s0 = "不會造成血糖上升";
  const b1s0 = "不會造成血糖上升";
  const b2s0 = "不會造成血糖上升";
  const b3s0 = "不會造成血糖上升";
  const b4s0 = "會造成血糖上升";
  const b5s0 = "會造成血糖上升";
  const b6s0 = "會造成血糖上升";
  const b7s0 = "不會造成血糖上升";

  const b0s1 = "不會造成血糖上升";
  const b1s1 = "不會造成血糖上升";
  const b2s1 = "不會造成血糖上升";
  const b3s1 = "會造成血糖上升";
  const b4s1 = "會造成血糖上升";
  const b5s1 = "會造成血糖上升";
  const b6s1 = "會造成血糖上升";
  const b7s1 = "不會造成血糖上升";

  const b0s2 = "不會造成血糖上升";
  const b1s2 = "不會造成血糖上升";
  const b2s2 = "不會造成血糖上升";
  const b3s2 = "會造成血糖上升";
  const b4s2 = "會造成血糖上升";
  const b5s2 = "會造成血糖上升";
  const b6s2 = "會造成血糖上升";
  const b7s2 = "不會造成血糖上升";

  const b0s3 = "不會造成血糖上升";
  const b1s3 = "不會造成血糖上升";
  const b2s3 = "不會造成血糖上升";
  const b3s3 = "會造成血糖上升";
  const b4s3 = "會造成血糖上升";
  const b5s3 = "會造成血糖上升";
  const b6s3 = "會造成血糖上升";
  const b7s3 = "不會造成血糖上升";

  const b0s4 = "會造成血糖上升";
  const b1s4 = "不會造成血糖上升";
  const b2s4 = "不會造成血糖上升";
  const b3s4 = "會造成血糖上升";
  const b4s4 = "會造成血糖上升";
  const b5s4 = "會造成血糖上升";
  const b6s4 = "不會造成血糖上升";
  const b7s4 = "不會造成血糖上升";

  const b0s5 = "不會造成血糖上升";
  const b1s5 = "不會造成血糖上升";
  const b2s5 = "不會造成血糖上升";
  const b3s5 = "會造成血糖上升";
  const b4s5 = "會造成血糖上升";
  const b5s5 = "會造成血糖上升";
  const b6s5 = "會造成血糖上升";
  const b7s5 = "不會造成血糖上升";

  const b0s6 = "不會造成血糖上升";
  const b1s6 = "不會造成血糖上升";
  const b2s6 = "不會造成血糖上升";
  const b3s6 = "會造成血糖上升";
  const b4s6 = "會造成血糖上升";
  const b5s6 = "會造成血糖上升";
  const b6s6 = "會造成血糖上升";
  const b7s6 = "不會造成血糖上升";

  const b0s7 = "會造成血糖上升";
  const b1s7 = "不會造成血糖上升";
  const b2s7 = "不會造成血糖上升";
  const b3s7 = "會造成血糖上升";
  const b4s7 = "會造成血糖上升";
  const b5s7 = "會造成血糖上升";
  const b6s7 = "不會造成血糖上升";
  const b7s7 = "不會造成血糖上升";

  const noticeText = "請拖拉狀況按鈕"

  var manifest = [];
  var preload;
  var dragtarget;

  function init() {
    dragSetting();
    runtime();
  }
  $(document).on("mousemove", function(event) {
    mousex = event.pageX;
    mousey = event.pageY;
  });

  function dragSetting() {
    $('.btn_box_block').draggable({
      revert: 'invalid',
      helper: "clone",
      start: function() {
        dragtarget = this.id;
        $('.notice_box_text').html(""+noticeText);
        $('.notice_box').css("background-color","#CACACA");
      },
      drag: function(event, ui) {
        //console.log(ui);
        ui.position.left = mousex - 10;
        ui.position.top = mousey - 10;
      },
      containment: "#containment-wrapper",
      scroll: false
    });
    $('.hitarea').droppable({
      accept: ".btn_box_block",
      over: function(event, ui) {
        draggingOver(event);
      },
      out: function(event, ui) {
        draggingOut(event);
      },
      drop: function(event, ui) {
        testDrog(event);
      }
    })
  }

  function draggingOut(event) {
    //console.log(event.target.id);
    var id = event.target.id;
    $('#' + id).css('border', '0');
  }

  function draggingOver(event) {
    //console.log(event.target.id);
    var id = event.target.id;
    $('#' + id).css('border', '3px solid #330000');
  }

  function testDrog(event) {
    //console.log(event);
    var id = event.target.id;
    $('#' + id).css('border', '0');
    var str;
    var bText = $("#" + dragtarget)[0].innerText;
    //console.log(bText);
    switch (id) {
      case 's0':
        if (dragtarget == 'block_0') {
          str = bText + b0s0;
        } else if (dragtarget == 'block_1') {
          str = bText + b1s0;
        } else if (dragtarget == 'block_2') {
          str = bText + b2s0;
        } else if (dragtarget == 'block_3') {
          str = bText + b3s0;
        } else if (dragtarget == 'block_4') {
          str = bText + b4s0;
        } else if (dragtarget == 'block_5') {
          str = bText + b5s0;
        } else if (dragtarget == 'block_6') {
          str = bText + b6s0;
        } else if (dragtarget == 'block_7') {
          str = bText + b7s0;
        } else {
          str = noticeText;
        }
        break;
      case 's1':
        if (dragtarget == 'block_0') {
          str = bText + b0s1;
        } else if (dragtarget == 'block_1') {
          str = bText + b1s1;
        } else if (dragtarget == 'block_2') {
          str = bText + b2s1;
        } else if (dragtarget == 'block_3') {
          str = bText + b3s1;
        } else if (dragtarget == 'block_4') {
          str = bText + b4s1;
        } else if (dragtarget == 'block_5') {
          str = bText + b5s1;
        } else if (dragtarget == 'block_6') {
          str = bText + b6s1;
        } else if (dragtarget == 'block_7') {
          str = bText + b7s1;
        } else {
          str = noticeText;
        }
        break;
      case 's2':
        if (dragtarget == 'block_0') {
          str = bText + b0s2;
        } else if (dragtarget == 'block_1') {
          str = bText + b1s2;
        } else if (dragtarget == 'block_2') {
          str = bText + b2s2;
        } else if (dragtarget == 'block_3') {
          str = bText + b3s2;
        } else if (dragtarget == 'block_4') {
          str = bText + b4s2;
        } else if (dragtarget == 'block_5') {
          str = bText + b5s2;
        } else if (dragtarget == 'block_6') {
          str = bText + b6s2;
        } else if (dragtarget == 'block_7') {
          str = bText + b7s2;
        } else {
          str = noticeText;
        }
        break;
      case 's3':
        if (dragtarget == 'block_0') {
          str = bText + b0s3;
        } else if (dragtarget == 'block_1') {
          str = bText + b1s3;
        } else if (dragtarget == 'block_2') {
          str = bText + b2s3;
        } else if (dragtarget == 'block_3') {
          str = bText + b3s3;
        } else if (dragtarget == 'block_4') {
          str = bText + b4s3;
        } else if (dragtarget == 'block_5') {
          str = bText + b5s3;
        } else if (dragtarget == 'block_6') {
          str = bText + b6s3;
        } else if (dragtarget == 'block_7') {
          str = bText + b7s3;
        } else {
          str = noticeText;
        }
        break;
      case 's4':
        if (dragtarget == 'block_0') {
          str = bText + b0s4;
        } else if (dragtarget == 'block_1') {
          str = bText + b1s4;
        } else if (dragtarget == 'block_2') {
          str = bText + b2s4;
        } else if (dragtarget == 'block_3') {
          str = bText + b3s4;
        } else if (dragtarget == 'block_4') {
          str = bText + b4s4;
        } else if (dragtarget == 'block_5') {
          str = bText + b5s4;
        } else if (dragtarget == 'block_6') {
          str = bText + b6s4;
        } else if (dragtarget == 'block_7') {
          str = bText + b7s4;
        } else {
          str = noticeText;
        }
        break;
      case 's5':
        if (dragtarget == 'block_0') {
          str = bText + b0s5;
        } else if (dragtarget == 'block_1') {
          str = bText + b1s5;
        } else if (dragtarget == 'block_2') {
          str = bText + b2s5;
        } else if (dragtarget == 'block_3') {
          str = bText + b3s5;
        } else if (dragtarget == 'block_4') {
          str = bText + b4s5;
        } else if (dragtarget == 'block_5') {
          str = bText + b5s5;
        } else if (dragtarget == 'block_6') {
          str = bText + b6s5;
        } else if (dragtarget == 'block_7') {
          str = bText + b7s5;
        } else {
          str = noticeText;
        }
        break;
      case 's6':
        if (dragtarget == 'block_0') {
          str = bText + b0s6;
        } else if (dragtarget == 'block_1') {
          str = bText + b1s6;
        } else if (dragtarget == 'block_2') {
          str = bText + b2s6;
        } else if (dragtarget == 'block_3') {
          str = bText + b3s6;
        } else if (dragtarget == 'block_4') {
          str = bText + b4s6;
        } else if (dragtarget == 'block_5') {
          str = bText + b5s6;
        } else if (dragtarget == 'block_6') {
          str = bText + b6s6;
        } else if (dragtarget == 'block_7') {
          str = bText + b7s6;
        } else {
          str = noticeText;
        }
        break;
      case 's7':
        if (dragtarget == 'block_0') {
          str = bText + b0s7;
        } else if (dragtarget == 'block_1') {
          str = bText + b1s7;
        } else if (dragtarget == 'block_2') {
          str = bText + b2s7;
        } else if (dragtarget == 'block_3') {
          str = bText + b3s7;
        } else if (dragtarget == 'block_4') {
          str = bText + b4s7;
        } else if (dragtarget == 'block_5') {
          str = bText + b5s7;
        } else if (dragtarget == 'block_6') {
          str = bText + b6s7;
        } else if (dragtarget == 'block_7') {
          str = bText + b7s7;
        } else {
          str = noticeText;
        }
        break;
    }
    $('.notice_box_text').html(str);
    if (str.indexOf('不') == -1) {
      $('.notice_box').css('background-color', '#c8eac8')
    } else {
      $('.notice_box').css('background-color', '#f39696')
    }
  }

  function runtime() {
    requestAnimationFrame(runtime);
  }

  function setupManifest() {
    manifest.push({
      id: "img0",
      src: "img/video/front_bone/image__0.png",
    }, {
      id: "img1",
      src: "img/video/front_lung/image__1.png",
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
    console.log("全部下載完成");
    $(".loading").hide();
    init();
  }
  setupManifest();
  startPreload();
});
