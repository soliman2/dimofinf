$(function () {
    "use strict";

    //Moving Active class in Navbar Menu
    $(".navbar .menu-list>li:first-child").addClass("active");
    $(".navbar .menu-list>li").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    /*Start Custum Navbar Menu*/
    //=1=Dropdown Menu " About Us"
    $(".dropdown-menu").on('click', function () {
        $(".dropdown-list").slideToggle();
    });


    //Add Class is to Button Which Open menu in Mobile
    $(".button-menu-bg").on('click', function () {
        $(".button-menu").toggleClass("is");
        $("nav").slideToggle();

    });
    /*End Custum Navbar Menu*/

    //Fixed Navbar Menu
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $(".menu").addClass("fixed"), 1000;
        } else {
            $(".menu").removeClass("fixed");

        }

    });

    //Slider Of Haeder
    $('.header-slider').slick({
        dots: true,
        rtl: true,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

    });

    //Event Book Dropdown Menu
    $("#event-button").on('click', function () {
        $(".event-dropdown-list").slideToggle();
    });

    //Album Slider
    $('.album-slider').slick({
        rtl: true,
        dots: true,
        infinite: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3
                }
    }

  ]
    });

    //Cloud List Day Add Class Active
    $(".up-cloud .days-list li:first-child").addClass("active");
    $(".up-cloud .days-list li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".down-cloud .cloud-list li").addClass("active").siblings().removeClass("active");

        //Hid All Divs
        $(".weather .all-block > div").hide();
        //Show Div connected With This Link
        $($(this).data('class')).show();

    });

    //Stop defult links
    $('ul li a').on('click', function (e) {
        e.preventDefault();

    });

    // Attr For Background Image
    $("[data-src]").each(function () {
        var backgroundImage = $(this).attr("data-src");
        $(this).css("background-image", "url(" + backgroundImage + ")");
    });


    //Button Go to Top Hidden and Show
    $(window).scroll(function () {

        var buttonUp = $("#button-go-up");

        if ($(window).scrollTop() >= 400) {
            buttonUp.fadeIn(1000);
        } else {
            buttonUp.fadeOut(1000);

        }

    });

    //Button Click To Scroll to top
    $("#button-go-up").on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })

});
