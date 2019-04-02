
var tab1Counter = 1,tab2Counter1 = 1,tab2Counter2 = 1,tab3Counter1 = 1,tab3Counter2 = 1;
var tab2Animate1, tab2Animate2,tab3Animate1,tab3Animate2,tab1Animate1;
var tabIndex = 0;
$(document).ready(function(){
	$(window).on("resize load", function(){
		if($(window).width() > 767){
			$("body").setEqualHeight($(".column-detail"));
			$("body").setEqualHeight($(".boxSet1"));
		}else{
			$(".boxSet1,.column-detail").removeAttr("style")
		}
	});
	var tab2Counter = 1,tab3Counter = 1,tab4Counter = 1;
	activeTab('insights','wealthmanagement');
	$(".tab-two-column li").on("click", function(){
		if($(this).hasClass("tab-two-column-active")){
			$("body").setEqualHeight($(".box-borderDiv"));
			$(".tab-two-column li").removeClass("noBorderRight");
			$(".tab-two-column-active").prev().addClass("noBorderRight");
			$(".boxSet1").removeAttr("style");
			$(".progressing").removeAttr("style");
			tab1Counter = 1,tab2Counter1 = 1,tab2Counter2 = 1,tab3Counter1 = 1,tab3Counter2 = 1;
			tabIndex =  $(this).index() + 1;
			$("body").setEqualHeight($(".boxSet1"));
			$(".progressing").removeAttr("style");
			if($(this).index() != 3){
				$("#pieChart,#pieChart2,#pieChart3,#pieChart4,#pieChart5").empty();
			}
			if($(this).index() == 2){
				setTimeout(function(){
					$(".tab3 .row").each(function(){
						$(this).find(".progressing").css("width",$(this).find(".progressing").attr("data-rel"));
					});
				});
				//tab3Counter1 = tab3Counter1 + 2;
			}
		}					
	});
	var scrollTop;
	$(window).on("scroll", parallax);
	
	function parallax() {   
		scrollTop = $(window).scrollTop();	
		if($(".tab-two-column-active").attr("rel") =="tab1"){
			barTriggerAnimation1();
		}
		if($(".tab-two-column-active").attr("rel") =="tab2"){
			barTriggerAnimation2();
		}
		if($(".tab-two-column-active").attr("rel") =="tab3"){
			barTriggerAnimation3();
		}
		// if ($(".tab1 .bar-animate").is(":visible") == true) { alert("visible"); }
	}
	
	function barTriggerAnimation1(){
		if(scrollTop > tab1Animate1){
			tab1Counter = tab1Counter + 1;
			if(tab1Counter == 2){
				setTimeout(function(){
					$(".tab1 .bar-animate .row").each(function(){
						$(this).find(".progressing").css("width",$(this).find(".progressing").attr("data-rel"));
					});
					tab1Counter = tab1Counter + 2;
				},800);
			}
		}
	}	
	
	function barTriggerAnimation2(){
		if(scrollTop > tab2Animate1){
			tab2Counter1 = tab2Counter1 + 1;
			if(tab2Counter1 == 2){
				setTimeout(function(){
					$(".tab2 #box2 .row").each(function(){
						$(this).find(".progressing").css("width",$(this).find(".progressing").attr("data-rel"));
					});
					tab2Counter1 = tab2Counter1 + 2;
				},800);
			}
		}
		
		if(scrollTop > tab2Animate2){
			tab2Counter2 = tab2Counter2 + 1;
			if(tab2Counter2 == 2){
				setTimeout(function(){
					$(".tab2 #box3 .row").each(function(){
						$(this).find(".progressing").css("width",$(this).find(".progressing").attr("data-rel"));
					});
					tab2Counter2 = tab2Counter2 + 2;
				},800);
			}
		}
	}
	
	
	function barTriggerAnimation3(){
		if(scrollTop > tab3Animate1){
			tab3Counter1 = tab3Counter1 + 1;
			if(tab3Counter1 == 2){
				setTimeout(function(){
					$(".tab3 #box4 .row").each(function(){
						$(this).find(".progressing").css("width",$(this).find(".progressing").attr("data-rel"));
					});
					tab3Counter1 = tab3Counter1 + 2;
				},300);
			}
		}
		
		if(scrollTop > tab3Animate2){
			tab3Counter2 = tab3Counter2 + 1;
			if(tab3Counter2 == 2){
				setTimeout(function(){
					$(".tab3 #box5 .row").each(function(){
						$(this).find(".progressing").css("width",$(this).find(".progressing").attr("data-rel"));
					});
					tab3Counter2 = tab3Counter2 + 2;
				},300);
			}
		}
	}
	function barAnimation1(){
		tabIndex =  1;
		$(".progressing").removeAttr("style");
		setTimeout(function(){
			$(".tab"+tabIndex+" .bar-animate .row").each(function(){
				$(this).find(".progressing").css("width",$(this).find(".progressing").attr("data-rel"));
			});
		},500);
		/*if($(this).index() != 3){
			$("#pieChart,#pieChart2,#pieChart3,#pieChart4,#pieChart5").empty();
		}
		else if($(this).index() != 1){
			$("#pieChartTab1,#pieChartTab1-2").empty();
		}*/
	}
	
	$(window).on("resize load", function(){
		if(tab1Counter == 1){
			console.log($(".bar-animate .blockTitle").height())
			tab1Animate1 = $('.tab1 #box1').offset().top - $(window).height();
		}
		if(tab2Counter1 == 1){
			tab2Animate1 = $('.tab2 #box2').offset().top - $(window).height();
		}
		if(tab2Counter2 == 1){
			tab2Animate2 = $('.tab2 #box3').offset().top - $(window).height();
		}
		if(tab3Counter1 == 1){
			tab3Animate1 = $('.tab3 #box4').offset().top - $(window).height();
		}
		if(tab3Counter2 == 1){
			tab3Animate2 = $('.tab3 #box5').offset().top - $(window).height();
		}
		
	});
	
	$(window).on("orientationchange load", function(){
		if($(window).width() > 1100){
			$("#pieChart,#pieChart2,#pieChart3,#pieChart4,#pieChart5").empty();
			pieAnimation1()
		}else if($(window).width() < 1100 && $(window).width() > 378){
			$("#pieChart,#pieChart2,#pieChart3,#pieChart4,#pieChart5").empty();
			pieAnimation2()
		}else{
			$("#pieChart,#pieChart2,#pieChart3,#pieChart4,#pieChart5").empty();
			pieAnimation3()
		}
	});
	
});
function triggerTab(id){
	$("#"+id).trigger("click");
	if(id == "tabLink1"){
		$("*").animate({scrollTop: $("#box1").offset().top - $(".menuShadow").height()},1000);
	}
	else if(id == "tabLink2"){
		$("*").animate({scrollTop: $("#box2").offset().top - $(".menuShadow").height()},1000)
	}
	else if(id == "tabLink3"){
		$("*").animate({scrollTop: $("#box4").offset().top - $(".menuShadow").height()},1000)
	}
}
function pieAnimation(){
	if($(window).width() > 1100){
		$("#pieChart,#pieChart2,#pieChart3,#pieChart4,#pieChart5").empty();
		pieAnimation1()
	}
	else if($(window).width() < 1100 && $(window).width() > 378){
		$("#pieChart,#pieChart2,#pieChart3,#pieChart4,#pieChart5").empty();
		pieAnimation2()
	}else{
		$("#pieChart,#pieChart2,#pieChart3,#pieChart4,#pieChart5").empty();
		pieAnimation3()
	}
}

function pieAnimation1(){
	var pie = new d3pie("pieChart", {
		"size": {
			"canvasWidth":440,
			"canvasHeight":300,
			"pieOuterRadius": "100%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Male",
					"value": 79,
					"color": "#b5985c"
				},
				
				{
					"label": "Female",
					"value": 14,
					"color": "#916e34"
					
				},
				{
					"label": "Not stated",
					"value": 7,
					"color": "#333333"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage1",
				"pieDistance": 26
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 11
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 11
			},
			"lines": {
				"enabled": true,
				"style":"straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			}
		}
	});
	var pie = new d3pie("pieChart2", {
		
		"size": {
			"canvasHeight": 300,
			"canvasWidth": 490,
			"pieOuterRadius": "88%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Aged 50 - 59yrs",
					"value": 42,
					"color": "#b5985c"
				},
				{
					"label": "Aged 60+",
					"value": 26,
					"color": "#916e34"
				},
				{
					"label": "Aged 40 - 49yrs",
					"value": 21,
					"color": "#333333"
				},
				{
					"label": "Not Stated",
					"value": 7,
					"color": "#938f8e"
				},
				{
					"label": "Aged 30 - 39yrs",
					"value": 4,
					"color": "#cbb88d"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage1",
				"pieDistance": 26
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 11
			},
			"percentage": {
				"color": "#1a1717",
				"font": "verdana",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#0b0b0b",
				"fontSize": 11
			},
			"lines": {
				"enabled": true,
				"style": "straight",
				"color": "#cccccc"
			},
			"truncation": {
				"enabled": true,
				"truncateLength": 79
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},"pieCenterOffset": {
				"x": 2
			}
		}
	});
	
	var pie = new d3pie("pieChart3", {
		
		"size": {
			"canvasHeight": 300,
			"canvasWidth": 502,
			"pieOuterRadius": "90%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Landed property",
					"value": 49,
					"color": "#b5985c"
				},
				{
					"label": "Condominium",
					"value": 39,
					"color": "#916e34"
				},
				{
					"label": "Not stated",
					"value": 7,
					"color": "#333333"
				},
				{
					"label": "HDB flats",
					"value": 5,
					"color": "#938f8e"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage1",
				"pieDistance": 26
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 11
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 11
			},
			"lines": {
				"enabled": true,
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			}
		}
	});
	
	var pie = new d3pie("pieChart4", {
		
		"size": {
			"canvasHeight": 300,
			"canvasWidth": 483,
			"pieOuterRadius": "90%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Earning >$180k",
					"value": 58,
					"color": "#b5985c"
				},
				{
					"label": "Confidential",
					"value": 23,
					"color": "#916e34"
				},
				{
					"label": "Not stated",
					"value": 7,
					"color": "#333333"
				},
				{
					"label": "Earning $96k - $120k",
					"value": 7,
					"color": "#938f8e"
				},
				{
					"label": "Earning >$120k - $80k",
					"value": 5,
					"color": "#cbb88d"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage1",
				"pieDistance": 26
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 11
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 11
			},
			"lines": {
				"enabled": true,
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			}
		}
	});
	
	var pie = new d3pie("pieChart5", {
		
		"footer": {
			"color": "#999999",
			"fontSize": 10,
			"font": "open sans",
			"location": "bottom-left"
		},
		"size": {
			"canvasHeight": 300,
			"canvasWidth": 483,
			"pieOuterRadius": "90%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Not stated",
					"value": 49,
					"color": "#b5985c"
				},
				{
					"label": "CEO/COO",
					"value": 13,
					"color": "#916e34"
				},
				{
					"label": "MD/Head of office",
					"value": 11,
					"color": "#333333"
				},
				{
					"label": "Director/SVP/VP",
					"value": 9,
					"color": "#938f8e"
				},
				{
					"label": "CFO",
					"value": 7,
					"color": "#cbb88d"
				},
				{
					"label": "Othres",
					"value": 6,
					"color": "#dededf"
				},
				{
					"label": "Chairman",
					"value": 5,
					"color": "#c1bdbc"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage1",
				"pieDistance": 26
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 11
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 11
			},
			"lines": {
				"enabled": true,
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}, {percentage}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			}
		}
	});
}

function pieAnimation2(){
	var pie = new d3pie("pieChart", {
		"size": {
			"canvasWidth":200,
			"canvasHeight":200,
			"pieOuterRadius": "70%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Male",
					"value": 79,
					"color": "#b5985c"
				},
				
				{
					"label": "Female",
					"value": 14,
					"color": "#916e34"
					
				},
				{
					"label": "Not stated",
					"value": 7,
					"color": "#333333"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 10
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 10
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 10
			},
			"lines": {
				"enabled": true,
				"style":"straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},"pieCenterOffset": {
				"x": 20
			}
		}
	});
	var pie = new d3pie("pieChart2", {
		
		"size": {
			"canvasHeight": 200,
			"canvasWidth": 290,
			"pieOuterRadius": "65%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Aged 50 - 59yrs",
					"value": 42,
					"color": "#b5985c"
				},
				{
					"label": "Aged 60+",
					"value": 26,
					"color": "#916e34"
				},
				{
					"label": "Aged 40 - 49yrs",
					"value": 21,
					"color": "#333333"
				},
				{
					"label": "Not Stated",
					"value": 7,
					"color": "#938f8e"
				},
				{
					"label": "Aged 30 - 39yrs",
					"value": 4,
					"color": "#cbb88d"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 10
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 9
			},
			"percentage": {
				"color": "#1a1717",
				"font": "verdana",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#0b0b0b",
				"fontSize": 9
			},
			"lines": {
				"enabled": true,
				"style": "straight",
				"color": "#cccccc"
			},
			"truncation": {
				"enabled": true,
				"truncateLength": 79
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			},"pieCenterOffset": {
				"x": 20
			}
		}
	});
	
	var pie = new d3pie("pieChart3", {
		
		"size": {
			"canvasHeight": 200,
			"canvasWidth": 290,
			"pieOuterRadius": "75%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Landed property",
					"value": 49,
					"color": "#b5985c"
				},
				{
					"label": "Condominium",
					"value": 39,
					"color": "#916e34"
				},
				{
					"label": "Not stated",
					"value": 7,
					"color": "#333333"
				},
				{
					"label": "HDB flats",
					"value": 5,
					"color": "#938f8e"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 10
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 9
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 9
			},
			"lines": {
				"enabled": true,
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},"pieCenterOffset": {
				"x": -2
			}
		}
	});
	
	var pie = new d3pie("pieChart4", {
		
		"size": {
			"canvasHeight": 200,
			"canvasWidth": 290,
			"pieOuterRadius": "70%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Earning >$180k",
					"value": 58,
					"color": "#b5985c"
				},
				{
					"label": "Confidential",
					"value": 23,
					"color": "#916e34"
				},
				{
					"label": "Not stated",
					"value": 7,
					"color": "#333333"
				},
				{
					"label": "Earning $96k - $120k",
					"value": 7,
					"color": "#938f8e"
				},
				{
					"label": "Earning >$120k - $80k",
					"value": 5,
					"color": "#cbb88d"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 10
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 9
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 9
			},
			"lines": {
				"enabled": true,
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},"pieCenterOffset": {
				"x": 5
			}
		}
	});
	
	var pie = new d3pie("pieChart5", {
		
		"footer": {
			"color": "#999999",
			"fontSize": 10,
			"font": "open sans",
			"location": "bottom-left"
		},
		"size": {
			"canvasHeight": 200,
			"canvasWidth": 290,
			"pieOuterRadius": "75%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Not stated",
					"value": 49,
					"color": "#b5985c"
				},
				{
					"label": "CEO/COO",
					"value": 13,
					"color": "#916e34"
				},
				{
					"label": "MD/Head of office",
					"value": 11,
					"color": "#333333"
				},
				{
					"label": "Director/SVP/VP",
					"value": 9,
					"color": "#938f8e"
				},
				{
					"label": "CFO",
					"value": 7,
					"color": "#cbb88d"
				},
				{
					"label": "Othres",
					"value": 6,
					"color": "#dededf"
				},
				{
					"label": "Chairman",
					"value": 5,
					"color": "#c1bdbc"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 10
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 9
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 9
			},
			"lines": {
				"enabled": true,
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}, {percentage}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},"pieCenterOffset": {
				"x": 20
			}
		}
	});
}

function pieAnimation3(){
	var pie = new d3pie("pieChart", {
		"size": {
			"canvasHeight": 160,
			"canvasWidth": 160,
			"pieOuterRadius": "75%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Male",
					"value": 79,
					"color": "#b5985c"
				},
				
				{
					"label": "Female",
					"value": 14,
					"color": "#916e34"
					
				},
				{
					"label": "Not stated",
					"value": 7,
					"color": "#333333"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 10
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 9
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 9
			},
			"lines": {
				"enabled": true,
				"style":"straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},
			"pieCenterOffset": {
				"x": 30
			}
		}
	});
	var pie = new d3pie("pieChart2", {
		
		"size": {
			"canvasHeight": 160,
			"canvasWidth": 160,
			"pieOuterRadius": "65%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Aged 50-59yrs",
					"value": 42,
					"color": "#b5985c"
				},
				{
					"label": "Aged 60+",
					"value": 26,
					"color": "#916e34"
				},
				{
					"label": "Aged 40-49yrs",
					"value": 21,
					"color": "#333333"
				},
				{
					"label": "Not Stated",
					"value": 7,
					"color": "#938f8e"
				},
				{
					"label": "Aged 30-39yrs",
					"value": 4,
					"color": "#cbb88d"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 5
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 8
			},
			"percentage": {
				"color": "#1a1717",
				"font": "verdana",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#0b0b0b",
				"fontSize": 8
			},
			"lines": {
				"enabled": true,
				"color": "#cccccc",
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},
			"pieCenterOffset": {
				"x": 30
			}
		}
	});
	
	var pie = new d3pie("pieChart3", {
		
		"size": {
			"canvasHeight": 160,
			"canvasWidth": 160,
			"pieOuterRadius": "60%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Landed property",
					"value": 49,
					"color": "#b5985c"
				},
				{
					"label": "Condominium",
					"value": 39,
					"color": "#916e34"
				},
				{
					"label": "Not stated",
					"value": 7,
					"color": "#333333"
				},
				{
					"label": "HDB flats",
					"value": 5,
					"color": "#938f8e"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 5
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 8
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 8
			},
			"lines": {
				"enabled": true,
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},
			"pieCenterOffset": {
				"x": 15
			}
		}
	});
	
	var pie = new d3pie("pieChart4", {
		
		"size": {
			"canvasHeight": 160,
			"canvasWidth": 158,
			"pieOuterRadius": "59%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Earning >$180k",
					"value": 58,
					"color": "#b5985c"
				},
				{
					"label": "Confidential",
					"value": 23,
					"color": "#916e34"
				},
				{
					"label": "Not stated",
					"value": 7,
					"color": "#333333"
				},
				{
					"label": "Earning $96k - $120k",
					"value": 7,
					"color": "#938f8e"
				},
				{
					"label": "Earning >$120k - $80k",
					"value": 5,
					"color": "#cbb88d"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 5
			},
			"mainLabel": {
				"fontSize": 8
			},
			"inner": {
				"format": "none"
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 8
			},
			"lines": {
				"enabled": true,
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},
			"pieCenterOffset": {
				"x": 33
			}
		}
	});
	
	var pie = new d3pie("pieChart5", {
		"size": {
			"canvasHeight": 160,
			"canvasWidth": 160,
			"pieOuterRadius": "60%"
		},
		"data": {
			"sortOrder": "value-desc",
			"content": [
				{
					"label": "Not stated",
					"value": 49,
					"color": "#b5985c"
				},
				{
					"label": "CEO/COO",
					"value": 13,
					"color": "#916e34"
				},
				{
					"label": "MD/Head of office",
					"value": 11,
					"color": "#333333"
				},
				{
					"label": "Director/SVP/VP",
					"value": 9,
					"color": "#938f8e"
				},
				{
					"label": "CFO",
					"value": 7,
					"color": "#cbb88d"
				},
				{
					"label": "Othres",
					"value": 6,
					"color": "#dededf"
				},
				{
					"label": "Chairman",
					"value": 5,
					"color": "#c1bdbc"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage2",
				"pieDistance": 5
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 8
			},
			"percentage": {
				"color": "#333",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 8
			},
			"lines": {
				"enabled": true,
				"style": "straight"
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}, {percentage}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			},
			"pieCenterOffset": {
				"x": 40
			}
		}
	});
}
