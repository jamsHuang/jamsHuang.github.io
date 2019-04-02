var controller = null,
    scene = null,
    sceneSpreadCircle = null,
    sceneCircle = null,
    sceneLastCircle = null,
    scenebottom = null,
    sceneCaret = null,
    
    menuBarH = 0,
    bannerH = 0,
    sceneOffset = 0;

var createDestoryScrollMagicViaResize = function(windowWidth) {
    console.log('windowWidth : ', windowWidth);
    
    menuBarH = $('section.menuBar').height();
    bannerH = $('section.pageBanner').height();
    sceneOffset = menuBarH + bannerH + 40;
    
    if (windowWidth < 480) {
//    if (getMobileOperatingSystem()) {
        
        if(controller == null) {
            createScrollMagic();
        }
    } else {
        
        if(controller) {
            controller.enabled(false);
            controller = controller.destroy(true);
            controller = null;
        }
        
        $('#citigoldhomeImg1').css({'opacity': '1'});
    }
    
    if(controller) {
        console.log('controller.enabled()', controller.enabled());
    }
}

var createScrollMagic = function () {
    console.log('createScrollMagic');
    
    $('#citigoldhomeImg1').css({'opacity': '0'});
    
    // init controller
    controller = new ScrollMagic.Controller(); //{container: "#content-wrapper"}
    
    /* ************************************************************************ */
    
    scene = new ScrollMagic.Scene({
            duration: 800,
            offset: sceneOffset
        })
        .setPin('#content-wrapper')
        //.addIndicators()
        .addTo(controller);
    
    var tweenBottom = TweenMax.to('#citigoldhomeImg1', 100, {
        opacity: 1,
        ease: Circ.easeIn
    });
    
    scenebottom = new ScrollMagic.Scene({
        duration: 260,
        offset: sceneOffset + 760
    })
    .setTween(tweenBottom)
    //.addIndicators()
    .addTo(controller);
    
    
    /* ************************************************************************ */
    
    var tweenSpreadCircle = new TimelineMax();
    
    tweenSpreadCircle.to('#circle0', 100, { top: 0 })
    tweenSpreadCircle.to('#circle1', 100, { top: 50 }, '-100');
    tweenSpreadCircle.to('#circle2', 100, { top: 100 }, '-100');
    tweenSpreadCircle.to('#circle3', 100, { top: 150 }, '-100');
    
    sceneSpreadCircle = new ScrollMagic.Scene({ 
        duration: 360, 
        offset: sceneOffset - 200, //400                      
    })
    .setTween(tweenSpreadCircle)
    //.addIndicators()
    .addTo(controller);
    
    /* ************************************************************************ */
    
    var tweenCircle = new TimelineMax();
    
    
    for (var i = 0; i < 4; i++) {
        
        var elementName = '#circle'+i;
        
        var c0_fadeout;
        
        var c0 = TweenMax.to(elementName, 1, { 
            'z-index': 99,     
        });
        var c0_fadein = TweenMax.to(elementName + ' .mobileOpacityContainer', 150, { 
            opacity: 1,
            ease: Back.easeOut
            //ease: Circ.easeInOut
        });
        var c0_bgfadein = TweenMax.to(elementName, 150, { 
            scale: 1.2,
            ease: Back.easeOut
        });

        var c0_b = TweenMax.to(elementName, 1, { 
            'z-index': 50,
            delay: 150
        });
        
        
        if (i  === 3) {
            c0_fadeout = TweenMax.to(elementName + ' .mobileOpacityContainer', 150, { 
                opacity: 0.2,
                ease: Circ.easeInOut,
                delay: 150
            });
        } else {
            c0_fadeout = TweenMax.to(elementName + ' .mobileOpacityContainer', 50, { 
                opacity: 0.2,
                ease: Circ.easeInOut,
                delay: 150
            });
        }
        
        var c0_bgfadeout = TweenMax.to(elementName, 50, { 
            scale: 1,
            ease: Circ.easeInOut,
            delay: 150
        });

        tweenCircle.add(
            [c0, c0_fadein, c0_bgfadein, c0_b, c0_fadeout, c0_bgfadeout]
        );
    }
    
    sceneCircle = new ScrollMagic.Scene({ 
        duration: 900, 
        offset: sceneOffset + 140
    })
    .setTween(tweenCircle)
    //.addIndicators()
    .addTo(controller);
    
    var tweenCaret = TweenMax.to('#caretHolder', 100, {
        opacity: 0,
        ease: Sine.easeIn
    });
    
    
    sceneCaret = new ScrollMagic.Scene({
        duration: 140,
        offset: sceneOffset + 760
    })
    .setTween(tweenCaret)
    //.addIndicators()
    .addTo(controller);
}

$(window).on("load resize", function(){
    createDestoryScrollMagicViaResize(window.innerWidth);
});

