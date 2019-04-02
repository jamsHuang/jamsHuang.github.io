(function($, window, document, undefined){
	$.fn.lightBox = function(options){
 		var settings = $.extend({
			width : '66%',
			title : 'null',
			content: 'false',
			image : 'false',
			image_caption : 'false',
			ajax : 'null',
			ajax_id : 'null',
			close_button: 'default',//null
			bg_overlay_opacity: 'default',
			bg_overlay_color:'default',
			restrict_bg_click: 'false',
			video_url: 'null',
			video_width: '100%',
			video_height: '400px',
			embed_class: 'null',
			type: ''
			
		},options);
		return this.each(function(){
			var cur_lt = $(this).parentsUntil("lightbox"),
			win_wid = $(window).width(),			
			set_wid = parseFloat(settings.width),
			target_text = $(this).html();
				if(settings.type == 'video'){
					$("body").append("<div class='lightbox col12 col-md-12 col-sm-12 nopadding videoSegment'><div class='lightbox-cover col12 col-md-12 col-sm-12 nopadding'><div class='lightbox-content'><div class='col7 col-md-8 lightbox-inner nopadding'><div class='lightbox-body'></div></div></div></div></div>");
					$(".lightbox-inner").prepend("<a class='close'></a>");	
				}else{
					$("body").append("<div class='lightbox col12 col-md-12 col-sm-12 nopadding'><div class='lightbox-cover col12 col-md-12 col-sm-12 nopadding'><div class='lightbox-content'><div class='col8 col-md-8 col-sm-12 lightbox-inner nopadding'><div class='lightbox-body'></div></div></div></div></div>");
					$(".lightbox-inner").prepend("<a class='close'></a>");
				}
				$(this).open_action();
				function responsive_img(){
					var win_wid = $(window).width(),
					win_ht = $(window).height();
					if(win_wid < 768 || set_wid > win_wid){
						if(settings.video_url != 'null'){
							cur_lt.find('.lightbox-inner').css({'width':'100%'});
							cur_lt.find('.lightBox-video-frame iframe').css({'width':'100%','height':win_ht/2});	
							
							LimelightPlayer.doPlay()
						}else{
							//cur_lt.find('.lightbox-inner').css({'width':'100%'});
							$windowHeight = $(window).height() - 20
							cur_lt.find('.lightbox-body').css({'max-height':$windowHeight});
							cur_lt.find('.lightbox-inner').css('height',$(window).height());
						}						
					}else{//cur_lt.find('.lightbox-inner').css({'width':settings.width});
					cur_lt.find('.lightbox-inner').css('height','auto');
					}					
				}responsive_img();
				$(window).resize(function() {responsive_img();});
				if(settings.content != 'false'){
					cur_lt.find('.lightbox-body').append(target_text);
				}
				if(settings.close_button != 'null' && settings.close_button != 'default'){					
					cur_lt.find('.close').empty().append("<img class='close_img' src='/sim/citipriority/views/images/close-wt.png' />");
				}else if(settings.close_button == 'default'){
					cur_lt.find('.close').empty().append("x");
				}else{
					cur_lt.find('.close').remove();
				}
				if(settings.bg_overlay_opacity != 'default'){
					$('.lightbox-overlay.on').css({'opacity':settings.bg_overlay_opacity});
				}
				if(settings.bg_overlay_color != 'default'){
					$('.lightbox-overlay').css({'background-color':settings.bg_overlay_color});
				}				
				if(settings.title != 'null'){
					cur_lt.find('.lightbox-title').remove();
					cur_lt.find('.lightbox-inner').prepend("<div class='lightbox-title'><h3>"+settings.title+"</h3></div>");
				}
				if(settings.image != 'false'){
					var target_img = $(this).find('img').attr('src');					
					cur_lt.find('.lightbox-body').append("<img class='lightBox-image' src="+target_img+" />").addClass('lightBox-image-cover');
				}
				if(settings.image_caption != 'false'){
					var target_img_cap = $(this).find('.caption').text();
					cur_lt.find('.lightbox-body').append("<p class='image-caption'>"+target_img_cap+"</p>");
				}
				if(settings.ajax != 'null' && settings.ajax_id != 'null'){
					cur_lt.find('.lightbox-body').load(settings.ajax);
					setTimeout(function(){
						cur_lt.find('.lightbox-body').wrapInner("<div id='"+settings.ajax_id+"'></div>");
					},10);	
				}
				if(settings.restrict_bg_click == 'true'){
					cur_lt.find('.lightbox-inner').attr('data-close','true');
					cur_lt.find('.lightbox').addClass('data-close');
				}
				if(settings.video_url != 'null'){
					cur_lt.find('.lightbox-body').append("<iframe width="+settings.video_width+" height="+settings.video_height+" src="+settings.video_url+" frameborder='0' allowfullscreen></iframe>").addClass('lightBox-video-frame');
					responsive_img();
				}
				if(settings.embed_class != 'null'){					
					var embed_vid = $("body").find("."+settings.embed_class+"").html();
					cur_lt.find('.lightbox-body').append(embed_vid);
					responsive_img();
				}
		});	
	};
 	$.fn.close = function() {
		$('.lightbox').remove();
		$('.lightbox-overlay').fadeOut('fast');
		$("body").removeClass('lightbox-open');
		setTimeout(function(){
			$('.lightbox-overlay').remove();
		},500);	
	};
	$.fn.open_action = function() {
		$("html").append("<div class='lightbox-overlay on'></div>");
		$("body").addClass('lightbox-open');		
	};	
}(jQuery, window, document));
$(document).ready(function(){
	$('body').on('click touchstart',function(e){
		var get_class = $(e.target).attr('class');
		if($('.lightbox-inner').attr('data-close')=="true"){
			if((get_class == 'close')||(get_class == 'close_img')){$('.lightbox-inner').close();}
		}else{
			if((get_class == 'close')||(get_class == 'lightbox')||(get_class == 'lightbox-content')||(get_class == 'close_img')){$('.lightbox-inner').close();}
		}
	});
	$(document).on('keydown',function(evt) {					
		if (evt.keyCode == 27) {
			if($('.lightbox-inner').attr('data-close')=="true"){				
			}else{
				$('.lightbox-inner').close();
			}
		}
	});
	
});


