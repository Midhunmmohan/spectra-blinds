
var windowOutWidth = $(window).outerWidth();
if(windowOutWidth > 767){

    var homeScrollController = new ScrollMagic.Controller();

    
    
    var s1 = new ScrollMagic.Scene({ 
        triggerElement: "#teamsSection",   
        triggerHook: 1,
    });


    s1.on("start", function (event) {
    
        setTimeout(function() {
            $('#teamsSection h1').textillate({ in: { 
                effect: 'fadeInRight',
                delayScale: .4,
            }});
        }, 3400);
    });

    // -------
    var s2 = new ScrollMagic.Scene({ 
        triggerElement: "#perfectSection",   
        triggerHook: 4,
    });

    s2.on("start", function (event) {

        setTimeout(function() {
            $('#perfectSection h4').textillate({ in: { 
                effect: 'fadeInRight',
                delayScale: .4,
            }});
        }, 5400);
    
    });

// -------
    var s3 = new ScrollMagic.Scene({ 
        triggerElement: "#ourSpeakSection",   
        triggerHook: 4,
    });

    s3.on("start", function (event) {
        setTimeout(function() {
            $('#ourSpeakSection h1').textillate({ in: { 
                effect: 'fadeInRight',
                delayScale: .4,
            }});
        }, 7500);

    });

    // -------
    var s4 = new ScrollMagic.Scene({ 
        triggerElement: "#technology",   
        triggerHook: 4,
    });

    s4.on("start", function (event) {
        $('#technology h1').textillate({ in: { 
            effect: 'fadeInRight',
            delayScale: .4,
        }});
    });
    // ------------

    var s6 = new ScrollMagic.Scene({ 
        triggerElement: "footer",   
        triggerHook: 4,
    });

    var s61 = $("footer h2");

    s6.on("start", function (event) {
        $('footer h2').textillate({ in: { 
            effect: 'fadeInRight',
            delayScale: .4,
        }});
    });

    var s7 = new ScrollMagic.Scene({
        triggerElement: "#perfectSection",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 100, // move trigger to center of element
    })
    .setClassToggle("#trigger1, #trigger2, .centered", "visible") // add class to reveal

    var s8 = new ScrollMagic.Scene({
        triggerElement: "#teamsSection",
        triggerHook: 0.5, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50, // move trigger to center of element
    })
    .setClassToggle(".img-fluid1, .img-fluid2", "visible") // add class to reveal

    var s9 = new ScrollMagic.Scene({
        triggerElement: "#productOne",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 100, // move trigger to center of element
    })
    .setClassToggle("#productOne", "visible") // add class to reveal

    var s10 = new ScrollMagic.Scene({
        triggerElement: "#productTwo",
        triggerHook: 0.5, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50, // move trigger to center of element
    })
    .setClassToggle("#productTwo", "visible") // add class to reveal

    var s11 = new ScrollMagic.Scene({
        triggerElement: "#productThree",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 100, // move trigger to center of element
    })
    .setClassToggle("#productThree", "visible") // add class to reveal

    var s12 = new ScrollMagic.Scene({
        triggerElement: "#productFour",
        triggerHook: 0.5, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50, // move trigger to center of element
    })
    .setClassToggle("#productFour", "visible") // add class to reveal

    homeScrollController.addScene(s1);
    homeScrollController.addScene(s2);
    homeScrollController.addScene(s3);
    homeScrollController.addScene(s4);
    homeScrollController.addScene(s6);
    homeScrollController.addScene(s7);
    homeScrollController.addScene(s8);
    homeScrollController.addScene(s9);
    homeScrollController.addScene(s10);
    homeScrollController.addScene(s11);
    homeScrollController.addScene(s12);

}

$('#main-menu').smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8
});

$(document).ready(function(){
    $('body').on('scroll', function() {
        var navHeight = $( window ).height() - 605;
            
            if ($('body').scrollTop() > navHeight) {
                $('.header').addClass('fixed');
                console.log('yes')
            }else {
                $('.header').removeClass('fixed');
                console.log('as')
            }
        });
}); 

function pageHt() {
    var getHt = $(window).height();
    $('.owl-carousel').css("height", getHt);
    $('.owl-carousel .item').css("min-height", getHt);
    $('.inner-page').css("height", getHt - 300);
}

pageHt(); 

$(window).on('load', function() {
    (function($) {
        handlePreloader ();
        
    })(jQuery);
});

function handlePreloader() {
    if($('.loader-wrap').length){
        $('.loader-wrap').delay(1000).fadeOut(750);
    }
    TweenMax.to($(".loader-wrap .overlay"), 2.2, {
        force3D: true,
        left: "100%",
        ease: Expo.easeInOut,
    });
}

if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function(){
        $('.loader-wrap').delay(200).fadeOut(500);
    })
}

$('.fadeOut').owlCarousel({
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: true,
    slideSpeed: 3000,
    loop: true,
    margin: 10,
});

var swiper1 = new Swiper(".our-works-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
       delay: 3000,
     },
    speed: 700,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: "true"
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

var swiper2 = new Swiper(".our-technology-swiper", {
    autoplay: {
       delay: 4000,
     },
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: "true"
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});




