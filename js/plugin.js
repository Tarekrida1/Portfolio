$(function () {
    'use strict';

    $("html").niceScroll({
        cursorcolor: "#fff",
        cursorwidth: "10px",
        cursorborderradius: "5px",
        cursorborder: "1px solid #000",
        zindex: "999999999",

    });
    /*    change bg nav and animate on scroll */
    $(document).scroll(function () {
        if ($(document).scrollTop() > 20) {
            $(".navbar").addClass("custom-nav");
            $(".navbar .click").css({ "border-color": "#000" });
            $(".navbar .click span").css({ "background": "#000" });
            $(".navbar .menu a").css({ "color": "#000" });
            $(".navbar .logo .lan").css({ "opacity": "1" });
            $("#brand").removeClass("brand");
        }
        else {
            $(".navbar").removeClass("custom-nav");
            $(".navbar .click").css({ "border-color": "#fff" });
            $(".navbar .click span").css({ "background": "#fff" });
            $(".navbar .menu a").css({ "color": "#fff" });
            $(".navbar .logo .lan").css({ "opacity": "0" });
            $("#brand").addClass("brand");
        }
    });
    $(document).scroll(function () {
        if ($(document).scrollTop() > 20) {
            $(".menu a").removeClass("active");
            $("#home").addClass("active");
        }
    });

    $(document).scroll(function () {
        if ($(this).scrollTop() >= $('.moree').offset().top - 200) {
            $(".menu a").removeClass("active");
            $("#moree").addClass("active");
        }
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $('.gallery').offset().top - 200) {
            $(".menu a").removeClass("active");
            $("#Portfolio").addClass("active");
        }
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $('.services').offset().top - 200) {
            $(".menu a").removeClass("active");
            $("#Services").addClass("active");
        }
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $('.signup').offset().top - 200) {
            $(".menu a").removeClass("active");
            $("#Contact").addClass("active");
        }
    });
    /*    end change bg nav and animate on scroll */
    $("#home").on("click", function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("body").offset().top });
    });
    $("#moree").on("click", function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(".moree").offset().top - 171 });
    });
    $("#Portfolio").on("click", function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(".gallery").offset().top - 50 });
    });
    $("#Services").on("click", function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(".services").offset().top });
    });
    $("#Contact").on("click", function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(".signup").offset().top - 50 });
    });

    $(document).on('scroll', function () {
        var skills = $('#skills').position().top,
            gallery = $('.gallery').position().top;
        if ($(this).scrollTop() >= skills) {
            $(".moree .skills .progresss ul li .prog_bar .percent").removeClass("prog_width");
        }

        if ($(this).scrollTop() >= gallery) {
            $(".moree .skills .progresss ul li .prog_bar .percent").addClass("prog_width");

        }
    })
    console.log(skills);
    // animate prog while scroll 

    // inputs 
    $(".first-name input").on("focusout", function () {
        if ($(this).val() != "") {
            $(".first-name label").addClass("has-data");
        } else {
            $(".first-name label").removeClass("has-data");
        }
    });
    $(".last-name input").on("focusout", function () {
        if ($(this).val() != "") {
            $(".last-name label").addClass("has-data");
        } else {
            $(".last-name label").removeClass("has-data");
        }
    });
    $(".email input").on("focusout", function () {
        if ($(this).val() != "") {
            $(".email label").addClass("has-data");
        } else {
            $(".email label").removeClass("has-data");
        }
    });
    $(".phone input[type=number]").on("focusout", function () {
        if ($(this).val() != "") {
            $(".phone label").addClass("has-data");
        } else {
            $(".phone label").removeClass("has-data");
        }
    });
    $(".password input").on("focusout", function () {
        if ($(this).val() != "") {
            $(".password label").addClass("has-data");
        } else {
            $(".password label").removeClass("has-data");
        }
    });
    $(".repassword input").on("focusout", function () {
        if ($(this).val() != "") {
            $(".repassword label").addClass("has-data");
        } else {
            $(".repassword label").removeClass("has-data");
        }
    });
    $("#theme-click").on("click", function () {
        $(this).toggleClass("theme-click-1");
        $(".theme-click .i2").toggleClass("i22");
        $(".themes-menu").toggleClass("themes-1");

    });

    $(".themes-menu .list div").on("click", function () {
        $(".themes-menu").removeClass("themes-1");
        $("#theme-click").removeClass("theme-click-1");
        $(".theme-click .i2").removeClass("i22");
        $("body").attr("data-default-color", $(this).data("color"));

    });

    $("#dark").on("click", function () {
        $("body").attr("data-dark", "dark");
        $("body").css({ "background": "#000" });
        $(".themes-menu").removeClass("themes-1");
        $("#theme-click").removeClass("theme-click-1");
        $(".theme-click .i2").removeClass("i22");
    });
    $("#light").on("click", function () {
        $("body").removeAttr("data-dark", "dark");
        $("body").css({ "background": "#fff" });
        $(".themes-menu").removeClass("themes-1");
        $("#theme-click").removeClass("theme-click-1");
        $(".theme-click .i2").removeClass("i22");
    });


});
