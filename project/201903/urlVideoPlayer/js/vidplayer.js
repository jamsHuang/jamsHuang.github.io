$(function() {

  // var url_string = window.location.href
  // var url = new URL(url_string);
  // var c = url.searchParams.get("fn");
  var c = getUrlParameter("fn");
  //
  function getUrlParameter(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  var filepath = "video/" + c + ".mp4";
  var player = document.getElementById('videoPlayer');

  $('video').append('<source src="' + filepath + '" type="video/mp4">');
  if(!$('video').children('source').length) { // set src&type attribute for ie9/android3.1 because it does not add the source child-elements
      $('video').attr('src', filepath ).attr('type','video/mp4');
  }
  //var mp4Vid = document.getElementById('mp4Source');
  // player.pause();
  // mp4Vid.src = filepath;
  // player.load();
  // //
  // player.play();
  // player.pause();
  // var playPromise = player.play();
  //
  // if (playPromise !== undefined) {
  //   playPromise.then(_ => {
  //       player.pause();
  //     })
  //     .catch(error => {
  //     });
  // }

});
