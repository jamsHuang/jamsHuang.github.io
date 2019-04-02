// http://www.citibank.com.hk/english/investment/xml/mrtins_left_slider_todaysfocus.xml
// http://www.citibank.com.hk/english/investment/xml/mrtins_todaysfocus_market_commentary.xml
// http://www.citibank.com.hk/english/investment/xml/mrtins_marketoverview_htopic.xml?_=1497009732182

function convertToObject(xml, object) {
    var x2js = new X2JS();
    var xmlText = new XMLSerializer().serializeToString(xml);
    var _data = {};
    _data = x2js.xml_str2json(xmlText);
    object.push(_data);
}

var sliderData = window.sliderData = [];
var newsfeedData = window.newsfeedData = [];
var hottopicData = window.hottopicData = [];

var ajax1 = new Promise(function(resolve, reject) {
    $.ajax({
        type: "GET",
        url: "//investment/xml/mrtins_left_slider_todaysfocus.xml",
        dataType: "xml",
        success: function(xml) {
            convertToObject(xml, sliderData);
            resolve();
        }
    });
});
var ajax2 = new Promise(function(resolve, reject) {
    $.ajax({
        type: "GET",
        url: "//investment/xml/mrtins_todaysfocus_market_commentary.xml",
        dataType: "xml",
        success: function(xml) {
            convertToObject(xml, newsfeedData);
            resolve();
        }
    });
});

var ajax3 = new Promise(function(resolve, reject) {
    $.ajax({
        type: "GET",
        url: "//investment/xml/mrtins_marketoverview_htopic.xml",
        dataType: "xml",
        success: function(xml) {
            convertToObject(xml, hottopicData);
            resolve();
        }
    });
});
Promise.all([ajax1, ajax2,ajax3]).then(function() {
    new Vue({
        el: '#app',
        data: {
            newsfeedData: newsfeedData,
            sliderData: sliderData,
			hottopicData: hottopicData
        },
        computed: {
            slider: function() {
                return this.sliderData[0].slider;
            },
            newsfeed: function() {
                return this.newsfeedData[0].newsfeed;
            },
			hottopic: function() {
                return this.hottopicData[0].newsfeed;
            }
        },
        mounted: function() {
            init(); // market-insight.js
			$('.accordiant-header,.tab-accordiant-header').unbind("click");
            $('.accordiant-header,.tab-accordiant-header').on('click', function() {
                if (!$(this).hasClass('active-state')) {
                    $('.accordiant-header,.tab-accordiant-header').removeClass('active-state');
                    $(".plus-minus").removeClass('noBorder');
                    $('.accordiant-content,.tab-accordiant-content').slideUp(400);
                    $(this).addClass('active-state');
                    $(this).next('.accordiant-content,.tab-accordiant-content').slideDown(500, function() {});
                    $(this).next('.accordiant-content,.tab-accordiant-content').children().animate({ "opacity": 1 }, 1000);
                    $(".plus-minus.active-state").prev().prev().addClass("noBorder");
                    setTimeout(function() {
                        if ($(".active-state").offset().top != "undefined") {
                            $menuBarHeight = $(".menuBar ").height();
                        }
                    }, 400);
                } else {
                    $(".accordiant-content,.tab-accordiant-content").slideUp(800, function() {
                        $(".active-state").prev().prev().removeClass("noBorder");
                    });
                    $('.accordiant-content,.tab-accordiant-content').children().animate({ "opacity": 0 }, 800, function() {
                        $('.accordiant-header,.tab-accordiant-header').removeClass('active-state');
                    });
                }
            });
			
			$(".upArrow a").unbind("click");
            $(".upArrow a").on("click", function() {
                if (!$(this).hasClass("activeDisclaimer")) {
                    $(".upArrow a").removeClass("activeDisclaimer");
                    $(".upArrow li").removeClass("activeLicolor");
                    $(this).addClass("activeDisclaimer");
                    $(this).parent().addClass("activeLicolor");
                    $(".new_disclaimers").slideUp(dropdownMenuTiming);
                    $(this).parent().parent().next(".new_disclaimers").slideDown();
                } else {
                    $(".upArrow a").removeClass("activeDisclaimer");
                    $(".upArrow li").removeClass("activeLicolor");
                    $(".new_disclaimers").slideUp(dropdownMenuTiming);
                }

            });
        }
    });

}).catch(function(err) {
    console.log('There is an error', err);
});
