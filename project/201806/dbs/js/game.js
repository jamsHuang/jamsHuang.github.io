$(function() {
  setMainCont();
  init();
});
var timer;
var count;
var r_num;
var f_name="";
var p_name;
var shareurl = "https://project.hogarth-ogilvy.com.tw/2018/dbs-digital/";
function setMainCont() {
  var $mainCont = $('#mainCont');
  $mainCont.on('LOGIN_FB', setFbLogin);
  $mainCont.on('NOT_YET_LOGIN', toLoginFb);
  $mainCont.on('ALREADY_LOGIN', toShowCont);
}

function toLoginFb() {
  //console.log('-------------------------toLoginFb');
  setFbLogin();
}

function toShowCont() {
  //console.log('-------------------------toShowCont');
}
function showresult(){
  clearInterval(timer);
  $('.calculate').hide();
  r_num = Math.floor(Math.random()*10+1);
  //
  var $pic = $('.pic');
  var $spot__title = $('.spot__title');
  var $spot__text = $('.spot__text');
  var $spot__miles = $('.spot__miles');
  //
$('.test').css('background-image', 'none');

  switch(r_num){
    case 1:
    p_name = "新加坡";
    $pic.css('background-image', 'url(' + "images/country/d1.jpg" + ')');
    $spot__title.html("新加坡");
    $spot__text.html("你們黑夜比白天更有活力嗎？<br/>這裡連動物園也有暗黑版的！<br/>只要你們膽夠大，快來新加坡近距離看夜間動物～");
    $spot__miles.css('background-image', 'url(' + "images/test/mile1.png" + ')');
    break;
    case 2:
    p_name = "東京";
    $pic.css('background-image', 'url(' + "images/country/d2.jpg" + ')');
    $spot__title.html("東京");
    $spot__text.html("花錢就是要花在刀口上的你們～<br/>這裡絕對是旅遊又近又好逛的完美地點，<br/>立誓就是要走到腿斷，買到手軟才夠本！");
    $spot__miles.css('background-image', 'url(' + "images/test/mile2.png" + ')');
    break;
    case 3:
    p_name = "土耳其";
    $pic.css('background-image', 'url(' + "images/country/d3.jpg" + ')');
    $spot__title.html("土耳其");
    $spot__text.html("三心二意的你們，別再多想了！<br/>這裡的美景可是萬花筒，從奇特地景到天上熱氣球，<br/>想玩什麼就玩什麼～不怕你們玩不膩！");
    $spot__miles.css('background-image', 'url(' + "images/test/mile3.png" + ')');
    break;
    case 4:
    p_name = "巴西";
    $pic.css('background-image', 'url(' + "images/country/d4.jpg" + ')');
    $spot__title.html("巴西");
    $spot__text.html("是不是常常有人說你們人來瘋？<br/>拋開包袱，在這融入森巴熱情，<br/>盡情舞動靈魂！");
    $spot__miles.css('background-image', 'url(' + "images/test/mile4.png" + ')');
    break;
    case 5:
    p_name = "冰島";
    $pic.css('background-image', 'url(' + "images/country/d5.jpg" + ')');
    $spot__title.html("冰島");
    $spot__text.html("討厭受約束的你們～<br/>現在只要帶上地圖，收拾背包，<br/>前往世界最美的盡頭，一起來讚嘆極光！");
    $spot__miles.css('background-image', 'url(' + "images/test/mile5.png" + ')');
    break;
    case 6:
    p_name = "紐約";
    $pic.css('background-image', 'url(' + "images/country/d6.jpg" + ')');
    $spot__title.html("紐約");
    $spot__text.html("時尚就是你們的DNA？！<br/>看起來～你們內心住了個道地紐約客，<br/>在繽紛炫目的大蘋果，絕對可以悠遊自得！");
    $spot__miles.css('background-image', 'url(' + "images/test/mile6.png" + ')');
    break;
    case 7:
    p_name = "法國";
    $pic.css('background-image', 'url(' + "images/country/d7.jpg" + ')');
    $spot__title.html("法國");
    $spot__text.html("來這解放你們無可救藥的浪漫，<br/>在街角來一杯香檳，再嘆ㄧ聲：<br/>“C'est la vie”人生不過就如此啊～");
    $spot__miles.css('background-image', 'url(' + "images/test/mile7.png" + ')');
    break;
    case 8:
    p_name = "義大利";
    $pic.css('background-image', 'url(' + "images/country/d8.jpg" + ')');
    $spot__title.html("義大利");
    $spot__text.html("愛吃的你們不能不來趟義大利啊！<br/>傳說必嚐12道驚歎菜色，就要來鑑定！<br/>而且想掃遍精品名牌，這裡根本是天堂阿～");
    $spot__miles.css('background-image', 'url(' + "images/test/mile8.png" + ')');
    break;
    case 9:
    p_name = "吳哥窟";
    $pic.css('background-image', 'url(' + "images/country/d9.jpg" + ')');
    $spot__title.html("吳哥窟");
    $spot__text.html("內心有個冒險魂的你們，<br/>在被世人遺忘的神秘叢林裡邂逅最原始的美麗，<br/>是旅遊最浪漫的事！");
    $spot__miles.css('background-image', 'url(' + "images/test/mile9.png" + ')');
    break;
    case 10:
    p_name = "峇里島";
    $pic.css('background-image', 'url(' + "images/country/d10.jpg" + ')');
    $spot__title.html("峇里島");
    $spot__text.html("想享受像仙人般悠閒的你們，<br/>快啟程到宜人湛藍的歡樂小島吧！<br/>不管日夜，在這盡情奔放熱情！");
    $spot__miles.css('background-image', 'url(' + "images/test/mile10.png" + ')');
    break;
  }
  if(r_num ===1 || r_num ===2 || r_num ===7 ||r_num ===9 ||r_num ===10)
  {
    shareText = f_name + p_name + " 就是我們的命定旅遊啊！不要再多想了～東西收一收、假請一請，星展飛行世界卡還送我們10,000哩，國外只要血拚15元就可以累積1哩！立即出發吧！";
  }
  else{
    shareText = f_name + p_name + " 讓我不想再坐在辦公室啦～～而且！星展飛行世界卡還送我們10,000哩，國外只要血拚15元就可以累積1哩！快點包袱款款！現在不出發，更待何時？";
  }
  shareurl+= ("country"+r_num+".html");
  $('.result').show();
}
function init() {

  $('.personal').show();
  $('.friend').hide();
  $('.calculate').hide();
  $('.result').hide();

  $('.personal .btn-next').click(function(){
    $('.personal').hide();
    f_name = "";
    $('.friend').show();
  })
  $('.friend .btn-next').click(function(){
    f_name = $('.friendname').val();
    if(f_name == ""){
      alert("請填寫朋友名字");
    }
    else{
      $('.friend').hide();
      $('.calculate').show();
        count = 0;
        timer=setInterval(function(){ $('.countNum').html(count);count++; if(count>100){showresult();}}, 25);
    }


  })

  $('.test .box .item').click(function(e){
    for(var i=0;i<11;i++){
      $('.box .item'+i).removeClass("item"+i+"__active");
    }
    var ta = e.target.outerHTML;
    //console.log(ta);
    var num = ta.replace(/<div class="item item/,"");
    num = num.replace(/"><\/div>/,"");
    //console.log(num);
    $(this).addClass('item'+num+"__active");
  })

  $('.btn-share').click(function() {

    FB.ui({
      method: 'share',
      mobile_iframe: true,
      quote: shareText,
      href: shareurl,
    }, function(response) {
      //window.location.href = "form.html";
    });
  });
}
