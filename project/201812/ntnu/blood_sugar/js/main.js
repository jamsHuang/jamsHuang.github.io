$(function() {
  var tf = -1;

  const b0s1 = "攝食、消化與吸收，會讓血糖濃度快速地升高";
  const b1s1 = "這個時間點，一般人血糖提升是因為出現什麼行為呢？";
  const b2s1 = "胰島素不會讓血糖濃度上升喔";
  const b3s1 = "升糖素不會讓血糖濃度下降喔";
  const b4s1 = "這個時間點，一般人血糖提升是因為出現什麼行為呢？";
  const b5s1 = "肝糖分解提高的血濃濃度，通常不會這麼高喔";
  const b6s1 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s1 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何變化呢？";
  //
  const b0s2 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s2 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s2 = "胰島素會促使血糖濃度降低";
  const b3s2 = "升糖素不會讓血糖濃度下降喔";
  const b4s2 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s2 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s2 = "合成肝糖，表示血糖濃度會下降";
  const b7s2 = "細胞使用血糖，會讓血糖濃度下降";
  //
  const b0s3 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s3 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s3 = "只有胰島素作用，為什麼血糖濃度不會明顯下降呢？";
  const b3s3 = "只有升糖素作用，為什麼血糖濃度不會明顯提升呢？";
  const b2s31 = "胰島素會促使血糖濃度降低";
  const b3s31 = "升糖素會促使血糖濃度升高";
  const b4s3 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s3 = "這一區只要說明有什麼激素在作用喔";
  const b6s3 = "這一區只要說明有什麼激素在作用喔";
  const b7s3 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何變化呢？";
  //
  const b0s4 = "攝食、消化與吸收，會讓血糖濃度快速地升高";
  const b1s4 = "這個時間點，一般人血糖提升是因為出現什麼行為呢？";
  const b2s4 = "胰島素不會讓血糖濃度上升喔";
  const b3s4 = "升糖素不會讓血糖濃度下降喔";
  const b4s4 = "這個時間點，一般人血糖提升是因為出現什麼行為呢？";
  const b5s4 = "肝糖分解提高的血濃濃度，通常不會這麼高喔";
  const b6s4 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s4 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何變化呢？";
  //
  const b0s5 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s5 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s5 = "胰島素會促使血糖濃度降低";
  const b3s5 = "升糖素不會讓血糖濃度下降喔";
  const b4s5 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s5 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s5 = "合成肝糖，表示血糖濃度會下降";
  const b7s5 = "細胞使用血糖，會讓血糖濃度下降";
  //
  const b0s6 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s6 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s6 = "只有胰島素作用，為什麼血糖濃度不會明顯下降呢？";
  const b3s6 = "只有升糖素作用，為什麼血糖濃度不會明顯提升呢？";
  const b2s61 = "胰島素會促使血糖濃度降低";
  const b3s61 = "升糖素會促使血糖濃度升高";
  const b4s6 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s6 = "這一區只要說明有什麼激素在作用喔";
  const b6s6 = "這一區只要說明有什麼激素在作用喔";
  const b7s6 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何變化呢？";
  //
  const b0s7 = "攝食、消化與吸收，會讓血糖濃度快速地升高";
  const b1s7 = "運動時，腎上腺素分泌量增加，血糖濃度快速升高";
  const b2s7 = "胰島素不會讓血糖濃度上升喔";
  const b3s7 = "升糖素不會讓血糖濃度下降喔";
  const b4s7 = "緊張時，腎上腺素分泌量增加，血糖濃度快速升高";
  const b5s7 = "肝糖分解，表示血糖濃度會上升";
  const b6s7 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s7 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何變化呢？";
  //
  const b0s8 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s8 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s8 = "胰島素會促使血糖濃度降低";
  const b3s8 = "升糖素不會讓血糖濃度下降喔";
  const b4s8 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s8 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s8 = "合成肝糖，表示血糖濃度會下降";
  const b7s8 = "細胞使用血糖，會讓血糖濃度下降";
  //
  const b0s9 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s9 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s9 = "只有胰島素作用，為什麼血糖濃度不會明顯下降呢？";
  const b3s9 = "只有升糖素作用，為什麼血糖濃度不會明顯提升呢？";
  const b2s91 = "胰島素會促使血糖濃度降低";
  const b3s91 = "升糖素會促使血糖濃度升高";
  const b4s9 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s9 = "這一區只要說明有什麼激素在作用喔";
  const b6s9 = "這一區只要說明有什麼激素在作用喔";
  const b7s9 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何變化呢？";
  //
  const b0s10 = "攝食、消化與吸收，會讓血糖濃度快速地升高";
  const b1s10 = "這個時間點，一般人血糖提升是因為出現什麼行為呢？";
  const b2s10 = "胰島素不會讓血糖濃度上升喔";
  const b3s10 = "升糖素不會讓血糖濃度下降喔";
  const b4s10 = "這個時間點，一般人血糖提升是因為出現什麼行為呢？";
  const b5s10 = "肝糖分解提高的血濃濃度，通常不會這麼高喔";
  const b6s10 = "肝糖主要是來自葡萄糖的合成喔";
  const b7s10 = "細胞加速使用血糖的話，那麼，血糖濃度應該會如何變化呢？";
  //
  const b0s11 = "進食時會吸收養分，血濃濃度應該會如何呢？";
  const b1s11 = "運動時，細胞會需要很多能量，表示需要葡萄糖喔";
  const b2s11 = "胰島素會促使血糖濃度降低";
  const b3s11 = "升糖素不會讓血糖濃度下降喔";
  const b4s11 = "緊張時，表示細胞需要能量，會需要獲得葡萄糖喔";
  const b5s11 = "肝糖如果分解，應該會產生葡萄糖喔";
  const b6s11 = "合成肝糖，表示血糖濃度會下降";
  const b7s11 = "細胞使用血糖，會讓血糖濃度下降";
  //
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
        $('.notice_box_text').html("" + noticeText);
        $('.notice_box').css("background-color", "#CACACA");
      },
      drag: function(event, ui) {
        //console.log(ui);
        ui.position.left = mousex - 1;
        ui.position.top = mousey - 1;
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

  var q32 = false;
  var q33 = false;
  var q62 = false;
  var q63 = false;
  var q92 = false;
  var q93 = false;

  function testDrog(event) {
    //console.log(event);
    var id = event.target.id;
    $('#' + id).css('border', '0');
    var str;
    var bText = $("#" + dragtarget)[0].innerText;
    //console.log(bText);

    switch (id) {
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
          if(q32==false && q33==false){
            q32 = true;
            str = b2s3;
          }else{
            str = b2s31;
          }
          tf = 1;
        } else if (dragtarget == 'block_3') {
          if(q32==false && q33==false){
            q33 = true;
            str = b3s3;
          }else{
            str = b3s31;
          }
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
          tf = 0;
        } else if (dragtarget == 'block_2') {
          str = b2s4;
          tf = 0;
        } else if (dragtarget == 'block_3') {
          str = b3s4;
          tf = 0;
        } else if (dragtarget == 'block_4') {
          str = b4s4;
          tf = 0;
        } else if (dragtarget == 'block_5') {
          str = b5s4;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s4;
          tf = 0;
        } else if (dragtarget == 'block_7') {
          str = b7s4;
          tf = 0;
        } else {
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
        } else {
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
          if(q62==false && q63==false){
            q62 = true;
            str = b2s6;
          }else{
            str = b2s61;
          }
          tf = 1;
        } else if (dragtarget == 'block_3') {
          if(q62==false && q63==false){
            q63 = true;
            str = b3s6;
          }else{
            str = b3s61;
          }
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
        } else {
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
          tf = 1;
        } else if (dragtarget == 'block_6') {
          str = b6s7;
          tf = 0;
        } else if (dragtarget == 'block_7') {
          str = b7s7;
          tf = 0;
        } else {
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
          if(q92==false && q93==false){
            q92 = true;
            str = b2s9;
          }else{
            str = b2s91;
          }
          tf = 1;
        } else if (dragtarget == 'block_3') {
          if(q92==false && q93==false){
            q93 = true;
            str = b3s9;
          }else{
            str = b3s91;
          }
          tf = 1;
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
        } else {
          str = noticeText;
          tf = -1;
        }
        break;
      case 's10':
        if (dragtarget == 'block_0') {
          str = b0s10;
          tf = 1;
        } else if (dragtarget == 'block_1') {
          str = b1s10;
          tf = 0;
        } else if (dragtarget == 'block_2') {
          str = b2s10;
          tf = 0;
        } else if (dragtarget == 'block_3') {
          str = b3s10;
          tf = 0;
        } else if (dragtarget == 'block_4') {
          str = b4s10;
          tf = 0;
        } else if (dragtarget == 'block_5') {
          str = b5s10;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s10;
          tf = 0;
        } else if (dragtarget == 'block_7') {
          str = b7s10;
          tf = 0;
        } else {
          str = noticeText;
          tf = -1;
        }
        break;
      case 's11':
        if (dragtarget == 'block_0') {
          str = b0s11;
          tf = 0;
        } else if (dragtarget == 'block_1') {
          str = b1s11;
          tf = 0;
        } else if (dragtarget == 'block_2') {
          str = b2s11;
          tf = 1;
        } else if (dragtarget == 'block_3') {
          str = b3s11;
          tf = 0;
        } else if (dragtarget == 'block_4') {
          str = b4s11;
          tf = 0;
        } else if (dragtarget == 'block_5') {
          str = b5s11;
          tf = 0;
        } else if (dragtarget == 'block_6') {
          str = b6s11;
          tf = 1;
        } else if (dragtarget == 'block_7') {
          str = b7s11;
          tf = 1;
        } else {
          str = noticeText;
          tf = -1;
        }
        break;
    }
    $('.notice_box_text').html(str);
    if (tf == 1) {
      $('.notice_box').css('background-color', '#c8eac8')
    } else if (tf == 0) {
      $('.notice_box').css('background-color', '#f39696')
    } else {
      $('.notice_box').css('background-color', '#ACACAC')
    }
  }

  function runtime() {
    requestAnimationFrame(runtime);
  }

  function setupManifest() {
    manifest.push({
      id: "img0",
      src: "img/line.svg",
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
