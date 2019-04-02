// http://www.citibank.com.hk/english/investment/xml/mrtins_left_slider_marketoverview.xml
// http://www.citibank.com.hk/english/investment/xml/mrtins_marketoverview_week_inv.xml
// http://www.citibank.com.hk/english/investment/xml/mrtins_marketoverview_inv_plus.xml
// http://www.citibank.com.hk/english/investment/xml/mrtins_marketoverview_article_media.xml

var ajax1Data = window.ajax1Data = [];
var ajax2Data = window.ajax2Data = [];
var ajax3Data = window.ajax3Data = [];
var ajax4Data = window.ajax4Data = [];

function convertToObject(xml, object) {
    var x2js = new X2JS();
    var xmlText = new XMLSerializer().serializeToString(xml);
    var _data = {};
    _data = x2js.xml_str2json(xmlText);
    object.push(_data);
}

var ajax1 = new Promise(function(resolve, reject) {
    $.ajax({
        type: "GET",
        url: "//investment/xml/mrtins_left_slider_marketoverview.xml",
        dataType: "xml",
        success: function(xml) {
            convertToObject(xml, ajax1Data); //First three videos only
            resolve();
        },
        error: function(err) {
            console.log(err);
            reject(err);
        }
    });
});

var ajax2 = new Promise(function(resolve, reject) {
    $.ajax({
        type: "GET",
        url: "//investment/xml/mrtins_marketoverview_week_inv.xml",
        dataType: "xml",
        success: function(xml) {
            convertToObject(xml, ajax2Data); //Investment Insight
            resolve();
        },
        error: function(err) {
            console.log(err);
            reject(err);
        }
    });
});

var ajax3 = new Promise(function(resolve, reject) {
    $.ajax({
        type: "GET",
        url: "//investment/xml/mrtins_marketoverview_inv_plus.xml",
        dataType: "xml",
        success: function(xml) {
            convertToObject(xml, ajax3Data); //Monthly Market Outlook
            resolve();
        },
        error: function(err) {
            console.log(err);
            reject(err);
        }
    });
});

var ajax4 = new Promise(function(resolve, reject) {
    $.ajax({
        type: "GET",
        url: "//investment/xml/mrtins_marketoverview_article_media.xml",
        dataType: "xml",
        success: function(xml) {
            convertToObject(xml, ajax4Data); //Investment Articles
            resolve();
        },
        error: function(err) {
            console.log(err);
            reject(err);
        }
    });
});

Promise.all([ajax1, ajax2, ajax3, ajax4]).then(function() {
    new Vue({
        el: '#app',
        data: {
            ajax1Data: ajax1Data,
            ajax2Data: ajax2Data,
            ajax3Data: ajax3Data,
            ajax4Data: ajax4Data
        },
        computed: {
            slider: function() {
                return this.ajax1Data[0].slider;
            },
            investmentInsight: function() {
                return this.ajax2Data[0].newsfeed;
            },
            mOutlook: function() {
                return this.ajax3Data[0].newsfeed;
            },
            invArticle: function() {
                return this.ajax4Data[0].newsfeed;
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
