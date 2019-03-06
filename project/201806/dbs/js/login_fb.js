//FACEBOOK SDK

var app_id= 217612482363752;
var myurl = 'https://project.hogarth-ogilvy.com.tw/2018/dbs-digital/game.html';

var fbid;
var shareText;

window.fbAsyncInit = function () {
    FB.init({
        appId: app_id,
        xfbml: true,
        version: 'v2.12'
    });
    FB.AppEvents.logPageView();
    getFbStatus();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function setFbLogin() {
    var parameters="";
    var URL = myurl + parameters;
    //URL='YOUR URL' + parameters is in libs/device.js

    window.open('https://www.facebook.com/v2.12/dialog/oauth?client_id=' + app_id + '&redirect_uri=' + URL, '_self');
}

function getFbStatus() {
    //console.log(FB);
    FB.getLoginStatus(function (response) {
        var $mainCont = $('#mainCont');
        //console.log('FB_status:', response.status);
        $mainCont.trigger('GET_FB_STATUS');
        if (response.status === 'connected') {
            //已登入且加入APP
            getUserId(response);
            $mainCont.trigger('ALREADY_LOGIN');
            console.log('已登入且加入APP');
        } else if (response.status === 'not_authorized') {
            //已登入但沒有加入APP
            $mainCont.trigger('NOT_YET_LOGIN');
            console.log('已登入但沒有加入APP');
              //alert("Please log into this app.");
        } else {
            //捨摸都妹油
            $mainCont.trigger('NOT_YET_LOGIN');
            console.log('疑心病很重或很懶的人');
            //alert("Please log into Facebook.");
        }
    });
}

//---- get Facebook user information ----
function getUserId(responseTxt) {
    uid = responseTxt.authResponse.userID;
    accessToken = responseTxt.authResponse.accessToken;

    FB.api('/me', function (response) {
        fbid = response.name;
        //console.log('user name: ' + response.name);

        $('.fbid').html(response.name);
        //console.log('user id: ' + response.id);
        //console.log('user picture: ' + 'http://graph.facebook.com/v2.5/' + response.id + '/picture?width=200&height=200');

        //$('.fbName').text(response.name);
        //$('.userImg').attr('src', 'http://graph.facebook.com/v2.5/' + response.id + '/picture?width=140&height=140');
    });

}


function shareToFacebook() {
  FB.init({
    appId: app_id,
    xfbml: true,
    version: 'v2.12'
  });
  FB.AppEvents.logPageView();
  getFbStatus();
  //
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
