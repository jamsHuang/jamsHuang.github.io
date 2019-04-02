//http://www.citibank.com.hk/english/investment/xml/mrtins_stock_spotlight.xml
//http://www.citibank.com.hk/english/investment/xml/mrtins_stocks-media.xml
	var ajax1Data = window.ajax1Data = [];
	var ajax2Data = window.ajax2Data = [];


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
	        url: "//investment/xml/mrtins_stock_spotlight.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax1Data);
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
	        url: "//investment/xml/mrtins_stocks-media.xml",
	        dataType: "xml",
	        success: function(xml) {
	            convertToObject(xml, ajax2Data); //First three videos only
	            resolve();
	        }
	    });
	});

	Promise.all([ajax1,ajax2]).then(function() {
	    new Vue({
	        el: '#app',
	        data: {
	            ajax1Data: ajax1Data,
				ajax2Data: ajax2Data
	           
	        },
	        computed: {
	            spotlight: function() {
	                return this.ajax1Data[0].newsfeed;
	            },
				 slider: function() {
	                return this.ajax2Data[0].slider;
	            },
	         
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
				$(".upArrow a").unbind('click');
				
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
