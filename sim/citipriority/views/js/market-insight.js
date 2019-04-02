/*--------------------- Video Slides ---------------------*/

function initVS() {
    var slideCount = $('.viedo-slides ul li').length;
    var slideWidth = $('.viedo-slides ul').width() / slideCount;    
    var slideHeight = 285; //$('.slides ul li').height();
    var slidesUlWidth = slideCount * slideWidth;

    // - - - - - - resize and time delay(throttle) - - - - - -

    $(function() {
        var resizeTimer;

        function resizeFunction() {
            slideCount = $('.viedo-slides ul li').length;
            slideWidth = $('.viedo-slides ul').width() / slideCount;
            slideHeight = 285; //$('.slides ul li').height();
            slidesUlWidth = slideCount * slideWidth;
        };
        $(window).resize(function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeFunction, 500);
        });
        resizeFunction();
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -    
    var allSquares = $('.video-flex-container .square');
    var totalSquares = allSquares.length;
    var index = 1;

    function moveLeft() {
        index--;

        if (index == 0) {
            index = slideCount;
        }

        $('.viedo-slides ul li:last-child').prependTo('.viedo-slides ul');
        $('.viedo-slides ul').css('left', -slideWidth + 'px');

        $('.viedo-slides ul').animate({
            left: 0
        }, 700, function() {

        });
        setNav();
    };

    function moveRight() {
        index++;

        if (index > slideCount) {
            index = 1;
        }

        $('.viedo-slides ul').animate({
            left: -slideWidth
        }, 700, function() {
            $('.viedo-slides ul li:first-child').appendTo('.viedo-slides ul');
            $('.viedo-slides ul').css('left', '');

        });
        setNav();
    };

    function setNav() {
        $('.nav-dots .video-page').text(index + "/" + slideCount);
    }

    $('.video-flex-container .control_prev').click(function() {
        moveLeft();
		videoReset();
    });

    $('.video-flex-container .control_next').click(function() {
        moveRight();
		videoReset();
    });
};

/*--------------------- Video Slides Mobile ---------------------*/

function initVSM() {

    var slideCount = $('.viedo-slides-m ul li').length;
    var slideWidth = $('.viedo-slides-m ul').width() / slideCount;
    var slideHeight = 285;
    var slidesUlWidth = slideCount * slideWidth;

    var allSquares = $('.video-flex-container-m .square');
    var totalSquares = allSquares.length;
    var index = 1;

    function moveLeft() {
        index--;

        if (index == 0) {
            index = slideCount;
        }

        $('.viedo-slides-m ul li:last-child').prependTo('.viedo-slides-m ul');
        $('.viedo-slides-m ul').css('left', -slideWidth + 'px');

        $('.viedo-slides-m ul').animate({
            left: 0
        }, 700, function() {

        });
        setNav();
    };

    function moveRight() {
        index++;

        if (index > slideCount) {
            index = 1;
        }

        $('.viedo-slides-m ul').animate({
            left: -slideWidth
        }, 700, function() {
            $('.viedo-slides-m ul li:first-child').appendTo('.viedo-slides-m ul');
            $('.viedo-slides-m ul').css('left', '');

        });
        setNav();
    };

    function setNav() {
        $('.nav-dots .video-page-m').text(index + "/" + slideCount);
    }

    $('.video-flex-container-m .control_prev').click(function() {
        moveLeft();
		videoReset();
    });

    $('.video-flex-container-m .control_next').click(function() {
        moveRight();
		videoReset();
    });


};




/* ********Mobile Slider********* */
var sliderCount;
var mblslider_full_t;
var mblslider_t;
var slideWidth;
$(window).resize(function() {
    mblslider_full_t = $('.slides2 ul').width();
    mblslider_t = (mblslider_full_t / 100) * 25;
    slideWidth = mblslider_t;
    $(".slides2 ul").animate({ left: -window.innerWidth });
});

function mobileSlider() {
    $('.mrtins-mobile-adds').css("display", "block");
    $('#mrtins-desktopflex, .mrtins-tfrow1 img').css("display", "none");
    $('#mrtins-tfocus-nav > li > div.mi-opentab').css("display", "none");
    $('#mrtins-tfocus-nav > li >a#mi-opentab-minus').removeClass('mrtins-nav-tminus');
    slideCount = $('.slides2 ul li').length;
    mblslider_full_t = $('.slides2 ul').width();
    mblslider_t = (mblslider_full_t / 100) * 25;
    slideWidth = mblslider_t; //'25%'; //$('.slides ul li').width();
    var slideHeight = 150; //$('.slides ul li').height();
    var slidesUlWidth = slideCount * slideWidth;

    var allSquares = $('.squarem');
    var totalSquares = allSquares.length;
    var index = 0;
    function moveLeft2() {
        index--;
        $('.slides2 ul').animate({
            left: +slideWidth
        }, 700, function() {
            $('.slides2 ul li:last-child').prependTo('.slides2 ul');
            $('.slides2 ul').css('left', '');
        });
        setSquare2();
    };

    function moveRight2() {
        index++;
        $('.slides2 ul').animate({
            left: -slideWidth
        }, 700, function() {
            $('.slides2 ul li:first-child').appendTo('.slides2 ul');
            $('.slides2 ul').css('left', '');
        });
        setSquare2();
    };

    function setSquare2() {
        allSquares.removeClass("active").eq(index % totalSquares).addClass("active");
    }

    $('.control_prev').click(function() {
        moveLeft2();
		videoReset();
    });

    $('.control_next').click(function() {
        moveRight2();
		videoReset();
    });

    $(function() {
        sClear2 = setInterval(function() {
            moveRight2();
			videoReset();
        }, 5000);
    });
    $("li.squarem").click(function(e) {
        e.preventDefault();
        clearInterval(sClear);
        var curPos2 = 1;
        var tagInd2 = $(this).index();
        curPos2 = tagInd2 + 1;
        var h = tagInd2;
        var mblslider_full = $('.slides2 ul').width();
        var mblslider = (mblslider_full / 100) * 25;
        var move2 = mblslider * tagInd2;
        $(".slides2 ul").animate({ "left": "-" + move2 + "px" }, "slow");
        $(this).addClass("active");
        $(this).prevAll().removeClass("active");
        $(this).nextAll().removeClass("active");
        move2 = 0;
    });
    $("div.flexslider").mouseover(function() {
        clearInterval(sClear2);
    });
    $("div.flexslider").mouseout(function() {
        sClear2 = setInterval(function() {
            moveRight2();
			videoReset();
        }, 5000);
    });
}

/* ************Mobile slider ends**************** */




$(document).ready(function() {

    /* POPUP image starts */
    $("img.zoom").click(function() {
        $(".black-background").fadeIn("normal");
        $('#mrtins-pop-img1').fadeIn("normal");
    });
    $("img.zoom1").click(function() {
        $(".black-background").fadeIn("normal");
        $('#mrtins-pop-img2').fadeIn("normal");
    });
    $("img.zoom2").click(function() {
        $(".black-background").fadeIn("normal");
        $('#mrtins-pop-img3').fadeIn("normal");
    });
    $(".mrtins-pp-close,.black-background").click(function() {
        $('#mrtins-pop-img1').hide();
        $('#mrtins-pop-img2').hide();
        $('#mrtins-pop-img3').hide();
        $(".black-background").fadeOut("normal");
    });
    /* POPUP image Ends */
});

function desktopSlider() {
    var slideCount = $('.slides ul li').length;
    var slideWidth = 600; //$('.slides ul > li').width(); //
    var slideHeight = 150; //$('.slides ul li').height();
    var slidesUlWidth = slideCount * slideWidth;

    var allSquares = $('.square');
    var totalSquares = allSquares.length;
    var index = 0;
    function moveLeft() {
        index--;
        $('.slides ul').animate({
            left: +slideWidth
        }, 700, function() {
            $('.slides ul li:last-child').prependTo('.slides ul');
            $('.slides ul').css('left', '');
        });
        setSquare();
    };

    function moveRight() {
        index++;
        $('.slides ul').animate({
            left: -slideWidth
        }, 700, function() {
            $('.slides ul li:first-child').appendTo('.slides ul');
            $('.slides ul').css('left', '');

        });
        setSquare();
    };

    function setSquare() {
        allSquares.removeClass("active").eq(index % totalSquares).addClass("active");
    }

    $('.control_prev').click(function() {
        moveLeft();
		videoReset();
    });

    $('.control_next').click(function() {
        moveRight();
		videoReset();
    });

    $(function() {
        sClear = setInterval(function() {
            moveRight();
			videoReset();
        }, 5000);
    });
    $("li.square").click(function(e) {
        e.preventDefault();
        clearInterval(sClear);
        var curPos = 1;
        var tagInd = $(this).index();
        curPos = tagInd + 1;
        var h = tagInd;
        var move = slideWidth * tagInd;
        $(".slides ul").animate({ "left": "-" + move + "px" }, "slow");
        $(this).addClass("active");
        $(this).prevAll().removeClass("active");
        $(this).nextAll().removeClass("active");
        move = 0;
    });
    $("div.flexslider").mouseover(function() {
        clearInterval(sClear);
    });
    $("div.flexslider").mouseout(function() {
        sClear = setInterval(function() {
            moveRight();
			videoReset();
        }, 5000);
    });
}


/*  slider new   */
$(document).ready(function() {

    $('ul#mrtins-nav li div, #mrtins-tfocus-nav li > div').css("display", "none");
    $.ajaxSetup({
        cache: false
    });
    /* common tab */
    $('#mrtins-nav > li.mrtins-rd > a').click(function(e) {
        e.preventDefault();
        if ($(this).attr('class') != 'mrtins-nav-tminus') {
            $(this).addClass('mrtins-nav-tminus');
        } else { $(this).removeClass('mrtins-nav-tminus'); }
        $(this).next().toggleClass('mrtins-bor');
        $(this).next().slideToggle();

    });

    /* AASTOCKS Tab */
    $('.mrtins-aastock-tabdesc').hide();
    $('.mrtins-aastock-tabdesc.first').show();
    $("body").on("click", ".aastock-display li:not('.active') a", function() {

        $(".aastock-display li").removeClass("active");
        $(this).parent().addClass("active");
        var tabIdx2 = $(this).parent().index();
        $(".mrtins-aastock-tabdesc").hide();
        $(".mrtins-aastock-tabdesc:eq(" + tabIdx2 + ")").fadeIn();
    });
    /* mobile todaysfx table */
    $('.mobiletabelone').hide();
    $('.mobiletabelone.fir').show();
    $("body").on("click", ".mt1-selector li:not('.active') a", function() {
        var tabinx = 0;
        $('.mt1-selector li').removeClass("active");
        $(this).parent().addClass("active");
        tabinx = $(this).parent().index() - 1;
        $('div.mobt1-container .mobiletabelone').hide();
        $('div.mobt1-container .mobiletabelone:eq(' + tabinx + ')').fadeIn();
        console.log(tabinx);
    });
    if ($(window).width() > 767) { $('.mrtins-mobile-adds').css("display", "none"); }
});

/* ********Mobile Slider********* */
var sliderCount;
var mblslider_full_t;
var mblslider_t;
var slideWidth;
$(window).resize(function() {
    mblslider_full_t = $('.slides2 ul').width();
    mblslider_t = (mblslider_full_t / 100) * 25;
    slideWidth = mblslider_t;
    $(".slides2 ul").animate({ left: -window.innerWidth });;
});
if ((mobile.detect()) && ($(window).width() <= 767)) {
    $(document).ready(function() {
        $('.mrtins-mobile-adds').css("display", "block");
        $('#mrtins-desktopflex, .mrtins-tfrow1 img').css("display", "none");
        $('#mrtins-tfocus-nav > li > div.mi-opentab').css("display", "none");
        $('#mrtins-tfocus-nav > li >a#mi-opentab-minus').removeClass('mrtins-nav-tminus');
        slideCount = $('.slides2 ul li').length;
        mblslider_full_t = $('.slides2 ul').width();
        mblslider_t = (mblslider_full_t / 100) * 25;
        slideWidth = mblslider_t; //'25%'; //$('.slides ul li').width();
        var slideHeight = 150; //$('.slides ul li').height();
        var slidesUlWidth = slideCount * slideWidth;

        var allSquares = $('.squarem');
        var totalSquares = allSquares.length;
        var index = 0;
        function moveLeft2() {
            index--;
            $('.slides2 ul').animate({
                left: +slideWidth
            }, 700, function() {
                $('.slides2 ul li:last-child').prependTo('.slides2 ul');
                $('.slides2 ul').css('left', '');
            });
            setSquare2();
        };

        function moveRight2() {
            index++;
            $('.slides2 ul').animate({
                left: -slideWidth
            }, 700, function() {
                $('.slides2 ul li:first-child').appendTo('.slides2 ul');
                $('.slides2 ul').css('left', '');
            });
            setSquare2();
        };

        function setSquare2() {
            allSquares.removeClass("active").eq(index % totalSquares).addClass("active");
        }

        $('.control_prev').click(function() {
            moveLeft2();
			videoReset();
        });

        $('.control_next').click(function() {
            moveRight2();
			videoReset();
        });

        $(function() {
            sClear2 = setInterval(function() {
                moveRight2();
				videoReset();
            }, 5000);
        });
        $("li.squarem").click(function(e) {
            e.preventDefault();
            clearInterval(sClear);
            var curPos2 = 1;
            var tagInd2 = $(this).index();
            curPos2 = tagInd2 + 1;
            var h = tagInd2;
            var mblslider_full = $('.slides2 ul').width();
            var mblslider = (mblslider_full / 100) * 25;
            var move2 = mblslider * tagInd2;
            $(".slides2 ul").animate({ "left": "-" + move2 + "px" }, "slow");
            $(this).addClass("active");
            $(this).prevAll().removeClass("active");
            $(this).nextAll().removeClass("active");
            move2 = 0;
        });
        $("div.flexslider").mouseover(function() {
            clearInterval(sClear2);
        });
        $("div.flexslider").mouseout(function() {
            sClear2 = setInterval(function() {
                moveRight2();
				videoReset();
            }, 5000);
        });

    });

}

/* ************Mobile slider ends**************** */
$(document).ready(function() {
    if (($('.mrktinsgt-tabs li').attr('id') == 'mrtins-todayfocus-tab') && ($('.mrktinsgt-tabs li').attr('class') == 'active')) {
        $('h4#mrtins-videotit').html('每日市場展望<span> (粵語版僅)</span>');
    }

    /* main tab */
    $("body").on("click", ".mrktinsgt-tabs li:not('.active') a", function() {
        $(".mrtins-banner").show();
        if ($(this).parent().attr('id') == 'mrtins-investmentideas-tab') {
            $('h4#mrtins-videotit').html('每日市場展望<span> (粵語版僅)</span>');
        }
        if ($(this).parent().attr('id') == 'mrtins-todayfocus-tab') {
            $('h4#mrtins-videotit').html('每日市場展望<span> (粵語版僅)</span>');


        }
        if ($(this).parent().attr('id') == 'mrtins-marketoverwiew-tab') {
            $('h4#mrtins-videotit').html('投資洞察評論<span> (粵語版僅)</span>');
        }
        if ($(this).parent().attr('id') == 'mrtins-foreignexchange-tab') {
            $('h4#mrtins-videotit').html('外匯洞察評論<span> (粵語版僅)</span>');
        }
        $(".mrktinsgt-tabs li").removeClass("active");
        $(this).parent().addClass("active");
        var tabIdx = $(this).parent().index();
        $(".mrtins-tabcontent").hide();
        $(".mrtins-tabcontent:eq(" + tabIdx + ")").fadeIn();

    });
    $("body").on("click", ".mrtins-mblvideoslt ul li:not('.active') a", function() {
        $(".mrtins-mblvideoslt ul li").removeClass("active");
        $(this).parent().addClass("active");
    });
    // Font size Increase and Decrease Starts
    var mblfont = 12;
    var mblfend = 0;
    //Font size plus
    $("body").on("click", "img.maplus", function() {
        $("img.maminus").css("opacity", "1");
        if (mblfend < 2) {
            mblfont = mblfont + 0.8;
            $('ul#mrtins-nav li div, #mrtins-tfocus-nav li > div ul, div.mt-col1 > div ul, div.mt-col2 > div ul, .ii-desc p').css("font-size", mblfont + "px");
            mblfend++;
        }
        if (mblfend == 2) {
            $("img.maminus").css("opacity", "0.2");
        }

    });
    // Font size Increase and Decrease Ends 
});



$(document).ready(function() {
    videoCons();
});

function videoCons() {
    $("video").prop("controls", false);
    $("video").click(function() {
        this.paused ? this.play() : this.pause();
        $("video").prop("controls", true);
		this.play();
    });
}

function init() {
    initVS();
    initVSM();
    if ((mobile.detect()) || ($(window).width() <= 767)) {
        mobileSlider();
    } else {
        desktopSlider();
    }
    videoCons();
}

function videoReset(){
	var vlen = $('video').length;
	if(vlen==2){
		var videos = ['video1','video2'];
	}else if(vlen==6){
		var videos = ['video1','video2','video3','video4','video5','video6'];
	}
	$.each(videos, function(i,e){
		var vid = document.getElementById(e);
		if(vid.currentTime != 0){
			vid.currentTime = 0;
		}
	})
}