$(function(){
  $('.btn').click(function(){
    $('.tip').removeClass("active");
    $('.btn').removeClass("active");
  });
  $('.btn--0').click(function(){
    $(this).addClass("active");
    $('.tip').addClass("active");
  })
  $('.btn--1').click(function(){
    $(this).addClass("active");
    $(".tip[data-filter='inv']").addClass('active');
  })
  $('.btn--2').click(function(){
    $(this).addClass("active");
    $(".tip[data-filter='plan']").addClass('active');
  })
  console.log($(".tip").data("filter"));
  //

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
  if(c == 0){
    $('.btn--0').trigger("click");
  }else if( c==1){
    $('.btn--1').trigger("click");
  }
  else if( c==2){
    $('.btn--2').trigger("click");
  }
  else{
    $('.btn--0').trigger("click");
  }
})
