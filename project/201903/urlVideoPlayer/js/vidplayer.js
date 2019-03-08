$(function() {

  var url_string = window.location.href
  var url = new URL(url_string);
  var c = url.searchParams.get("fn");
  //
  var filepath = "video/" + c + ".mp4";
  //$('#my-video1_html5_api source').attr('src', filepath);
  //$('#my-video1_html5_api')[0].load();
  var player = document.getElementById('videoPlayer');

  var mp4Vid = document.getElementById('mp4Source');

  player.pause();

  // Now simply set the 'src' property of the mp4Vid variable!!!!

  mp4Vid.src = filepath;

  player.load();
  //player.play();
  var playPromise = player.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
        // 这个时候可以安全的暂停
        player.pause();
      })
      .catch(error => {

      });
  }

});
