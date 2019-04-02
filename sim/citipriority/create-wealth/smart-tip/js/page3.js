$(function() {
  //
  var aa = -1;
  $('#rSelect').click(function() {
    //  $("#rSelect").val(-1);

  });
  $('#rSelect').change(function() {
    var url="/sim/citipriority/create-wealth/smart-tip/index.htm?fn="+$("#rSelect").find("option:selected").val();

     window.location.replace(url);

  })
  //console.log(  $("#rSelect").find("option:selected").text());
})
