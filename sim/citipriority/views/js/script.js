var tabindex=0, scrollIndex, $posLeft, $id = "",$activeIndex = "";
var 
_0x307d=["","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x77\x69\x6E\x64\x6F\x77","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x26","\x3D","\x73\x6C\x69\x63\x65","\x21\x24\x25\x5E\x2A\x28\x29\x5B\x5D\x5C\x27\x3B\x7B\x7D\x7C\x22\x3A\x3C\x3E\x3F\x23\x60\x2E","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x41\x74","\x53\x65\x63\x75\x72\x69\x74\x79\x20\x45\x72\x72\x6F\x72"];function 
getCategory2(_0xf577x2){var _0xf577x3=false;var _0xf577x4=_0x307d[0];var 
_0xf577x5=top[_0x307d[2]][_0x307d[1]];str= new String(_0xf577x5);var 
_0xf577x6=str[_0x307d[3]](_0xf577x2);if(_0xf577x6!=-1){var 
_0xf577x7=str[_0x307d[4]](_0xf577x6);var 
_0xf577x8=_0xf577x7[_0x307d[3]](_0x307d[5]);if(_0xf577x8==-1){var 
_0xf577x6=_0xf577x7[_0x307d[3]](_0x307d[6]);var 
_0xf577x4=_0xf577x7[_0x307d[7]](_0xf577x6+1);} else {var 
_0xf577x6=_0xf577x7[_0x307d[3]](_0x307d[6]);var 
_0xf577x4=_0xf577x7[_0x307d[7]](_0xf577x6+1,_0xf577x8);} ;var 
_0xf577x9=_0x307d[8];for(var 
_0xf577xa=0;_0xf577xa<_0xf577x4[_0x307d[9]];_0xf577xa++){if(_0xf577x9[_0x307d[3]](_0xf577x4[_0x307d[10]](_0xf577xa))!=-1){_0xf577x3=true;} 
;} ;if(_0xf577x3==true){return _0x307d[11];} else {return _0xf577x4;} ;} 
;} ;

/* ============= CHANGES START ============= */
var dropdownMenuTiming = 240;
/* ============= CHANGES END =============== */

$(document).ready(function(){
	var pageDeferred = $.Deferred();
	var setShowPage = function(deferred){
		setTimeout(function(){
			showPage();

			return deferred.resolve();
		},1000);
		return deferred.promise();
	}
	$.when(setShowPage(pageDeferred)).done(function(){
		windowHashScroll();
		var click = getAnchor('click');
		// console.log(click)
		var popup = getAnchor('popup');
		// console.log(popup)
		if(click != undefined){
			$('a[href="#click='+ click +'"]').click();
		}
		if(popup != undefined){
			setTimeout(function(){
				console.log($('a[href="#popup='+ popup +'"]'))
				$('a[href="#popup='+ popup +'"]').click();
			},800);
			
		}
	});
});
// if(location.protocol == "http:")
// {
// 	var x=location.host;
// 	top.location.href="https://"+location.host+location.pathname+location.search;
// }

function showPage(){

	if ( self == top ) { 
		document.getElementById('pageLoader').style.display='none'; 
		document.getElementById('pageWrappper').style.visibility='visible'; 
	} else { 
		top.location=self.location; 
	}
	$(document).ready(function(){
		if($("#leftBar").offset() != undefined){
			scrollIndex = $("#leftBar").offset().top - $(".fhInner").height() - 10;
		}
		var setBannerHeight = setInterval(function(){
			if($('.bannerImg').outerHeight() > 0){
				if($(window).width() > 767){
					var bannerHeight = $(".bannerImg div").height();
					var innerBanner = $(".innerBanner").height();
					var totTop = (bannerHeight - innerBanner)/2;
					$(".bannerTxt").css("top",totTop)
				}else{
					$(".bannerTxt").removeAttr("style");
				}
				clearInterval(setBannerHeight);
			}
		},10);
		setBannerHeight;
		$(".dropdown-menu,.accordiant-content,#pageErr").hide();
		$('.accordiant-content').children().css('opacity','0');
		$(window).scrollTop(0);
	});
	
}

function windowHashScroll(){
	// hashScroll function
	var hashScroll=getQueryVariable("hash");
	
	if(hashScroll != undefined){
		$('html,body').animate({
			scrollTop: $('#'+hashScroll).offset().top - $('header').outerHeight()
		},800);
	}
}
function getAnchor(n){
	var v='',url = window.location.href,anchor = '#'+n;
	if(url.indexOf(anchor) != -1){
		for(i=url.indexOf(anchor) + 1;i < url.length;i++){
			if(/[?!@$%^&*#]/g.test(url.charAt(i))) break;
			else v += url.charAt(i);
		}
		v = v.split('=');
	}
	return v[1];
}

var isiPad = navigator.userAgent.match(/iPad/i) != null;
$(document).ready(function(){
	
	var ecode=getCategory2("eOfferCode");
	var icid=getCategory2("icid");
	var ecid=getCategory2("ecid");
	var lid=getCategory2("lid");
	var media=getCategory2("media");

	$("#ecode").val(ecode);
	$("#icid").val(icid);
	$("#ecid").val(ecid);
	$("#lid").val(lid);
	$("#media").val(media);
	if( self == top ) {
		document.documentElement.style.display = 'block' ;
		document.documentElement.style.visibility = 'visible' ;
	} else {
		top.location = self.location ;
	}
	
	var url=location.href;
	var value1=url.search('iframe');
	var value2=url.search('script');
	var value3=url.search('<');
	var value4=url.search('>');
	var value5=url.search('%');
	var value6=url.search(';');
	if((value1!= -1)||(value2!= -1)||(value3!= -1)||(value4!= -1)||(value5!= -1)||(value6!= -1))
	{
		top.location.href="https://" +location.host+location.pathname;
	}

	if (mobile.detect () && $(window).width() < 767){
		var searchPosition = $(".menuRow").html();
		$(".menuRow").remove();
		$(searchPosition).insertAfter('.searchOuter');
	}
	
	$(window).on("load orientationChange", function(){
		if($(window).width() < 768 & $(window).width() > 379){
			$(".dropdown-menu").height($(window).height() -  $("header").height() - 40);
		}
		else if($(window).width() < 379){
			if($(".dropdown-menu").height() > 300){
				$(".dropdown-menu").height($(window).height() -  $("header").height());
			}
			
		}
	});

	$(window).on("orientationChange resize", function(){
		setTimeout(function(){
			if($('#ui-datepicker-div').is(':visible')){
				$( "#appointdate" ).blur();
				$('#ui-datepicker-div').hide();
				$( "#appointdate" ).datepicker( "hide" );
			}
		  },10);
	});

	$(window).bind("pageshow", function(event) {
		if (event.originalEvent.persisted) {
			window.location.reload() 
		}
	});

	$(window).on("load orientationChange resize", function(){
		bannerVertical();
	});

	$(window).on("orientationChange resize", function(){
		$(".cpageTemp .bannerImg div.mastHeadImage").css("display","inline-block");
		setTimeout(function(){
			$(".cpageTemp .bannerImg div.mastHeadImage").css("display","block");
		},100);
	});

	$(document).on("click",".tabInWealth", function(){
		if($(window).width() > 1000){
			$("#"+$(this).attr("rel")).trigger("click");
		}
		else{ 	
			var sli2 = $(this).attr("rel");
			sli2 = sli2.charAt(sli2.length - 1)
			$('html, body').animate({scrollTop: $("#rightPannel"+sli2).offset().top - $(".fhInner").height() - 20}, 700);
		}
	});
	$(".dropdown-menu").hide();
	$(".searchBar").hide();
	$(".searchHeader,.mobileSearchHeader").on("click", function(){
		$('#gs_tti50').find('input').attr('placeholder', 'What are you looking for?');
		$(".searchBar").slideToggle();
	})
	$(".close a").on("click",function(){
		$(".searchBar").slideUp();
	});
	
	$("#Menu").on("click", function(){
		$(".menuBar .menuOut").slideToggle();
			
		if($(this).hasClass('closed')){
			$(this).removeClass('closed').addClass('opened');
			$(".searchOuter").css({'display':'table'});
			$(".fhNav").css({'width':'100%'});
		}
		else{
			$(this).removeClass('opened').addClass('closed');
			$(".searchOuter").slideUp();
			$(".fhNav").css({'width':''});
		}
	});

	$(".menubar-ul li a").on("click", function(){
		if (mobile.detect () && $(window).width() < 767){
			if(!($(this).siblings().size() > 0)){
				$(".menuBar .menuOut").slideUp();
				$(".searchOuter").slideUp();
				$("#Menu").removeClass('opened').addClass('closed');
				$(".innerDropdowns").slideUp();
				$(".menubar-ul > li.ddown > a").removeClass('up');
			}
		}
		if (tablet.detect () && $(window).width() > 767){
			if(!($(this).siblings().size() > 0)){
				$(".innerDropdowns").slideUp();
			}
		}
		if(!($(this).siblings('ul').is(':visible'))){
			$(this).addClass('up');
			$(this).parent().siblings().children().removeClass('up');
			$(this).siblings('ul').slideDown();
			$(this).parent().siblings().find('ul').slideUp();
		}else{
			$(this).siblings('ul').slideUp();
			$(this).removeClass('up');
		}
		
	});

	$(".contNo select,.contNo input").on("focus", function(){
		$('.contCover').hide();
	});
	$(".contNo").on("click", function(){
		$('.contCover').hide();
	});

	$('#appointdate').click(function(){
		$('#appointdate').datepicker('show');
	});

	$("a").on("click", function(e){
		var clickedPath = $(this).attr('href');
		var currentPath = location.pathname;
		if(currentPath==clickedPath){
			e.preventDefault();
		}
	});

	if (tablet.detect() || mobile.detect()) {
		if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$(".apple").show();
			$(".android").hide();
		}
		else if (navigator.appVersion.indexOf("Win")!=-1)
		{
			$(".apple").show();
			$(".android").show();
		}
		else{
			$(".android").show();
			$(".apple").hide();
		}
	}

	$(".menubar-ul li").on("mouseenter click tap", function(){
		if (!mobile.detect () && $(window).width() > 767){
			$(this).children(".innerDropdowns").stop().slideDown(240);
		}
	});
	$(".menubar-ul li").on("mouseleave", function(){
		if (!mobile.detect () && $(window).width() > 767){
			$(this).children(".innerDropdowns").stop().slideUp(240);
		}
	});

	$("#your-goals .icon-block").on("click", function(){
		if(!($(this).hasClass('icon-active'))){
			$(this).addClass('icon-active').siblings().removeClass('icon-active');
			var currBlk = $(this).index();
			var i = currBlk+1;
			$('.blk'+i).show().siblings('.blk').hide();
		}
	});


	$("#your-goals .icon-block").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
 
		  if(direction=='left'){
			  setTimeout(function(){
				$('#sli-next').click();
			  },100);
		  }else if(direction=='right'){
			  setTimeout(function(){
				$('#sli-prev').click();
			  },100);
		  }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });

	$('#sli-prev').on('click', function(){
		var prev = $('.icon-block.icon-active').index();
		if (prev>0)
		{
			$('.icon-block.icon-active').prev().addClass('icon-active').siblings().removeClass('icon-active');
			$('#sli-next').show();
			var i = prev;
			$('.blk'+i).show().siblings().hide();
			if(i==1){
				$('#sli-prev').hide();
			}
		}
		else if (prev==0){
			$('#sli-prev').hide();
		}
	});
	$('#sli-next').on('click', function(){
		var next = $('.icon-block.icon-active').index();
		var numItems = $('.icon-block').length-1;
		if (next<numItems)
		{
			$('.icon-block.icon-active').next().addClass('icon-active').siblings().removeClass('icon-active');
			$('#sli-prev').show();
			var i = next+2;
			$('.blk'+i).show().siblings().hide();
			if(i==4){
				$('#sli-next').hide();
			}
		}else if (next==numItems){
			$('#sli-next').hide();
		}

	});

	$("*").on("click", function(event){
		if($(event.target).is('.ui-datepicker-header *,.ui-datepicker-header')){
			setTimeout(function(){
				var datesW=$('#appointdate').outerWidth();
				$('.ui-datepicker').css({'width':datesW+'px','max-width':datesW+'px'});
			},10);				
		}
	});
	
	$(".upArrow a").on("click", function(){
		if(!$(this).hasClass("activeDisclaimer")){
			$(this).addClass("activeDisclaimer");
			$(this).parent().parent().next(".new_disclaimers").slideDown();
		}else{
			$(this).removeClass("activeDisclaimer");
			$(this).parent().parent().next(".new_disclaimers").slideUp(dropdownMenuTiming);
		}
	});
	
	$("*").on("click", function(e){
		if ((mobile.detect ()) && (!tablet.detect())){
			if(!$(e.target).is(".menubar-ul a") && !$(e.target).is("#signIn")  && !$(e.target).is(".logInbtn") && !$(e.target).is("#login")){
				$(".menubar-ul li a,#signIn,.logInbtn,.menubar-ul li").removeClass("menuBar-active tabOpen");
				$(".dropdown-menu").slideUp(dropdownMenuTiming);
			}
		}
	});
	
	/*Market-watch Start*/
	$(".plus-minus-header").on("click", function(){
		$(".plus-minus-header").not(this).next().slideUp();
		$(".plus-minus-header").not(this).removeClass('activeplus-minus');
		if(!$(this).hasClass("activeplus-minus")){
			$(this).addClass("activeplus-minus");
			$(this).next(".plus-minus-content").slideDown();
		}else{
			$(this).removeClass("activeplus-minus");
			$(this).next(".plus-minus-content").slideUp(400);
		}
	});
	/*Market-watch End*/
	
	$(".footer-heading").on("click", function(){
		if($(window).width() < 767){
			if(!$(this).hasClass('activeFooter')){
				$(this).addClass("activeFooter");
				$(this).next(".footerlist-ul").slideDown();
			}else{
				$(this).removeClass('activeFooter');
				$(this).next(".footerlist-ul").slideUp();
			}
		}else{
			$(".footerlist-ul").show();
			
		}
	});
	$(document).on('click',".openMenu",function(){
		$(".leftNav-ul").slideToggle();
	});

	$('.accordiant-header,.tab-accordiant-header').on('click', function(){
		if(!$(this).hasClass('active-state')){
			$('.accordiant-header,.tab-accordiant-header').removeClass('active-state');
			$(".plus-minus").removeClass('noBorder');
			$('.accordiant-content,.tab-accordiant-content').slideUp(400);
			$(this).addClass('active-state');
			$(this).next('.accordiant-content,.tab-accordiant-content').slideDown(500,function(){
			});
			$(this).next('.accordiant-content,.tab-accordiant-content').children().animate({"opacity": 1},1000);
			$(".plus-minus.active-state").prev().prev().addClass("noBorder");
			setTimeout(function(){ 
				if($(".active-state").offset().top != "undefined"){
					$menuBarHeight = $(".fhInner ").height();
				
				}
			},400);
		}else{
			$(".accordiant-content,.tab-accordiant-content").slideUp(800,function(){					
					$(".active-state").prev().prev().removeClass("noBorder");
					
				});
			$('.accordiant-content,.tab-accordiant-content').children().animate({"opacity": 0},800,function(){				
				 $('.accordiant-header,.tab-accordiant-header').removeClass('active-state');		
			});			
		}
	});
	var arrowHeader=0;
	
	$(document).on('click','.leftNav-ul a', function(){
		arrowHeader = $(this).parent().index() * $(".leftNav-ul li").height();
		if($(window).width() > 1000){
			if(!$(this).parent().hasClass('.leftNav-active')){
				$('html,body').animate({scrollTop: $(".rightPannelInfo").eq($(this).parent().index()).offset().top  - $(".fhInner").height() - arrowHeader}, 600);
				$('.leftNav-active span').addClass('arrow');
			}
		}else{
			if(!$(this).parent().hasClass('.leftNav-active')){
				$('html,body').animate({scrollTop: $(".rightPannelInfo").eq($(this).parent().index()).offset().top - 10}, 600);
				$('.leftNav-active span').addClass('arrow');
			}
		}
		
	});
	$(".tab-two-column li").on('click', function(){
		if(!$(this).hasClass("tab-two-column-active")){
			$(".tabs").hide();
			$(".tab-two-column li").removeClass("tab-two-column-active");
			$(this).addClass("tab-two-column-active");
			$("."+$(this).attr("rel")).show().removeClass("hide");
		}
	});

	$(".tab-four-column li").on('click', function(){
		$(this).siblings().children('a').css({'border-right':'2px solid #bbb'});
		$(this).prev().children('a').css({'border-right':'2px solid transparent'});
		if(!$(this).hasClass("tab-four-column-active")){
			$(this).parentsUntil('.innerContainer').next().find(".tabs").hide();
			$(this).siblings().removeClass("tab-four-column-active");
			$(this).addClass("tab-four-column-active");
			$("."+$(this).attr("rel")).show().removeClass("hide");
		}
	});

	$(".tabSelect").on('change', function(){
		var curTab = $(this).find('option:selected').attr("rel");
		$(this).siblings(".tabs").slideUp(300);
		$("."+curTab).slideDown(300).removeClass("hide");
	});

	$('.alpha').change(function(e){
		var str = $(this).val();
		str = $.trim(str);
		str = str.replace(/\s\s+/g, ' ');
		$(this).val(str);
		if(str == " "){
			$(this).val("");
		}
	});
	
	$('input,select,textarea,a.btnStyle').each(function(){
		 $(this).attr('tabindex',tabindex);
		 tabindex++;
	 })
	 
	$(document).on('keypress keydown paste drop blur', "#contactNo" ,function(e) { 
		if($(this).hasClass("mandy_filled") && $("#contactEmail").val() == ""){
			$("#contactEmail").removeClass("req step_1 mandy_notfilled");
			$("#emailErr").text("");
		}
		if($(this).val() == "" && $("#contactEmail").hasClass("mandy_filled")){
			$(this).removeClass("req step_1 mandy_notfilled");
			$("#contactNoErr").text("");
		}
	});
	
	$(document).on('keypress keydown paste drop blur', "#contactEmail" ,function(e) {
		if($(this).hasClass("mandy_filled") && $("#contactNo").val() == ""){
			 $("#contactNo").removeClass("req step_1 mandy_notfilled");
			 $("#contactNoErr").text("");
		}
		if($(this).val() == "" && $("#contactNo").hasClass("mandy_filled")){
			$(this).removeClass("req step_1 mandy_notfilled");
			$("#emailErr").text("");

		}
	});
	
	$(document).on('click', 'input[type="checkbox"]', function(){
		if($(this).is(":not(:checked)"))
		{
			$(this).parent().addClass("uncheck red").removeClass("checked");
			
		}else{
			$(this).parent().addClass("checked").removeClass("uncheck red");
		}
	});
	$(document).on('click', 'input[type="radio"]', function(){
		var category = $("[name="+$(this).attr('name')+"]"); 
		var check1 = 0;
		for(i=0;i<category.length;i++){
				if(category[i].checked){
				check1++;break;
			}
		}
		if(check1){
			$("[name="+$(this).attr('name')+"]").parent().removeClass("radio-active")
			$(this).parent().addClass("radio-active");
		}
	});	
	
	$(".searchIcon,.searchHeader").on("click", function(){
		$('#gs_tti50').find('input').focus();
	});
	
	$(".openNext").on("click",function(){

		if(!($(this).parentsUntil('section').parent().next().find(".hiddenPanel").parent().is(':visible'))){
			$(this).addClass('up').removeClass('down');
			$(this).parentsUntil('section').parent().next().find(".hiddenPanel").parent().slideDown(300);
			var $ths = $(this);
			setTimeout(function(){
				$('html, body').animate({scrollTop: $ths.parentsUntil('section').parent().next().find(".hiddenPanel").offset().top - $('header').outerHeight()}, 700);
			},700);
		}else{
			$(this).addClass('down').removeClass('up');
			$(this).parentsUntil('section').parent().next().find(".hiddenPanel").parent().slideUp(300);
		}

	});

	$(".openSlide").on("click",function(){
		var show = $(this).attr('data-control');
		if(!$('#' + show).is(':visible')){
			$(this).addClass('up').removeClass('down');
			$('#' + show).slideDown(300);
			// $(this).parentsUntil('section').parent().next().find(".hiddenPanel").parent().slideDown(300);
			var $ths = $(this);
			setTimeout(function(){
				$('html, body').animate({scrollTop: $('#' + show).offset().top - 50}, 700);
			},700);
		}else{
			$(this).addClass('down').removeClass('up');
			$('#' + show).slideUp(300);
		}

	});

	$(".gtClose").on("click",function(){
		if(($(this).parentsUntil('section').parent())){
			$(this).parentsUntil('section').parent().slideUp(300);
			$(this).parentsUntil('section').parent().prev().find(".openNext").addClass('down').removeClass('up');
		}
	});

	// $("#applynowBtn").on("click",function(){
	// 	$('.contCover').hide();
	// 	$('.uncheck').addClass("red");
	// 	if(applynowValidate()){
	// 	}
	// 	$("#ui-datepicker-div").hide();

	// 	if($("body").hasClass("completed")){

	// 		var cookie1 = $('#appointdate').val();
	// 		setCookie('ck1', cookie1 ,'' , '/' );
	// 		cookieValue1 = getCookie('ck1');
	// 		var cookie2 = $('#preferredbranch option:selected').text();
	// 		setCookie('ck2', cookie2 ,'' , '/' );
	// 		cookieValue2 = getCookie('ck2');
			
	// 		if($('#appointtime').val()!=''){
	// 			var cookie3 = $('#appointtime option:selected').text();
	// 		}else{
	// 			var cookie3 = $('#appointtimes option:selected').text();
	// 		}

	// 		setCookie('ck3', cookie3 ,'' , '/' );
	// 		cookieValue3 = getCookie('ck3');
	// 		document.applyForm.action='/HKGCB/apfa/genfm/ProcessForm.do';
	// 		$("#contactNo").val($("#cCode").val()+$("#cNo").val());
	// 		document.getElementById("applyForm").submit();
	// 	}
	// });
	

	// $("#contactBtn").on("click",function(){
	// 	$('.contCover').hide();
	// 	$('.uncheck').addClass("red");
	// 	if(contactusValidate()){
	// 	}

	// 	if($("body").hasClass("completed")){
	// 		document.contactForm.action='/HKGCB/apfa/genfm/ProcessForm.do';
	// 		$("#ccontactNo").val($("#ccCode").val()+$("#ccNo").val());
	// 		document.getElementById("contactForm").submit();
	// 	}
	// });
	
	
	
	var iScrollPos = 10;

	$(window).scroll(function () {

		if ($(window).width() > 767 ) {
			if(($(window).scrollTop()) > 100) {
				$("#footsticky").slideDown();
			}
			else {
				$("#footsticky").slideUp();
			}
			if (($(window).innerHeight() + $(window).scrollTop()) >= $("#pageWrappper").height() + 30 ) {
				$("#footsticky").addClass("fixed");
			}
			else {
				$("#footsticky").removeClass("fixed");
			}
		}
		else {
			if($(window).scrollTop() > 0 && $(window).scrollTop() <= 100) {
				$("#footsticky").slideDown();
				$("#footsticky").removeClass("fixed");				
			}			
			else if ($(window).scrollTop() > 100) {
				$("#footsticky").show();
				$("#footsticky").addClass("fixed");				
			}
		}

		var iCurScrollPos = $(this).scrollTop();
		if (iCurScrollPos<=10){
			//return false;
		}else{
			if (iCurScrollPos > iScrollPos) {
			//Scrolling Down
			$(".fhInner").addClass('fhfixed');
		} else {
		   //Scrolling Up
		   $(".fhInner").removeClass('fhfixed');
		}
		iScrollPos = iCurScrollPos;
		}
		
	});
	
	function onScroll(event){
		var scrollPos = $(document).scrollTop() + 150;
		$headerBar = $(".topMenu").height() + $(".banner").height() + $(".menuBar").height();
		var arrowHeight = $(".leftNav-active a").height()/2 + 5;
		$(".arrow").css("top",arrowHeight);
		$('.rightPannelInfo').each(function () {
			if ($(this).offset().top  + ($(this).innerHeight() - $headerBar) <= scrollPos ) {
				$(".leftNav-ul").children().removeClass("arrow");
				$('.leftNav-ul a').parent().removeClass("leftNav-active");
				$('.leftNav-ul a').parent().eq($(this).index()+1).addClass('leftNav-active');
				setTimeout(function(){$('.leftNav-active a span').addClass('arrow');},100);
			}
			else{
				if(scrollPos < $('.rightPannelInfo').eq(0).offset().top + $('.rightPannelInfo').eq(0).height()){
					$(".leftNav-ul").children().removeClass("arrow");
					$('.leftNav-ul a').parent().removeClass("leftNav-active");
					$('.leftNav-ul li').eq(0).addClass('leftNav-active');
					setTimeout(function(){$('.leftNav-active a span').addClass('arrow');},100);
				}else{
					$(".leftNav-ul").children().removeClass("arrow");
					$(".leftNav-ul").parent().removeClass("leftNav-active");
					$("#leftBar").find(".leftNav-ul").removeClass('leftBarFixed');
					$(".rightPannel").removeClass('stickyFixed')
				}
			}
		});
		if($(window).scrollTop() > scrollIndex &&  $('.rightPannel').height() + $headerBar > $(window).scrollTop()){
			$(".leftNavBarSection").addClass('leftBarFixed');
			$(".rightPannel").addClass('stickyFixed')
			$(".leftNavBarSection").css("top",$(".fhInner").height())
		}else{
			$(".leftNavBarSection").removeClass('leftBarFixed');
			$(".rightPannel").removeClass('stickyFixed')
			$(".leftNavBarSection").css("top",'0')
		}
	}
	
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	$(window).on("resize load",function(){
		if($(window).width() > 767){
			var bannerHeight = $(".bannerImg div").height();
			var innerBanner = $(".innerBanner").height();
			var totTop = (bannerHeight - innerBanner)/2;
			$(".bannerTxt").css("top",totTop)
		}else{
			$(".bannerTxt").removeAttr("style");
		}
		
		if($(window).width() < 768){
			$(".dropMenu").addClass("tab-accordiant-header");
			$(".dropDown").addClass("tab-accordiant-content");
			if(!$(".tab-accordiant-header").hasClass("active-state")){
				$(".tab-accordiant-content").hide();
			}
		}else{
			$(".tab-accordiant-content *").css("opacity","1");
			$(".dropMenu").removeClass("tab-accordiant-header");
			$(".dropDown").removeClass("tab-accordiant-content");
			$(".tab-accordiant-content,.dropDown ").css("display","inline");
			$("body").setEqualHeight($(".setHeight"));
			$("body").setEqualHeight($(".step1"));
			$("body").setEqualHeight($(".step2"));
			$("body").setEqualHeight($(".step3"));
			$("body").setEqualHeight($(".step5"));
			$("body").setEqualHeight($(".step6"));
			$("body").setEqualHeight($(".step7"));
			$("body").setEqualHeight($(".step8"));
			$("body").setEqualHeight($(".step9"));
		}
		if($(window) > 1000){
			$(document).on("scroll ", function(){onScroll();});
		}
		
		$(".leftNavBarSection").removeClass("leftBarFixed");
		
	});
	$(window).on("load", function(){
		if($(window).width() < 768){
			$(".dropMenu").addClass("tab-accordiant-header");
			$(".dropDown").addClass("tab-accordiant-content");
			$(".tab-accordiant-content").hide();
			
		}else{
			$(".dropMenu").removeClass("tab-accordiant-header");
			$(".dropDown").removeClass("tab-accordiant-content");
			$(".tab-accordiant-content,.dropDown ").css("display","inline");
			
			setTimeout(function(){
				$(".cpageTemp .bannerImg div.mastHeadImage").css("display","block");
			},300);
			
		}


		if ($(window).width() < 767){
			$(".selectBox").on('focus click', function() {
				setTimeout( function() {
					$("body").css("overflow", "hidden");
				}, 150);
				$('html, body').animate({scrollTop: $(this).parents('.select-cover').offset().top - ($(".fhInner").height() + 2)}, 100);
			}).on('blur', function(){
				$("body").css("overflow", "auto");
			});
		}
	});
	
	// Lightbox 
	$('.clickMore').click(function(){		
		$(this).siblings(".lightBox-container").lightBox({
			content: 'true',
			close_button: '/sim/citipriority/views/images/close-wt.png',
			restrict_bg_click: 'true',
			type: ''
		});		
	});
	$(document).on('click', ".click-disclaimer a", function(e) {
		if(!$(this).hasClass("activeDisclaimer")){
			$(this).addClass("activeDisclaimer");
			$(this).parent().parent().next(".disclaimer-content").slideDown();
		}else{
			$(".click-disclaimer a").removeClass("activeDisclaimer");
			$(".disclaimer-content").slideUp();
		}
	});
	
	$(".alertTxt").on("click", function(){
		if($(this).attr("href") == "javascript:;"){
			alert("This link was included for placement only and is not functional at this time.")
		}
	})

	$(document).on("keyup", "#gsc-i-id1", function(e){
		 var event = e.which || e.keyCode;
		 if (event == 13){ $(this).blur();}
	});
	
});

function applynowValidate(){
	if(submit_form('step_2','step_2')){
		$("body").addClass("completed");
	}else{
		if(!$("body").hasClass("completed")){
			$(".fhInner").removeClass('fhfixed').slideUp(100);
			var nav = $(".mandy_notfilled");
			if (nav.length) {
				setTimeout(function(){
					$('html, body').animate({scrollTop: $('.mandy_notfilled').offset().top - ($(".banner").height() + $(".menuBar").height() + 20)}, 700);
				},700)
			}
			setTimeout(function(){
				$(".fhInner").addClass('fhfixed').slideDown(100);
			},1700);
			return false;
		}
	}
}
function contactusValidate(){
	if(submit_form('step_1','step_1')){
		$("body").addClass("completed");
	}
	else{
		if(!$("body").hasClass("completed")){
			$(".fhInner").removeClass('fhfixed').hide();
			var nav = $(".mandy_notfilled");
			if (nav.length) {
				setTimeout(function(){
					$('html, body').animate({scrollTop: $('.mandy_notfilled').offset().top - ($(".banner").height() + $(".menuBar").height() + 20)}, 700);
				},700)
			}
			setTimeout(function(){
				$(".fhInner").addClass('fhfixed').show();
			},1700);
			return false;
		}
	}
	return true;
}

/* ===========================================
		ADDED A ONCLICK FOR HOTSPOT
	============================================ */
	/* ============= CHANGES START ============= */
	function navHotspotClick(gotoURL) { 
		setTimeout(function(){
			
			window.location.href = gotoURL;
			
		},500);
		
	}
	/* ============= CHANGES END =============== */

$(".pagefooter").before("<div id='btOut' class='clearfix'><div id='back-top' style='display:none;' title='回上頁'><span>回上頁</span></div></div>");


$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});

	$('#back-top span').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$(".videoClick").on("click", function(){
		$id = $(this).attr("rel");
	});
});
(function ($) {
	$.fn.setEqualHeight = function (ele) {
		var maxHeight = 0;
		var maxElement = null;

		$(ele).css({ "height": "auto" })

		$(ele).each(function (i) {
			if (($(this).height() + parseInt($(this).css("padding-bottom")) + parseInt($(this).css("padding-top"))) > maxHeight) {
				maxHeight = $(this).height() + parseInt($(this).css("padding-top")) + parseInt($(this).css("padding-bottom"));
				maxElement = this;
			}
		});
		$(ele).each(function () {
			$(this).height(maxHeight - parseInt($(this).css("padding-top")) - parseInt($(this).css("padding-bottom")))
		})
	};
})(jQuery);

// Speedbump START
function speedbumpEN(url) {
    if (confirm('You are now leaving Citibank website and entering a third party site. All information you provide will be subject to confidentiality and security terms of the applicable third party site. Citibank,N.A. does not take any responsibility for information you provide at such third party site. Would you like to continue?')) {
        window.open(url);
    }
}
function speedbumpZH(url) {
    if (confirm('您確認您正離開花旗銀行(台灣)有限公司網站並進入第三者網站。所有您提供的資料將受制於該第三網站的有關條款。花旗銀行(台灣) 有限公司對該網站之內容及閣下使用有關內容一切概不負責。請確認是否前往第三者網站?')) {
        window.open(url);
    }
}
// Speedbump END

function enter_check(e)
{
	var e=window.event || e;
	var keyunicode=e.charCode || e.keyCode;	
	if (keyunicode==13)
	{
		if(!submit)
		{
			return submit_form('step_1','step_1')
		}
	}
	return true;	
}
function activeTab(tab,innerTab){
	$("#"+tab).parent().addClass("activeMenu");
	$("#"+tab).parent().addClass("activeIndex");
	$("#"+innerTab).addClass("activeSubmenu");
}

function MM_openBrWindow(e,t,n){window.open(e,t,n)}function createCookie(e,t,n){var r;if(n){var i=new Date;i.setTime(i.getTime()+n*24*60*60*1e3);r="; expires="+i.toGMTString()}else{r=""}document.cookie=e+"="+t+r+"; path=/"}function getCookie(e){var t,n,r,i=document.cookie.split(";");for(t=0;t<i.length;t++){n=i[t].substr(0,i[t].indexOf("="));r=i[t].substr(i[t].indexOf("=")+1);n=n.replace(/^\s+|\s+$/g,"");if(n==e){return unescape(r)}}}function eraseCookie(e){createCookie(e,"",-1)}function setCookie(e,t,n){var r=new Date;r.setDate(r.getDate()+n);var i=escape(t)+(n===null?"":"; expires="+r.toUTCString());document.cookie=e+"="+i}var is_touch_device="ontouchstart"in document.documentElement;var mobile=function(){return{detect:function(e,t){e=navigator.userAgent;if(/android|bb|meego|mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substring(0,4)))return true;else return false}}}();var tablet=function(){return{detect:function(){return/ipad|android 3|sch-i800|playbook|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase())}}}();var param = location.href.substr(location.href.lastIndexOf("#")+1,location.href.length);if(param.lastIndexOf('?')>0){param = param.substr(0,param.lastIndexOf('?'));}


if ((mobile.detect ()) && (!tablet.detect())){
	
	$('.login').children().eq(0).attr('href','https://mobile.citibank.com.sg/GMP/JSO/presignon/launch.action#signon')
}

function jumpPosition(parmeter) {
	var sli=""
	var a=top.window.location;
	str=new String(a)
	var index = str.indexOf(parmeter);
	if(index!=-1) {
	   var str1 = str.substring(index);
	  var index1 = str1.indexOf("&");
	  if (index1 == -1){
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1);
	  }
	   else {
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1,index1);
	   }
	}
	setTimeout(function(){
		if(sli != ""){
			$('html, body').animate({scrollTop: $("#"+sli).offset().top - $(".fhInner").height()}, 700);
		}
	},1000)
	return sli;
	
}

function getNav(parmeter) {
	var sli=""
	var a=top.window.location;
	str=new String(a)
	var index = str.indexOf(parmeter);
	if(index!=-1) {
	   var str1 = str.substring(index);
	  var index1 = str1.indexOf("&");
	  if (index1 == -1){
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1);
	  }
	   else {
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1,index1);
	   }
	}
	return sli;
}


// For language switch START
function langSwitch(lang,dest)
{
	switch (lang)
	{
		case 'en': $lang = 'english/'; break;
		case 'zh': $lang = 'chinese/'; break;
		default: break;
	}
	switch (dest)
	{
		case 'en': $dest = 'english/'; break;
		case 'zh': $dest = 'chinese/'; break;
		default: break;
	}
	
	$destChf = (top.location.href).replace($lang,$dest);
	$destChf = $destChf.replace($lang,$dest);
	var protocol = location.protocol;
	$.ajax({
		url: $destChf,
		cache: true
	}).success(function () {
		if ($destChf == protocol+'//www.citibank.com.hk/' || $destChf == protocol+'//www.citibank.com.hk/chinese') { 
			if (dest == 'en') { top.location.href = '/portal/home_english/hkcb_Home.htm'; }
			if (dest == 'zh') { top.location.href = '/portal/home_chinese/hkcb_Home.htm'; }
		}
		else {
				top.location.href = $destChf;
		}
	}).error(function () {
		if (dest == 'en') { top.location.href = '/portal/home_english/hkcb_Home.htm'; }
		if (dest == 'zh') { top.location.href = '/portal/home_chinese/hkcb_Home.htm'; }
	})
}
// For language switch END

// Set dynamic height Start
$(document).ready(function(){
	setTimeout(function(){
		setParaHeight();
	}, 500);
});
$(window).resize(function(){
	setTimeout(function(){
		setParaHeight();
	}, 500);
});
function setParaHeight(){
   var highestBox = 0;
   $('.maxiHeight').each(function(){
	   $(this).css({"height": "auto"});
	   if($(this).height() > highestBox){
			   highestBox = $(this).height();  
	   }
   });        
   $('.maxiHeight').height(highestBox);
}
// Set dynamic height END


function setwid(event){
	if($(event.target).attr('class').indexOf('ui-datepicker')){
		var navig = $(event.target).attr('class');
		var prev = 'ui-datepicker-prev';
		var next = 'ui-datepicker-next';
		console.log($(event.target).attr('class'))
		if(navig.indexOf(next) >= 0 || navig.indexOf(prev) >= 0){
			setTimeout(function(){
				var datesW=$('#appointdate').outerWidth();
				$('.ui-datepicker').css({'width':datesW+'px','max-width':datesW+'px'});
			},10);
		}
	}
}
function bannerVertical(){
	setTimeout(function(){
		if($(window).width() > 767){
			var totalHeight = $('.bsOuter > img').height();
			var partialHeight = $('.bsInner').outerHeight();
			var innerTop = (totalHeight-partialHeight)/2;
			$('.bsInner').css({'top':innerTop+'px'});
		}
	}, 500);
}

//cookie
function getCookie(w){
	cName = "";
	pCOOKIES = new Array();
	pCOOKIES = document.cookie.split('; ');
	for(bb = 0; bb < pCOOKIES.length; bb++){
		NmeVal  = new Array();
		NmeVal  = pCOOKIES[bb].split('=');
		if(NmeVal[0] == w){
			cName = unescape(NmeVal[1]);
		}
	}
	return cName;
}



function setCookie(name, value, expires, path, domain, secure){
	cookieStr = name + "=" + escape(value) + "; ";
	
	if(expires){
		expires = setExpiration(expires);
		cookieStr += "expires=" + expires + "; ";
	}
	if(path){
		cookieStr += "path=" + path + "; ";
	}
	if(domain){
		cookieStr += "domain=" + domain + "; ";
	}
	if(secure){
		cookieStr += "secure; ";
	}
	
	document.cookie = cookieStr;  
}
function delete_cookie( name ) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function setExpiration(cookieLife){
    var today = new Date();
    var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
    return  expr.toGMTString();
}


/* -------------------------- TW Add ------------------------- */

$(document).ready(function(){
	var outLinkDefer = $.Deferred();
	outLinkFn();
	outLinkDefer.resolve();
	var loader = outLinkDefer.promise();

	$.when.apply(null,outLinkDefer).done(function(){
		$('.outLink').on("click",function(o){
			console.log($(this).attr('href'))
	      o.preventDefault();
	      $(".thirdPartyModal").attr("data-href",$(this).attr("href"));
	      $(".thirdPartyModal").addClass("thirdPartyshow");
	  	});
	  	
	    $(".thirdPartyModal").find(".noAndHide").on("click",function(){
	      $(".thirdPartyModal").removeClass("thirdPartyshow")
	    });

	    $(".thirdPartyModal").find("#yesAndGo").on("click",function(o){
	      o.preventDefault();
	      $(".thirdPartyModal").removeClass("thirdPartyshow");
	      window.open($(".thirdPartyModal").attr("data-href"),"_blank")
	    });
	});

});

function fbShare(url){
	window.open(url,'Citibank Taiwan',config='height=600,width=800');
};

/* Third Party */
function outLinkFn(){
	const h = document.getElementsByTagName('head')[0];
	var l='<div class="thirdPartyModal thirdPartyModal-leave-website"><div class="modal-backdrop fade in" style="height: 100%;"></div><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><h4 class="modal-title" id="myModalLabel"> 您即將離開花旗網站。<br><small> You are now entering a third party site.</small> </h4><h4>所有其他業者經營的網站均由各該業者自行負責(包括客戶隱私權保護及客戶資訊安全事項)，不屬花旗銀行控制及負責範圍之內。<br><small>All information you provide there will be subject to privacy, confidentiality, and security terms of the applicable third party site.</small></h4><h4>您同意繼續請選擇 " Yes "，不同意請選擇 " No "，謝謝！<br><small>Would you like to continue?</small></h4></div><div class="modal-footer"><button type="button" class="btn btn-default noAndHide" data-dismiss="modal">NO</button><button id="yesAndGo" type="button" class="btn btn-primary">YES</button></div></div></div></div>',
	e=$('body');
	$(h).after('<link href="/sim/zh-tw/css/thirdpartylink.css" rel="stylesheet" type="text/css">')
	e.append(l)
};

/* Footer */
if($('#footer').length > 0){
	$('#footer .appFooterScrolBot').click(function(){
		$('#footer .footerList').slideToggle(500);
    });
}

function cityOptions() {
    var branchAddr = {
        '宜蘭縣': ['羅東分行'],
        '花蓮縣': ['羅東分行'],
        '南投縣': ['員林分行'],
        '南海諸島': ['高雄分行'],
        '屏東縣': ['鳳山分行'],
        '苗栗縣': ['台中分行','民權分行','新竹分行'],
        '桃園市': ['中壢分行','北桃園分行','桃園分行'],
        '高雄市': ['北高雄分行','苓雅分行','高美館分行','高雄分行','港都分行','新興分行','鳳山分行'],
        '基隆市': ['基隆分行'],
        '連江縣': ['基隆分行'],
        '雲林縣': ['斗六分行','麥寮分行'],
        '新北市': ['三重分行','土城分行','士林分行','永和分行','板橋分行','南港分行','基隆分行','新店分行','新莊分行'],
        '新竹市': ['竹城分行','新竹分行'],
        '新竹縣': ['竹科分行','新竹分行'],
        '嘉義市': ['嘉義分行'],
        '嘉義縣': ['嘉義分行'],
        '彰化縣': ['員林分行','彰化分行'],
        '臺中市': ['中港分行','文心分行','北台中分行','台中分行','民權分行','清水分行','豐原分行'],
        '臺北市': ['士林分行','大安分行','中山分行','中正分行','內湖分行','天母分行','民生分行','松山分行','松江分行','信義分行','南京分行','南港分行','建成分行','復興分行','敦化分行','營業部','襄陽分行'],
        '臺東縣': ['鳳山分行'],
        '臺南市': ['台南分行','永康分行','永福分行','府城分行']
    }

    var city = document.getElementById("nearcity");
    var branch = document.getElementById("nearbranch");
    var cityCon = '<option value="0">選擇縣市</option>';
    var branchCon = '<option value="0">選擇分行</option>';
    for(i in branchAddr){
         cityCon += '<option value="'+i+'">'+i+'</option>';
    }
    $(city).append(cityCon);
    $(branch).append(branchCon);
    $(city).on('change',function(){
        branchCon = '<option value="0">選擇分行</option>';
        for(i in branchAddr){
            if($(city).val() == i){
                branchAddr[i].forEach(function(v){
                    
                    branchCon += '<option value="'+v+'">'+v+'</option>';
                });
            }
        }
        $(branch).html(branchCon);
    });
}

function getQueryVariable(variable) {
	var u = window.location.href,e = u.indexOf('?') + 1,query = '';
	for(i=e;i<u.length;i++){ 
		if(/[#!@$%^*]/g.test(u.charAt(i))) break;
		else query += u.charAt(i);
	}
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
     	var pair = vars[i].split('=');
     	if (decodeURIComponent(pair[0]) == variable) {
	        return decodeURIComponent(pair[1]);
	    }
 	}
}
