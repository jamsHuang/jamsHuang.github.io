//先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
var url = location.href;
//再來用去尋找網址列中是否有資料傳遞(QueryString)
var ori_image = "";
var share_img_url = "";
var num = "";
var posX, posY, width, height;
var sharing = true;

if (url.indexOf('?') != -1) {
  var ary = url.split('?')[1].split('&');
  for (i = 0; i <= ary.length - 1; i++) {
    if (ary[i].split('=')[0] == 'ori_image') {
      ori_image = ary[i].split('=')[1];
    }
    if (ary[i].split('=')[0] == 'num') {
      num = ary[i].split('=')[1];
    }
    if (ary[i].split('=')[0] == 'posX') {
      posX = ary[i].split('=')[1];
    }
    if (ary[i].split('=')[0] == 'posY') {
      posY = ary[i].split('=')[1];
    }
    if (ary[i].split('=')[0] == 'width') {
      width = ary[i].split('=')[1];
    }
    if (ary[i].split('=')[0] == 'height') {
      height = ary[i].split('=')[1];
    }
    if (ary[i].split('=')[0] == 'share_img_url') {
      share_img_url = ary[i].split('=')[1];
    }
  }
}
$(function() {
  console.log(num);
  console.log(posX);
  console.log(posY);
  console.log(width);
  console.log(height);
  console.log(ori_image);

});
