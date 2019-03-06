$(function() {
  $('.dbs').fullpage({
    anchors: ['kv', 'game', 'offer', 'mileage', 'flight', 'life', 'detail'],
    sectionsColor: ['#000', '#64b3e3', '#7BAABE', '#f90'],
    autoScrolling: false,
    fitToSectionDelay: 50,
    scrollBar: true,
    loopBottom: false,
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);
      if (direction === 'down') {
        //$('header').slideUp("slow");
        // TweenMax.to("header", 1, {
        //   top: "-100px",
        //   ease: Power2.easeInOut
        // });
      } else if (direction === 'up') {
        //$('header').slideDown("slow");
        // TweenMax.to("header", 1, {
        //   top: "0",
        //   ease: Power2.easeInOut
        // });
      }
    }
  });
  setInterval(function() {
    $.fn.fullpage.moveSlideRight();
  }, 5000);

  // 動畫
  new WOW().init();


  // popup展開
  $('.modal').on('show.bs.modal', function(e) {
    $.fn.fullpage.setAllowScrolling(false);
  });

  // popup視窗關掉時
  $('.modal').on('hidden.bs.modal', function(e) {
    $.fn.fullpage.setAllowScrolling(true);
    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  });

  //如果寬度>992且高<600 hide icon
  if( $( window ).height() < 600 && $(window).width() > 992){
    $('.life__bottom__icon').hide();
  }
});
