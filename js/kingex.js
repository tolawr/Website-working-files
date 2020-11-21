/*
  [JS Index]
  
  ---
  
  Template Name: Kingex - Creative Portfolio Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. slick slider
    2.1. slick fullscreen slideshow ZOOM/FADE
  3. fullPage
  4. YouTube player
  5. owl carousel slider
    5.1. owl graphic design and illustration carousel slider
  6. magnificPopup
  7. swiper slider
    7.1. swiper parallax slider
  8. toggle panels
  9. panels
    9.1. panels expand
	9.2. panels collapse
  10. forms
    10.1. newsletter form
    10.2. contact form
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
    });
	
    // 2. slick slider
    // 2.1. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 3. fullPage
    $("#fullpage").fullpage({
        anchors: ["home", "photosection", "videosection", "graphicdesign&illustrationsection", "contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "Photo", "Video", "Graphic Design & Illustration", "Contact"],
        responsiveWidth: 995,
        autoScrolling: true,
        scrollBar: false,
        afterLoad: function(anchorLink, index) {
            if (index == 5) {
                $('.scroll-indicator').addClass('scroll-indicator-OFF');
            } else {
                $('.scroll-indicator').removeClass('scroll-indicator-OFF');
            }
        },
        afterResponsive: function(isResponsive) {}
    });
	
    // 4. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 5. owl carousel slider
    // 5.1. owl graphic design and illustration carousel slider
    $("#illustration-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"]
    });

    $("#photo-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"]
    });

    $("#video-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"]
    });
	
    // 6. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
	
    // 7. swiper slider
    // 7.1. swiper parallax slider
    var swiper = new Swiper(".parallax .swiper-container", {
        autoplay: 3000,
        speed: 1600,
        parallax: true,
        mousewheelControl: false,
        keyboardControl: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true,
        autoplayDisableOnInteraction: false
    });
	
    // 8. toggle panels
    $(".c-btn-about, .c-btn-services, .c-btn-contact").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".about-more-launch, .services-more-launch, .contact-more-launch, .navigation-wrapper").on("click", function() {
        $(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").removeClass("open");
    });
	
    // 9. panels
    // 9.1. panels expand
    $("#open-newsletter").on("click", function() {
        $("#panel-newsletter").slideDown({
            duration: 600,
            easing: "easeInOutQuad"
        });
        $("#overlay").fadeIn({
            duration: 600,
            easing: "easeInOutQuad"
        });
    });
    // 9.2. panels collapse
    $("#overlay, .newsletter-closer").on("click", function() {
        $("#panel-newsletter").slideUp({
            duration: 600,
            easing: "easeInOutQuad"
        });
        $("#overlay").fadeOut(600, "easeInOutQuad", function() {});
    });
	
    // 10. forms
    // 10.1. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        $.post("subscribe.php");
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
    // 10.2. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
	
});