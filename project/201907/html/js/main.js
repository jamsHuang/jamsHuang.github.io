$(function() {
  //setup SLIDER
  $('.view-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  //
  $(".page").hide();
  $('.page__pick-view').show();
  //
  var viewNum;
  //
  $('.view__btn').click(function(e) {
    switch (e.target.id) {
      case "view0":
        viewNum = 0;
        break;
      case "view1":
        viewNum = 1;
        break;
      case "view2":
        viewNum = 2;
        break;
      case "view3":
        viewNum = 3;
        break;
      default:
        viewNum = 3;
    }
    $('.page').hide();
    $('.page__upload').show();
  })
  //

  //
  $("#btn_upload").change(function(e) {
    var file = document.getElementById("btn_upload").files[0];
    ImageHelper.resizeAndRotateImage(file, 245, function(resizeImageObj) {});
  });

  var ImageHelper = {
    resizeAndRotateImage: function(inImageSource, inMaxLength, inSuccessCallback) {
      var reader = new FileReader();
      reader.readAsDataURL(inImageSource);
      reader.onload = function(e) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {
          //設定長邊上限值
          var max_Length = inMaxLength;

          var imgWidth = img.width;
          var imgHeight = img.height;

          if (imgWidth > imgHeight) {
            if (imgWidth > max_Length) {
              imgHeight = Math.round(imgHeight *= max_Length / imgWidth);
              imgWidth = max_Length;
            }
          } else {
            if (imgHeight > max_Length) {
              imgWidth = Math.round(imgWidth *= max_Length / imgHeight);
              imgHeight = max_Length;
            }
          }

          canvas.width = imgWidth;
          canvas.height = imgHeight;

          var that = this;
          EXIF.getData(img, function() {
            var orientation = EXIF.getTag(that, 'Orientation');
            //alert(orientation);

            console.log(orientation);
            if (orientation == 6 || orientation == 8 || orientation == 3) {
              var rotateAngle = 0;
              switch (orientation) {
                case 3:
                  rotateAngle = 180;
                  break;
                case 6:
                  rotateAngle = 90;
                  canvas.width = imgHeight;
                  canvas.height = imgWidth;
                  break;
                case 8:
                  rotateAngle = 0;
                  canvas.width = imgHeight;
                  canvas.height = imgWidth;
                  break;
              }

              var x = canvas.width / 2;
              var y = canvas.height / 2;

              ctx.translate(x, y);
              ctx.rotate(rotateAngle * Math.PI / 180);

              ctx.drawImage(img, (-imgWidth / 2), (-imgHeight / 2), imgWidth, imgHeight);
            } else {
              ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
            }
          });
          fd = canvas.toDataURL("image/png", 1.0);
          inSuccessCallback(fd);
          fd = fd.replace("data:image/png;base64,", "");
          // console.log(fd);
        };
        img.src = e.target.result;
        $(".photo").css('background-image','url('+e.target.result+')');
      };
    }
  };
  $('.photo').resizable().rotatable().draggable();

});
