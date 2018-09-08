$(function () {
    'use strict';

    // animate prog while scroll
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y = $('#skills').offset().top) {
            $(".moree .skills .progresss ul li .prog_bar .percent").removeClass("prog_width");
        }

    });
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
    $("#theme-click").on("click", function(){
        $(this).toggleClass("theme-click-1");
        $(".theme-click .i2").toggleClass("i22");
        $(".themes-menu").toggleClass("themes-1");
        
    });
  
    $(".themes-menu .list div").on("click", function () {       
        $(".themes-menu").removeClass("themes-1");
        $("#theme-click").removeClass("theme-click-1");
        $(".theme-click .i2").removeClass("i22");
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
 
    }); 
        });
    
