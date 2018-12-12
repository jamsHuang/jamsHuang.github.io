$(function() {
  var tf=-1;
  const b0s0 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s0 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s0 = "胰島素不會讓血糖濃度上升喔";
  const b3s0 = "升糖素不會讓血糖濃度下降喔";
  const b4s0 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s0 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s0 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s0 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何呢？";
  const b8s0 = "細胞使用血糖，會讓血糖濃度下降";

  const b0s1 = "攝食、消化與吸收，會讓血糖濃度快速地升高";
  const b1s1 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s1 = "胰島素不會讓血糖濃度上升喔";
  const b3s1 = "升糖素不會讓血糖濃度下降喔";
  const b4s1 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s1 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s1 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s1 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何呢？";
  const b8s1 = "細胞持續使用血糖的話，那麼，血糖濃度應該會如何呢？";

  const b0s2 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s2 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s2 = "胰島素分泌會促使血糖濃度降低";
  const b3s2 = "升糖素不會讓血糖濃度下降喔";
  const b4s2 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s2 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s2 = "合成肝糖，表示血糖濃度會下降";
  const b7s2 = "細胞使用血糖，會讓血糖濃度下降";
  const b8s2 = "細胞持續使用血糖的話，那麼，血糖濃度應該會如何呢？";

  const b0s3 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s3 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s3 = "胰島素分泌會促使血糖濃度降低";
  const b3s3 = "升糖素分泌會促使血糖濃度升高";
  const b4s3 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s3 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s3 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s3 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何呢？";
  const b8s3 = "細胞持續使用血糖的話，那麼，血糖濃度應該會如何呢？";

  const b0s4 = "攝食、消化與吸收，會讓血糖濃度快速地升高";
  const b1s4 = "運動時，腎上腺素分泌量增加，血糖濃度快速升高";
  const b2s4 = "胰島素不會讓血糖濃度上升喔";
  const b3s4 = "升糖素不會讓血糖濃度下降喔";
  const b4s4 = "緊張時，腎上腺素分泌量增加，血糖濃度快速升高";
  const b5s4 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s4 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s4 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何呢？";
  const b8s4 = "細胞持續使用血糖的話，那麼，血糖濃度應該會如何呢？";

  const b0s5 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s5 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s5 = "胰島素分泌會促使血糖濃度降低";
  const b3s5 = "升糖素不會讓血糖濃度下降喔";
  const b4s5 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s5 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s5 = "合成肝糖，表示血糖濃度會下降";
  const b7s5 = "細胞使用血糖，會讓血糖濃度下降";
  const b8s5 = "細胞持續使用血糖的話，那麼，血糖濃度應該會如何呢？";

  const b0s6 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s6 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s6 = "胰島素分泌會促使血糖濃度降低";
  const b3s6 = "升糖素分泌會促使血糖濃度升高";
  const b4s6 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s6 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s6 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s6 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何呢？";
  const b8s6 = "細胞持續使用血糖的話，那麼，血糖濃度應該會如何呢？";

  const b0s7 = "攝食、消化與吸收，會讓血糖濃度快速地升高";
  const b1s7 = "運動時，腎上腺素分泌量增加，血糖濃度快速升高";
  const b2s7 = "胰島素不會讓血糖濃度上升喔";
  const b3s7 = "升糖素不會讓血糖濃度下降喔";
  const b4s7 = "緊張時，腎上腺素分泌量增加，血糖濃度快速升高";
  const b5s7 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s7 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s7 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何呢？";
  const b8s7 = "細胞持續使用血糖的話，那麼，血糖濃度應該會如何呢？";

  const b0s8 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s8 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s8 = "胰島素分泌會促使血糖濃度降低";
  const b3s8 = "升糖素不會讓血糖濃度下降喔";
  const b4s8 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s8 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s8 = "合成肝糖，表示血糖濃度會下降";
  const b7s8 = "細胞使用血糖，會讓血糖濃度下降";
  const b8s8 = "細胞持續使用血糖的話，那麼，血糖濃度應該會如何呢？";

  const b0s9 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s9 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s9 = "胰島素不會讓血糖濃度上升喔";
  const b3s9 = "升糖素不會讓血糖濃度下降喔";
  const b4s9 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s9 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s9 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s9 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何呢？";
  const b8s9 = "細胞使用血糖，會讓血糖濃度下降";

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
          str = b0s0;
          tf = 0;
        } else if (dragtarget == 'block_1') {
          str = b1s0;
          tf = 0;
        } else if (dragtarget == 'block_2') {
          str = b2s0;
          tf = 0;
        } else if (dragtarget == 'block_3') {
          str = b3s0;
          tf = 0;
        } else if (dragtarget == 'block_4') {
          str = b4s0;
          tf = 0;
        } else if (dragtarget == 'block_5') {
          str = b5s0;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s0;
          tf = 0;
        } else if (dragtarget == 'block_7') {
          str = b7s0;
          tf = 0;
        } else if (dragtarget == 'block_8') {
          str = b8s0;
          tf = 1;
        } else {
          str = noticeText;
          tf = -1;
        }
        break;
      case 's1':
        if (dragtarget == 'block_0') {
          str = b0s1;
          tf = 1;
        } else if (dragtarget == 'block_1') {
          str = b1s1;
          tf = 0;
        } else if (dragtarget == 'block_2') {
          str = b2s1;
          tf = 0;
        } else if (dragtarget == 'block_3') {
          str = b3s1;
          tf = 0;
        } else if (dragtarget == 'block_4') {
          str = b4s1;
          tf = 0;
        } else if (dragtarget == 'block_5') {
          str = b5s1;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s1;
          tf = 0;
        } else if (dragtarget == 'block_7') {
          str = b7s1;
          tf = 0;
        } else if (dragtarget == 'block_8') {
          str = b8s1;
          tf = 0;
        } else {
          str = noticeText;
          tf = -1;
        }
        break;
      case 's2':
        if (dragtarget == 'block_0') {
          str = b0s2;
          tf = 0;
        } else if (dragtarget == 'block_1') {
          str = b1s2;
          tf = 0;
        } else if (dragtarget == 'block_2') {
          str = b2s2;
          tf = 1;
        } else if (dragtarget == 'block_3') {
          str = b3s2;
          tf = 0;
        } else if (dragtarget == 'block_4') {
          str = b4s2;
          tf = 0;
        } else if (dragtarget == 'block_5') {
          str = b5s2;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s2;
          tf = 1;
        } else if (dragtarget == 'block_7') {
          str = b7s2;
          tf = 1;
        } else if (dragtarget == 'block_8') {
          str = b8s2;
          tf = 0;
        } else {
          str = noticeText;
          tf = -1;
        }
        break;
      case 's3':
        if (dragtarget == 'block_0') {
          str = b0s3;
          tf = 0;
        } else if (dragtarget == 'block_1') {
          str = b1s3;
          tf = 0;
        } else if (dragtarget == 'block_2') {
          str = b2s3;

          tf = 1;
        } else if (dragtarget == 'block_3') {
          str = b3s3;
          tf = 1;
        } else if (dragtarget == 'block_4') {
          str = b4s3;
          tf = 0;
        } else if (dragtarget == 'block_5') {
          str = b5s3;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s3;
          tf = 0;
        } else if (dragtarget == 'block_7') {
          str = b7s3;
          tf = 0;
        } else if (dragtarget == 'block_8') {
          str = b8s3;
          tf = 0;
        } else {
          str = noticeText;
          tf = -1;
        }
        break;
      case 's4':
        if (dragtarget == 'block_0') {
          str = b0s4;
          tf = 1;
        } else if (dragtarget == 'block_1') {
          str = b1s4;
          tf = 1;
        } else if (dragtarget == 'block_2') {
          str = b2s4;
          tf = 0;
        } else if (dragtarget == 'block_3') {
          str = b3s4;
          tf = 0;
        } else if (dragtarget == 'block_4') {
          str = b4s4;
          tf = 1;
        } else if (dragtarget == 'block_5') {
          str = b5s4;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s4;
          tf = 0;
        } else if (dragtarget == 'block_7') {
          str = b7s4;
          tf = 0;
        }  else if (dragtarget == 'block_8') {
          str = b8s4;
          tf = 0;
        }else {
          str = noticeText;
          tf = -1;
        }
        break;
      case 's5':
        if (dragtarget == 'block_0') {
          str = b0s5;
          tf = 0;
        } else if (dragtarget == 'block_1') {
          str = b1s5;
          tf = 0;
        } else if (dragtarget == 'block_2') {
          str = b2s5;
          tf = 1;
        } else if (dragtarget == 'block_3') {
          str = b3s5;
          tf = 0;
        } else if (dragtarget == 'block_4') {
          str = b4s5;
          tf = 0;
        } else if (dragtarget == 'block_5') {
          str = b5s5;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s5;
          tf = 1;
        } else if (dragtarget == 'block_7') {
          str = b7s5;
          tf = 1;
        }  else if (dragtarget == 'block_8') {
          str = b8s5;
          tf = 0;
        }else {
          str = noticeText;
          tf = -1;
        }
        break;
      case 's6':
        if (dragtarget == 'block_0') {
          str = b0s6;
          tf = 0;
        } else if (dragtarget == 'block_1') {
          str = b1s6;
          tf = 0;
        } else if (dragtarget == 'block_2') {
          str = b2s6;
          tf = 1;
        } else if (dragtarget == 'block_3') {
          str = b3s6;
          tf = 1;
        } else if (dragtarget == 'block_4') {
          str = b4s6;
          tf = 0;
        } else if (dragtarget == 'block_5') {
          str = b5s6;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s6;
          tf = 0;
        } else if (dragtarget == 'block_7') {
          str = b7s6;
          tf = 0;
        }  else if (dragtarget == 'block_8') {
          str = b8s6;
          tf = 0;
        }else {
          str = noticeText;
          tf = -1;
        }
        break;
      case 's7':
        if (dragtarget == 'block_0') {
          str = b0s7;
          tf = 1;
        } else if (dragtarget == 'block_1') {
          str = b1s7;
          tf = 1;
        } else if (dragtarget == 'block_2') {
          str = b2s7;
          tf = 0;
        } else if (dragtarget == 'block_3') {
          str = b3s7;
          tf = 0;
        } else if (dragtarget == 'block_4') {
          str = b4s7;
          tf = 1;
        } else if (dragtarget == 'block_5') {
          str = b5s7;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s7;
          tf = 0;
        } else if (dragtarget == 'block_7') {
          str = b7s7;
          tf = 0;
        }  else if (dragtarget == 'block_8') {
          str = b8s7;
          tf = 0;
        }else {
          str = noticeText;
          tf = -1;
        }
        break;
        case 's8':
          if (dragtarget == 'block_0') {
            str = b0s8;
            tf = 0;
          } else if (dragtarget == 'block_1') {
            str = b1s8;
            tf = 0;
          } else if (dragtarget == 'block_2') {
            str = b2s8;
            tf = 1;
          } else if (dragtarget == 'block_3') {
            str = b3s8;
            tf = 0;
          } else if (dragtarget == 'block_4') {
            str = b4s8;
            tf = 0;
          } else if (dragtarget == 'block_5') {
            str = b5s8;
            tf = 0;
          } else if (dragtarget == 'block_6') {
            str = b6s8;
            tf = 1;
          } else if (dragtarget == 'block_7') {
            str = b7s8;
            tf = 1;
          } else if (dragtarget == 'block_8') {
            str = b8s8;
            tf = 0;
          } else {
            str = noticeText;
            tf = -1;
          }
          break;
          case 's9':
            if (dragtarget == 'block_0') {
              str = b0s9;
              tf = 0;
            } else if (dragtarget == 'block_1') {
              str = b1s9;
              tf = 0;
            } else if (dragtarget == 'block_2') {
              str = b2s9;
              tf = 0;
            } else if (dragtarget == 'block_3') {
              str = b3s9;
              tf = 0;
            } else if (dragtarget == 'block_4') {
              str = b4s9;
              tf = 0;
            } else if (dragtarget == 'block_5') {
              str = b5s9;
              tf = 0;
            } else if (dragtarget == 'block_6') {
              str = b6s9;
              tf = 0;
            } else if (dragtarget == 'block_7') {
              str = b7s9;
              tf = 0;
            } else if (dragtarget == 'block_8') {
              str = b8s9;
              tf = 1;
            } else {
              str = noticeText;
              tf = -1;
            }
            break;
    }
    $('.notice_box_text').html(str);
    if (tf==1) {
      $('.notice_box').css('background-color', '#c8eac8')
    } else if(tf==0){
      $('.notice_box').css('background-color', '#f39696')
    }
    else{
      $('.notice_box').css('background-color', '#ACACAC')
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
