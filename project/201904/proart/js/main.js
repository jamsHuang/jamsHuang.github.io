/*!
 *
 * ProArt main.js
 *
 * @version 20161121
 *
 */


// --------------------------------------------
// Base
// --------------------------------------------


// Avoid window.onsole errors in IE8-
(function(){for(var a,e=function(){},b="assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeline timelineEnd timeStamp trace warn".split(" "),c=b.length,d=window.console=window.console||{};c--;)a=b[c],d[a]||(d[a]=e)})();

$(function(){
	!!/file/.test(location.protocol) && $('a[href="./"]').attr('href', 'index.html');
});

// Enable FastClick
FastClick.attach(document.body);


var main = window.main || {};

main.IE = (navigator.appName == 'Microsoft Internet Explorer'&&/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)!=null)?parseFloat(RegExp.$1):99; // IE6~10 detection, non-IE browser gets 99
main.isMobile = (function(){
	var ua = navigator.userAgent||navigator.vendor||window.opera;
	return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0,4));
})();

document.documentElement.className += (main.isMobile?' mobile':' no-mobile');

main.hasTouchEvent = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
document.documentElement.className += (main.hasTouchEvent?' touchevent':' no-touchevent');

document.documentElement.className += (!('opacity' in document.body.style)?' no-opacity':'');



main.getVid = function(url) {
	var regexp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|v=)([^#\&\?]*).*/,
		match = url.match(regexp);
	if (match && match[1].length == 11)
		return match[1];
	else
		return false;
};
main.getPageY = function() {
	// Most browser has pageYOffset except IE-
	// to support legacy IEs in qurickmode or wrong doctype
	return window.pageYOffset || ((('clientHeight' in document.documentElement))?document.documentElement:document.body).scrollTop;
};
main.getWinH = function() {
	return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||$(window).height();
}
main.getWinW = function() {
	return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||$(window).width();
}

/** Disable dragging of a ghost image
 */
$.fn.undraggable = function() {
	return this.each(function(){
		$(this).attr('draggable', false).css('user-select','none');
	});
};
$(function(){
	$('img').undraggable();
});


/** Avoid touchmove event propagating from scrollable child (overflow:scroll) to window.
 * Support touch device only
 * and can't be tested on Chrome developer simulator.
 *
 * @see https://github.com/lazd/iNoBounce
 * @version 20160609
 */
$.fn.blockTouchmovePropagation = function() {
	return this.each(function(){
		this.wonb = {};
		$(this)
			.off('touchstart.wonb touchmove.wonb')
			.on('touchstart.wonb', function(e) {
				this.wonb.startY = e.originalEvent.touches ? e.originalEvent.touches[0].screenY : e.originalEvent.screenY;
			})
			.on('touchmove.wonb', function(e) {
				if( this.scrollHeight > this.offsetHeight ) {
					this.wonb.currY = e.originalEvent.touches ? e.originalEvent.touches[0].screenY : e.originalEvent.screenY;
					this.wonb.atTop = (this.wonb.startY <= this.wonb.currY && this.scrollTop === 0);
					this.wonb.atBottom = (this.wonb.startY >= this.wonb.currY && this.scrollHeight - this.scrollTop === /*this.offsetHeight*/$(this).innerHeight());

					if(this.wonb.atTop || this.wonb.atBottom) { e.preventDefault(); }
				}
				else { e.preventDefault(); }
			});
	});
}

/**
 * Playable
 * @version 20161111
 */
main.playable = (function(){
	var player, yt, inited = false;

	$(function(){
		$('[data-playable]').on('click', function(e) {
			if(!main.isMobile) {
				var vid = main.getVid( $(this).attr('href') );
				main.playable.watch(vid);
				e.preventDefault();
			}
		});
	});
	function _init() {
		inited = true;
		player = $('<div id="videoplayer" style="display:none;"><div class="close" title="Close video" tabindex="3000"></div></div>').appendTo('body');
		player.on('click','.close', close);
	}
	function close() {
		player.fadeOut(250, function(){
			yt.remove();
			$('html').removeClass('playable-open');
		});
		$(document).off('keyup.playable');
	}
	function watch(vid) {
		if(vid == null || String(vid).length<11) {
			return;
		}
		if(!inited) {
			_init();
			watch(vid);
			return;
		}
		var html = '<iframe class="player" src="{protocol}//www.youtube-nocookie.com/embed/{vid}?rel=0&wmode=opaque&autoplay=1&showinfo=0&modestbranding=1&rel=0" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>'
			.replace(/{protocol}/, /http/.test(location.protocol)?'':'http:')
			.replace(/{vid}/, vid);

		yt = $(html).prependTo(player);
		player.fadeIn(250);
		$('html').addClass('playable-open');

		// Press ESC to close
		$(document).off('keyup.playable').one('keyup.playable', function(e) {
			if(e.which == 27 && isActive()) {
				close();
			}
		});
		//console.log('playable watch vid=>', vid);
	}
	function isActive() {
		return $('html').hasClass('playable-open');
	}
	return {
		watch: watch, close: close, isActive: isActive
	}
})();




main.scrollTo = (function(anchor) {
	function _init() {
		$(document).on('click', '[data-scrollTo]', function(e) {
			scrollTo( $(this).attr( 'href') );
			e.preventDefault();
		});
	}
	function scrollTo(target, opts) {
		// Backtop
		if(target == '#') {
			$.scrollTo( 0, { axis:'y', duration: 366, easing:'easeInOutCirc' });
			return;
		}

		// Scroll to element
		var el = $(target);
		if(!el[0]) return;

		var dist = Math.abs(el.offset().top - main.getPageY()),
			opts = $.extend({
						offset: 0,
						duration: Math.round(Math.max( 300, dist*.1 ))
					}, opts||{});
		$.scrollTo(el, { offset: opts.offset, axis: 'y', duration: opts.duration, easing:'easeInOutCirc' });
	};
	$(_init);
	return scrollTo;
})();


/**
 * Header layout helper
 */
main.isHeaderLayout = (function(state) {
	function _init(){
		$(window).on('resize orientationchange load', _update);
		_update();
		setTimeout(_update, 31);
	}
	function _update() {
		if(main.getWinW()<=960 && !check('mb')) {
			$('html').removeClass('header-pc').addClass('header-mb');
			$(window).trigger('headerLayout', ['mb']);
		}
		if(main.getWinW()>960 && check('mb')) {
			$('html').removeClass('header-mb').addClass('header-pc');
			$(window).trigger('headerLayout', ['pc']);
		}
	}
	function check(state) {
		return $('html').hasClass('header-'+state);
	}
	$(_init);
	return check;
})();


/**
 * Header fixed
 */
main.updateHeaderHeight = (function() {
	function _init(){
		$(window).on('scroll resize orientationchange load touchmove', update);
		update();
		setTimeout(update, 31);
	}
	function update() {
		if(!$('.masthead')[0]) return;
		var thres = !!main.isHeaderLayout('pc')?72:56;
		$('html').toggleClass('header-fixed', main.getPageY() >= thres);
	}
	$(_init);
	return update;
})();


/**
 * Backtop button
 */
main.initBacktop = (function(){
	function _init() {
		$('<div id="backtop"><i class="fa fa-arrow-up"></i></div>').appendTo('body');
		$(document).on('click', '#backtop', function(){
			main.scrollTo('#');
		});
		$(window).on('scroll resize orientationchange touchmove', _update);
		setTimeout(_update,1111);
		_update();
	}
	function _update() {
		var y = main.getPageY(),
			thres = $(window).height()*.6,
			state = $('html').hasClass('leave-top');
		if( y > thres && !state) {
			$('html').addClass('leave-top');
		}
		if( y < thres && state) {
			$('html').removeClass('leave-top');
		}
	}
	$(_init);
})();


/**
 * navbar & submenu
 */
main.navBar = (function(){
	var navbar, submenu, navoverlay, navtoggle,
		timeout, _log = (1==1)&&main.IE>9&&!!Function.prototype.bind?(console.log.bind(window.console)):function(){};

	function _init() {
		navbar = $('#navBar');
		if(!navbar[0]) return;

		submenu = $('<div id="submenu" class="navpanel"></div>').insertAfter(navbar);
		navoverlay = $('<div id="navOverlay" class="navoverlay"></div>').insertBefore(navbar);
		navtoggle = $('<div id="navToggle" class="navtoggle"><b><i></i><i></i><i></i></b></div>').insertAfter(navbar);


		// Handle navbar toggle (mb)
		// ----------------------------------------------
		navbar.blockTouchmovePropagation();
		navoverlay.blockTouchmovePropagation();
		navoverlay.on('click', function(){
			toggleNavbar(false);
		});
		navtoggle.on('click', function(){
			toggleNavbar(!isNavbarOpen());
		});


		// Handle submenu
		// ----------------------------------------------
		navbar.on('click','.mainbtn', function(e){
			var m = $(this).parent(),
				s = $('.submenu',m);
			if(!!s[0]) {
				if(main.isHeaderLayout('mb')) {
					e.preventDefault();
					m.toggleClass('active', !s.is(':visible'));
					s.slideToggle(168);
				}
				else if(main.isHeaderLayout('pc') && (main.isMobile || main.hasTouchEvent)) {
					e.preventDefault();
					if(isSubmenuOpen()) {
						if(!m.hasClass('active')) {
							closeSubmenu();
							openSubmenu(m);
						} else {
							closeSubmenu();
						}
					} else {
						openSubmenu(m);
					}
				}
			}
		});
		navbar.hoverIntent({
			selector: '.mainbtn',
			over: function(e){
				openSubmenu($(this).parent());
			},
			out: function(){
				//closeSubmenu(0);
			},
			timeout: 200, // delay before the "out" function is called.
			sensitivity: 2, // mouse travels fewer than this number of pixels between polling intervals, then the "over" function will be called.
			interval: 100 //The soonest the "over" function can be called is after a single polling interval.
		});







		// Responsive update
		// ----------------------------------------------

		$(window).on('headerLayout', function(e, state){
			$('.mainitem', navbar).removeClass('active');
			if(state == 'pc') {
				toggleNavbar(false);
				$('.submenu', navbar).css('display','');
			}
			if(state == 'mb') {
				$('.mainitem.on .mainbtn', navbar).trigger('click');
			}
		});



		if(main.isHeaderLayout('mb')) {
			$('.mainitem.on .mainbtn', navbar).trigger('click');
		}
	}


	// ----------------------------------------------
	function toggleNavbar(flag) {
		if(flag && !isNavbarOpen()) {
			navbar.removeClass('out').addClass('in');
			navoverlay.removeClass('out').addClass('in');
			$('html').addClass('navbar-open');

			setTimeout(function(){ navbar.scrollTop(0); }, 30);
		}
		if(!flag && isNavbarOpen()) {
			navbar.removeClass('in').addClass('out');
			navoverlay.removeClass('in').addClass('out');
			setTimeout(function(){
				$('html').removeClass('navbar-open');
			}, 400);
		}
	}
	function isNavbarOpen() {
		return $('html').hasClass('navbar-open');
	}



	// ----------------------------------------------
	function isSubmenuOpen() {
		return $('html').hasClass('submenu-open');
	}
	function openSubmenu(m) {
		if(isSubmenuOpen()) return;

		var s = $('.submenu', m);
		if(!s[0]) return;

		submenu.empty().append(s.clone());
		submenu.removeClass('out').addClass('in');
		submenu.removeClass('reload');
		setTimeout(function(){ submenu.addClass('reload');}, 100);
		m.addClass('active').siblings('.active').removeClass('active');
		$('html').addClass('submenu-open');

		$(document).off('mousemove.submenu click.submenu').on('mousemove.submenu click.submenu', function(e){
			if(!submenu.find(e.target)[0] && !submenu.is(e.target) && !m.find(e.target)[0] && !m.is(e.target)) {
				closeSubmenu();
			}
		});
		_log('openSubmenu');
	}
	function closeSubmenu() {
		submenu.empty();
		submenu.removeClass('in').addClass('out');
		$('.mainitem', navbar).removeClass('active');
		$('html').removeClass('submenu-open');
		$(document).off('mousemove.submenu click.submenu');

		_log('closeSubmenu');
	}

	$(_init);
	return {
		isNavbarOpen: isNavbarOpen,
		toggleNavbar: toggleNavbar,
		isSubmenuOpen: isSubmenuOpen,
		openSubmenu: openSubmenu,
		closeSubmenu: closeSubmenu
	}
})();



/**
 * For sticky .mastfoot
 */
main.updateBodyH = (function() {
	function _init() {
		$(window).on('resize orientationchange load', update);
		$('body').imagesLoaded(update);
		setTimeout(update,1111);
		update();
	}
	function update() {
		if(main.getWinW()>640) {
			var h = main.getBodyH();
			$('.mastbody-inner').css('min-height', h);
		}
		else {
			$('.mastbody-inner').css('min-height', '');
		}
	}
	$(_init);
	return update;
})();


main.getBodyH = function(){
	var h = Math.max(400,
						main.getWinH()
							- $('.mastfoot').outerHeight()
						   // - $('.masthead').outerHeight()
							//- parseFloat( $('.mastbody-inner').css('padding-top'))
							//- parseFloat( $('.mastbody-inner').css('padding-bottom'))
							- parseFloat( $('.mastbody-inner').css('margin-top'))
							- parseFloat( $('.mastbody-inner').css('margin-bottom'))
					);
	return h;
}


main.scrollWith = (function(fn){
	var fns = [];
	function _init() {
		$(window).on('scroll resize orientationchange touchmove touchstart', _render);
		_render();
		setTimeout(_render, 11);
		setTimeout(_render, 1111);
	}
	function _render(fn) {
		$.each(fns, function(index, fn){
			fn();
		});
	}
	function scrollWith(fn) {
		if($.isFunction(fn)) {
			fns.push(fn);
		}
	}
	$(_init);
	return scrollWith;
})();


main.resizeWith = (function(fn){
	var fns = [];
	function _init() {
		$(window).on('resize orientationchange', _render);
		_render();
		setTimeout(_render, 11);
		setTimeout(_render, 1111);
	}
	function _render(fn) {
		$.each(fns, function(index, fn){
			fn();
		});
	}
	function resizeWith(fn) {
		if($.isFunction(fn)) {
			fns.push(fn);
		}
	}
	$(_init);
	return resizeWith;
})();



$.fn.mid = function(limit){
	var py = main.getPageY(),
		ph = main.getWinH(),
		h = this.height(),
		t = this.offset().top,
		d;

	d = ((t + h) - py)/(ph + h)*2 - 1;
	d = Math.round(d*1000)*.001;
	d = Math.max(-1*limit,Math.min(limit,d));
	return d;
};


/**
 * Hero slide
 */
$.fn.heroSlider = function() {
	return this.each(function(){
		// https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
		// v2.1.0
		var el = $(this),
			list = $('.list', el),
			conf = {
				items: 1,
				loop: true,
				autoplay: true, autoplayHoverPause: true,
				nav: false, dots: true, // required for 'to' callback
				responsiveRefreshRate: 10,
				onInitialized: initialized
			};
		list.addClass('owl-carousel');
		list.owlCarousel(conf);
		//list.on('changed.owl.carousel', changed);
		function initialized(e) {
			$('.owl-dots', el).unwrap();
			$('.owl-nav', el).hide();
		}
		//function changed(e) {}
	});
};
$(function(){
	$('.heroslider').heroSlider();
});

/**
 * video slide
 */
$.fn.videoSlider = function() {
	return this.each(function(){
		// https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
		// v2.1.0
		var el = $(this),
			list = $('.sliderList', el),
			conf = {
				items: 1,
				loop: true,
				autoplay: true, autoplayHoverPause: true,
				nav: false, dots: true, // required for 'to' callback
				responsiveRefreshRate: 10,
				onInitialized: initialized
			};
		list.addClass('owl-carousel');
		list.owlCarousel(conf);
		//list.on('changed.owl.carousel', changed);
		function initialized(e) {
			$('.owl-dots', el).unwrap();
			$('.owl-nav', el).hide();
		}
		//function changed(e) {}
	});
};
$(function(){
	$('.videoslider').videoSlider();
});


/**
 * Product Finder
 */
main.productFinder = (function(){
	var o = {}, finder, cateMenuY = 0;

	function _init() {
		finder = $('#prodFinder');
		if(!finder[0]) return;

		finder.on('click', '.menu .specs .btn', function(){
			var term = $(this).attr('data-term');
			o.filter(term);
		});

		finder.on('click', '.menu .category .btn', function(){
			var cate = $(this).attr('data-category');

			$('.menu .specs .row', finder).removeClass('on')
				.filter('[data-category="'+ cate +'"]').addClass('on');

			$(this).addClass('on').siblings('.on').removeClass('on');

			o.reset();
		});

		$('.menu .category .btn.on', finder).trigger('click');

		$(window).on('scroll resize orientationchange load touchmove', _stickMenu);
		_stickMenu();
		setTimeout(_stickMenu, 31);
	}
	// update height of list
	function _setListHeight() {
		$('.monitorlist', finder).css('height', $('.monitorlist .list', finder).height() );
	}
	function _stickMenu() {
		cateMenuY = $('.menu .category', finder).offset().top
					+ $('.menu .category', finder).height()
					+ parseInt($('.menu .category', finder).css('margin-bottom'))
		var thres = -(!!main.isHeaderLayout('pc')?72:0) + cateMenuY;
			//console.log(thres);
		$('html').toggleClass('prodfinder-menu-fixed',  main.getPageY() >= thres);
	}
	o.filter = function(term) {
		$('.monitorlist .item', finder).addClass('off').removeClass('show')
			.filter('[data-term~="' + term + '"]').removeClass('off').addClass('show');

		// update menu
		$('.menu .specs .btn', finder).filter('[data-term="'+ term +'"]').parent().addClass('on')
			.siblings('.on').removeClass('on');

		//_setListHeight();
		main.scrollTo(finder, {offset: -(finder.offset().top - cateMenuY)});
	}
	o.reset = function() {
		$('.monitorlist .item', finder).removeClass('off show');
		$('.menu .specs .item', finder).removeClass('on');
		//_setListHeight();
	}
	$(_init);
	return o;
})();

/*
$.fn.getSectionInview = function() {
	var dist = [],
		thres = main.getWinH()*.9,
		target;

	this.each(function(){
		dist.push({
			el:$(this),
			value:Math.abs($(this).offset().top - main.getPageY())
		});
	});
	dist.sort(function(a,b){
		if (a.value < b.value) return -1; if (a.value > b.value) return 1; return 0;
	});
	if(dist[0].value < thres) {
		target = dist[0].el;
	} else {
		target = null;
	}
	return target;
}*/


// --------------------------------------------
// Page content
// --------------------------------------------



// Parallax hero image
$(function(){
	var hero = $('.hero .parallax');
	if(!hero[0] || main.isMobile) return;

	var maskH = parseInt(hero.attr('data-maskH')),
		imgH =  parseInt(hero.attr('data-imgH'));

	hero.css('padding-top', (maskH/1920*100)+'%');

	main.scrollWith(function(){
		var sw = main.getWinW(), sh = main.getWinH(), dist, r, y;



		if(sw > 640 && maskH > 0 && imgH > 0 && maskH < imgH) {
			if(sw/sh>1) {
				dist = $('img', hero).height() - hero.outerHeight(),
				r = -hero.mid(imgH/maskH) - (maskH/imgH)*(sw/sh)/*image entrance point*/,
				y = Math.round(r*dist);
				$('img', hero).css('transform', 'translateY('+ y +'px)');
			}
			else {
				$('img', hero).css('transform', 'translateY('+ (maskH-imgH)*.3 +'px)');
			}
		}
		else {
			$('img', hero).css('transform', '');
		}
	});
});




/*
 * Graphic design
 */
$(function(){
	var p = $('.page-graphic');
	if(!p[0] || main.isMobile) return;

	var pic1 = $('.row1 .pic', p),
		txt1 = $('.row1 .text', p),
		pic2 = $('.row2 .pic', p),
		txt2 = $('.row2 .text', p),
		pic3 = $('.row4 .pic', p);

	main.scrollWith(function(){
		var sw = main.getWinW();
		if(sw > 1024) {
			pic1.css('transform', 'translateY('+ pic1.mid(1)*70 +'px)');
			pic1.css('opacity', pic1.mid(1)+1);
			txt2.css('transform', 'translateY('+ txt2.mid(1)*30 +'px)');

			txt1.css('transform', 'translateY('+ txt1.mid(1)*-40 +'px)');
			pic2.css('transform', 'translateY('+ pic2.mid(1)*-80 +'px)');
			pic2.css('opacity', 1-Math.max(0,pic2.mid(1)));
			pic3.css('transform', 'translateY('+ pic3.mid(1)*-70 +'px)');
			pic3.css('opacity', 1-Math.max(0,pic3.mid(1)));
		}
		else {
			pic1.css('transform', '');
			pic1.css('opacity', '');
			txt2.css('transform', '');
			txt1.css('transform', '');
			pic2.css('transform', '');
			pic2.css('opacity', '');
			pic3.css('transform', '');
			pic3.css('opacity', '');
		}
	});
});



/*
 * Photography
 */
$(function(){
	var p = $('.page-photography');
	if(!p[0] || main.isMobile) return;

	var pic1 = $('.row1 .pic', p),
		txt1 = $('.row1 .text', p),
		pic2 = $('.row3 .pic', p),
		txt2 = $('.row3 .text', p),
		pic3 = $('.row4 .pic', p),
		txt3 = $('.row4 .text', p);

	main.scrollWith(function(){
		var sw = main.getWinW();
		if(sw > 1024) {
			txt1.css('transform', 'translateY('+ txt1.mid(1)*-40 +'px)');
			pic1.css('transform', 'translateY('+ pic1.mid(1)*70 +'px)');
			pic1.css('opacity', pic1.mid(1)+1);
			txt2.css('transform', 'translateY('+ txt2.mid(1)*30 +'px)');
			pic2.css('transform', 'translateY('+ pic2.mid(1)*-80 +'px)');
			pic2.css('opacity', 1-Math.max(0,pic2.mid(1)));
			txt3.css('transform', 'translateY('+ txt3.mid(1)*-40 +'px)');
			pic3.css('transform', 'translateY('+ pic3.mid(1)*70 +'px)');
			pic3.css('opacity', 1-Math.max(0,pic3.mid(1)));
		}
		else {
			pic1.css('transform', '');
			pic1.css('opacity', '');
			txt1.css('transform', '');
			pic2.css('transform', '');
			pic2.css('opacity', '');
			txt2.css('transform', '');
			pic3.css('transform', '');
			pic3.css('opacity', '');
			txt3.css('transform', '');
		}
	});
});


/*
 * Video Production
 */
$(function(){
	var p = $('.page-video');
	if(!p[0] || main.isMobile) return;

	var pic1 = $('.row1 .pic', p),
		txt1 = $('.row1 .text', p),
		pic2 = $('.row2 .pic', p),
		txt2 = $('.row2 .text', p),
		txt3 = $('.row3 .text', p),
		displays = $('.displays', p);


	main.scrollWith(function(){
		var sw = main.getWinW();
		if(sw > 1024) {
			txt1.css('transform', 'translateY('+ txt1.mid(1)*-40 +'px)');
			pic1.css('transform', 'translateY('+ pic1.mid(1)*70 +'px)');
			pic1.css('opacity', pic1.mid(1)+1);
			txt2.css('transform', 'translateY('+ txt2.mid(1)*30 +'px)');
			pic2.css('transform', 'translateY('+ pic2.mid(1)*-80 +'px)');
			pic2.css('opacity', 1-Math.abs(pic2.mid(1)));
			txt3.css('transform', 'translateY('+ (txt3.mid(1)*100+50) +'px)');
			displays.css('transform', 'translateY('+ (displays.mid(1)*-100-50) +'px)');
			displays.css('opacity', 1-Math.abs(displays.mid(1)));
		}
		else {
			pic1.css('transform', '');
			pic1.css('opacity', '');
			txt1.css('transform', '');
			pic2.css('transform', '');
			pic2.css('opacity', '');
			txt2.css('transform', '');
			txt3.css('transform', '');
			displays.css('transform', '');
			displays.css('opacity', '');
		}
	});
});



/*
 * Experience - usability - quickfit
 */
$(function(){
	var list = $('#quickfitScreens'),
		menu = $('#quickfitMenu');
	if(!list[0] || !menu[0]) return;

	var index, total = $('.btn', menu).length;

	function _init() {
		//console.log( list, menu);
		menu.on('click', '.btn', function(){
			var id = $(this).index();
			slide(id);
		});

		// Support touch gesture
		var touchX;
		list.on('mousemove mousedown mouseup touchstart touchend touchmove', function(e){
			var x = e.originalEvent.clientX || ( e.originalEvent.touches[0]||{clientX:null}).clientX;
			switch(true) {
				case /touchstart|mousedown/.test(e.type): touchX = x; break;
				case /touchend|mouseup/.test(e.type): touchX = null; break;
				case /touchmove|mousemove/.test(e.type):
					clearTimeout(window.touchIntvId);
					window.touchIntvId = setTimeout(function(){ touchX = null; }, 18);
					if(!touchX) return true;
					if(touchX - x > 50) { next(); touchX = null; }
					else if(touchX - x < -50){ prev(); touchX = null; }
					break;
			}
		});
		$('img', list).on('dragstart', false);
		list.prev('.bg').on('dragstart', false);

		slide(0);
	}
	function slide(id) {
		if(id == index) return;

		var curr = $('.item', list).eq(id),
			last = $('.item.on', list);

		TweenMax.fromTo(curr, .7, {scale:1.2, autoAlpha:0}, {scale:1, autoAlpha:1, ease:Quart.easeOut});
		TweenMax.to(last, .6, {scale:.6, autoAlpha:0, ease:Quart.easeOut});

		list.removeClass('blink');
		TweenMax.delayedCall(.02, function(){
			list.addClass('blink');
		});

		curr.addClass('on').siblings('.item.on').removeClass('on');
		$('.btn', menu).eq(id).addClass('on').siblings('.btn.on').removeClass('on');

		index = id;
		//console.log('slide to', index);
	}
	function next() {
		if(index < total - 1) slide(index + 1);
		else slide(0);
	}
	function prev() {
		if(index > 0) slide(index - 1);
		else slide(total - 1);
	}
	_init();
});



/*
 * Experience - usability - splendidplus
 */
$(function(){
	var list = $('#splendidCompares'),
	  	menu = $('#splendidMenu');
	if(!list[0] || !menu[0]) return;

	var index, total = $('.btn', menu).length, anim = new TimelineMax();

	function _init() {
		//console.log( list, menu);
		menu.on('click', '.btn', function(){
			var id = $(this).index();
			slide(id);
		});

		// Support touch gesture
		var touchX;
		list.on('mousemove mousedown mouseup touchstart touchend touchmove', function(e){
			var x = e.originalEvent.clientX || ( e.originalEvent.touches[0]||{clientX:null}).clientX;
			switch(true) {
				case /touchstart|mousedown/.test(e.type): touchX = x; break;
				case /touchend|mouseup/.test(e.type): touchX = null; break;
				case /touchmove|mousemove/.test(e.type):
					clearTimeout(window.touchIntvId);
					window.touchIntvId = setTimeout(function(){ touchX = null; }, 18);
					if(!touchX) return true;
					if(touchX - x > 50) { next(); touchX = null; }
					else if(touchX - x < -50){ prev(); touchX = null; }
					break;
			}
		});
		$('img', list).on('dragstart', false);

		slide(0);
	}
	function slide(id) {
		if(id == index) return;
		if(anim.isActive()) return;

		var curr = $('.item', list).eq(id),
			last = $('.item.on', list);

		anim = new TimelineMax()
			.call(function(){
				last.css('z-index', 3);
				curr.css('z-index', 2);
			})
			.add([
				TweenMax.to($('.left',last),.35,{x:'-101%',ease:Quad.easeInOut}),
				TweenMax.to($('.right',last),.35,{x:'101%',ease:Quad.easeInOut}),
				TweenMax.fromTo(curr,.5,{autoAlpha:0},{autoAlpha:1,ease:Quad.easeOut})
			])
			.call(function(){
				curr.css('z-index', 3);
				last.css('z-index', 1);
				TweenMax.set($('.left, .right',last), {x:'0%'});
				TweenMax.set(last,{autoAlpha:0});
			});

		curr.addClass('on').siblings('.item.on').removeClass('on');
		$('.btn', menu).eq(id).addClass('on').siblings('.btn.on').removeClass('on');

		index = id;
		//console.log('slide to', index);
	}
	function next() {
		if(index < total - 1) slide(index + 1);
		else slide(0);
	}
	function prev() {
		if(index > 0) slide(index - 1);
		else slide(total - 1);
	}
	_init();
});



/*
 * Experience - eyecare - filter level
 */
$(function(){
	var list = $('#filterScreens'),
		menu = $('#filterMenu');
	if(!list[0] || !menu[0]) return;

	var index, total = $('.btn', menu).length;

	function _init() {
		//console.log( list, menu);
		menu.on('click', '.btn', function(){
			var id = $(this).index();
			slide(id);
		});

		// Support touch gesture
		var touchX;
		list.on('mousemove mousedown mouseup touchstart touchend touchmove', function(e){
			var x = e.originalEvent.clientX || ( e.originalEvent.touches[0]||{clientX:null}).clientX;
			switch(true) {
				case /touchstart|mousedown/.test(e.type): touchX = x; break;
				case /touchend|mouseup/.test(e.type): touchX = null; break;
				case /touchmove|mousemove/.test(e.type):
					clearTimeout(window.touchIntvId);
					window.touchIntvId = setTimeout(function(){ touchX = null; }, 18);
					if(!touchX) return true;
					if(touchX - x > 50) { next(); touchX = null; }
					else if(touchX - x < -50){ prev(); touchX = null; }
					break;
			}
		});
		$('img', list).on('dragstart', false);

		slide(0);
	}
	function slide(id) {
		if(id == index) return;

		var curr = $('.item', list).eq(id),
			last = $('.item.on', list);

		TweenMax.fromTo(curr, .5, {y:'-101%', scale:1, autoAlpha:0}, {y:'0%', scale:1, autoAlpha:1, ease:Quad.easeInOut});
		TweenMax.to(last, .5, {y:'101%', scale:.8, autoAlpha:0, ease:Quad.easeInOut, onComplete:function(){
		}});

		curr.addClass('on').siblings('.item.on').removeClass('on');
		$('.btn', menu).eq(id).addClass('on').siblings('.btn.on').removeClass('on');

		index = id;
		//console.log('slide to', index);
	}
	function next() {
		if(index < total - 1) slide(index + 1);
		else slide(0);
	}
	function prev() {
		if(index > 0) slide(index - 1);
		else slide(total - 1);
	}
	_init();
});


/*
 * Experience - resolution
 */
$(function(){
	var el = $('#uhdZoomer');
	if(!el[0]) return;

	// http://thdoan.github.io/magnify/
	$('.zoom', el).magnify({
		speed: 66,
		timeout: -1, //The wait period in ms before hiding the magnifying lens on touch devices. Set to -1 to disable.
		onload: function() {}
	});
})

/*
 * Experience - self-recalibration
 */
$(function(){
	var p = $('.page-calibration');
	if(!p[0]) return;

	$('.notice').click(function(){
		if($('.select_option').css('display') === "none"){
			$('.select_option').show();
		}
		else{
			$('.select_option').hide();
		}
	});
})

/*
 * Experience - contrast 20181016
 */
$(function(){
	var p = $('.page-contrast');
	if(!p[0]) return;
	$('.ba-slider').beforeAfter();
	var list = $('#enjoyHDR'),
			menu = $('#enjoyMenu');
	if(!list[0] || !menu[0]) return;

	var index, total = $('.btn', menu).length;

	function _init() {
		//console.log( list, menu);
		menu.on('click', '.btn', function(){
			var id = $(this).index();
			slide(id);
		});

		// Support touch gesture
		var touchX;
		list.on('mousemove mousedown mouseup touchstart touchend touchmove', function(e){
			var x = e.originalEvent.clientX || ( e.originalEvent.touches[0]||{clientX:null}).clientX;
			switch(true) {
				case /touchstart|mousedown/.test(e.type): touchX = x; break;
				case /touchend|mouseup/.test(e.type): touchX = null; break;
				case /touchmove|mousemove/.test(e.type):
					clearTimeout(window.touchIntvId);
					window.touchIntvId = setTimeout(function(){ touchX = null; }, 18);
					if(!touchX) return true;
					if(touchX - x > 50) { next(); touchX = null; }
					else if(touchX - x < -50){ prev(); touchX = null; }
					break;
			}
		});
		$('img', list).on('dragstart', false);

		slide(0);
	}
	function slide(id) {
		if(id == index) return;

		var curr = $('.item', list).eq(id),
				last = $('.item.on', list),
				txt = $('.enjoyText');

		switch(id){
			case 0:
				txt.html('<p>Enjoy HDR movies and videos with lifelike contrast, color and detail</p>');
			break;
			case 1:
			txt.html('<p>Experience more immersive and vivid details when playing HDR Games</p>');
			break;
			case 2:
			txt.html('<p>View realistic images with accurate color when creating videos or other graphical content</p>');
			break;
		}

		TweenMax.fromTo(curr, .5, {y:'-101%', scale:1, autoAlpha:0}, {y:'0%', scale:1, autoAlpha:1, ease:Quad.easeInOut});
		TweenMax.to(last, .5, {y:'101%', scale:.8, autoAlpha:0, ease:Quad.easeInOut, onComplete:function(){
		}});

		curr.addClass('on').siblings('.item.on').removeClass('on');
		$('.btn', menu).eq(id).addClass('on').siblings('.btn.on').removeClass('on');

		index = id;
		//console.log('slide to', index);
	}
	function next() {
		if(index < total - 1) slide(index + 1);
		else slide(0);
	}
	function prev() {
		if(index > 0) slide(index - 1);
		else slide(total - 1);
	}
	_init();


});
