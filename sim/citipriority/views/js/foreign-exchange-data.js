	// http://www.citibank.com.hk/english/investment/xml/mrtins_left_slider_foreignexchange.xml 
	//First three videos only
	
	//http://www.citibank.com.hk/english/investment/xml/mrtins_todaysfocus_fx_table.xml
	// http://www.citibank.com.hk/english/investment/xml/mrtins_todaysfocus_fx_comment.xml 
	//Today's FX Pick

	// http://www.citibank.com.hk/english/investment/xml/mrtins_todaysfocus_paccount_table.xml
	// http://www.citibank.com.hk/english/investment/xml/mrtins_todaysfocus_paccount_comment.xml
	// http://www.citibank.com.hk/english/investment/xml/mrtins_right-slider-mobile.xml
	// http://www.citibank.com.hk/english/investment/xml/mrtins_right-slider.xml
	//Today's Premium Account Pick

	// http://www.citibank.com.hk/english/investment/xml/mrtins_foreignexchange_weekfx.xml
	//FX Insight
	// http://www.citibank.com.hk/english/investment/xml/mrtins_foreignexchange_article_dailynews.xml
	// http://www.citibank.com.hk/english/investment/xml/mrtins_foreignexchange_article_featured.xml
	//FX Articles

	var ajax1Data = window.ajax1Data = [];
	var ajax2Data = window.ajax2Data = [];
	var ajax3Data = window.ajax3Data = [];
	var ajax4Data = window.ajax4Data = [];
	var ajax5Data = window.ajax5Data = [];
	var ajax6Data = window.ajax6Data = [];
	var ajax7Data = window.ajax7Data = [];
	var ajax8Data = window.ajax8Data = [];
	var ajax9Data = window.ajax9Data = [];
	var ajax10Data = window.ajax10Data = [];

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
	        url: "//investment/xml/mrtins_left_slider_foreignexchange.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax1Data); //First three videos only
	            resolve();
	        }
	    });
	});

	var ajax2 = new Promise(function(resolve, reject) {
	    $.ajax({
	        type: "GET",
	        url: "//investment/xml/mrtins_todaysfocus_fx_comment.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax2Data); //Today's FX Pick
	            resolve();
	        }
	    });
	});

	var ajax3 = new Promise(function(resolve, reject) {
	    $.ajax({
	        type: "GET",
	        url: "//investment/xml/mrtins_todaysfocus_paccount_table.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax3Data); //Today's Premium Account Pick 1 of 4
	            resolve();
	        }
	    });
	});

	var ajax4 = new Promise(function(resolve, reject) {
	    $.ajax({
	        type: "GET",
	        url: "//investment/xml/mrtins_todaysfocus_paccount_comment.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax4Data); //Today's Premium Account Pick 2 of 4
	            resolve();
	        }
	    });
	});

	var ajax5 = new Promise(function(resolve, reject) {
	    $.ajax({
	        type: "GET",
	        url: "//investment/xml/mrtins_right-slider-mobile.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax5Data); //Today's Premium Account Pick 3 of 4
	            resolve();
	        }
	    });
	});

	var ajax6 = new Promise(function(resolve, reject) {
	    $.ajax({
	        type: "GET",
	        url: "//investment/xml/mrtins_right-slider.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax6Data); //Today's Premium Account Pick 4 of 4
	            resolve();
	        }
	    });
	});

	var ajax7 = new Promise(function(resolve, reject) {
	    $.ajax({
	        type: "GET",
	        url: "//investment/xml/mrtins_foreignexchange_weekfx.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax7Data); //FX Insight
	            resolve();
	        }
	    });
	});

	var ajax8 = new Promise(function(resolve, reject) {
	    $.ajax({
	        type: "GET",
	        url: "//investment/xml/mrtins_foreignexchange_article_dailynews.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax8Data); //FX Articles 1 of 2
	            resolve();
	        }
	    });
	});

	var ajax9 = new Promise(function(resolve, reject) {
	    $.ajax({
	        type: "GET",
	        url: "//investment/xml/mrtins_foreignexchange_article_featured.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax9Data); //FX Articles 2 of 2
	            resolve();
	        }
	    });
	});
	
	var ajax10 = new Promise(function(resolve, reject) {
	    $.ajax({
	        type: "GET",
	        url: "//investment/xml/mrtins_todaysfocus_fx_table.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax10Data); //FX Table
	            resolve();
	        }
	    });
	});

	Promise.all([ajax1, ajax2, ajax3, ajax4, ajax5, ajax6, ajax7, ajax8, ajax9,ajax10]).then(function() {
	    new Vue({
	        el: '#app',
	        data: {
	            ajax1Data: ajax1Data,
	            ajax2Data: ajax2Data,
	            ajax3Data: ajax3Data,
	            ajax4Data: ajax4Data,
	            ajax5Data: ajax5Data,
	            ajax6Data: ajax6Data,
	            ajax7Data: ajax7Data,
	            ajax8Data: ajax8Data,
	            ajax9Data: ajax9Data,
				ajax10Data: ajax10Data
	        },
	        computed: {
	            slider: function() {
	                return this.ajax1Data[0].slider;
	            },
	            newsfeed: function() {
	                return this.ajax2Data[0].newsfeed;
	            },
	            APickTable: function() {
	                return this.ajax3Data[0].newsfeed;
	            },
	            APickHL: function() {
	                return this.ajax4Data[0].newsfeed;
	            },
	            mobileSlider: function() {
	                return this.ajax5Data[0].newsfeed;
	            },
	            rightSlider: function() {
	                return this.ajax6Data[0].newsfeed;
	            },
	            fxInsight: function() {
	                return this.ajax7Data[0].newsfeed;
	            },
	            dArticle: function() {
	                return this.ajax8Data[0].newsfeed;
	            },
	            fArticle: function() {
	                return this.ajax9Data[0].newsfeed;
	            },
				FxTable: function() {
	                return this.ajax10Data[0].newsfeed;
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
	                    //if($(window).width()<=767){
	                    $(".plus-minus.active-state").prev().prev().addClass("noBorder");
	                    setTimeout(function() {
	                        if ($(".active-state").offset().top != "undefined") {
	                            $menuBarHeight = $(".menuBar ").height();
	                        }
	                    }, 400);
	                    //  }
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
