$(function () {
    'use strict';
    $(document).scroll(function () {
     if ($(document).scrollTop() > 20) {
            $(".navbar").addClass("custom-nav");
            $(".navbar .lan").addClass("black");
            $(".navbar .lan a").css({"color": "#000"});
            $("#ar-click").removeClass("ar-click");
     }
     else {
        $(".navbar").removeClass("custom-nav");
        $(".navbar .lan").removeClass("black");
        $(".navbar .lan a").css({"color": "#fff"});
        $("#ar-click").addClass("ar-click");
    }
    });
    $(document).scroll(function () {
        if ($(document).scrollTop() > 20) {
            $(".menu a").removeClass("active"); 
            $("#home").addClass("active");  }
    });

    $(document).scroll(function () {
        if ($(this).scrollTop() >= $('.moree').offset().top - 200) {
            $(".menu a").removeClass("active"); 
            $("#moree").addClass("active");    }
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $('.gallery').offset().top - 200) {
            $(".menu a").removeClass("active"); 
            $("#Portfolio").addClass("active");    }
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $('.services').offset().top - 200) {
            $(".menu a").removeClass("active"); 
            $("#Services").addClass("active");    }
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $('.signup').offset().top - 200) {
            $(".menu a").removeClass("active"); 
            $("#Contact").addClass("active");    }
    });
    $("#home").on("click", function(){
        event.preventDefault();
        $("html, body").animate({scrollTop: $("body").offset().top});
            });
    $("#moree").on("click", function(){
        event.preventDefault();
$("html, body").animate({scrollTop: $(".moree").offset().top - 171});
    });
    $("#Portfolio").on("click", function(){
        event.preventDefault();
$("html, body").animate({scrollTop: $(".gallery").offset().top - 50});
    });
    $("#Services").on("click", function(){
        event.preventDefault();
$("html, body").animate({scrollTop: $(".services").offset().top - 50});
    });
    $("#Contact").on("click", function(){
        event.preventDefault();
$("html, body").animate({scrollTop: $(".signup").offset().top - 50});
    });


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
    // tabs
// get the click li  id and cache in myId varible
 $("#my-tabs li").on("click", function()
 {
var myID = $(this).attr("id");
// remove class inactive frome clicked li and add it to other li in the same UL
 $(this).removeClass("inactive").siblings().addClass("inactive");
 $(".tab").fadeOut();
 $("."+myID+"-content").fadeIn(700);
 // $(".the-tabs .ss").fadeOut(5000);
// hide all divs when click on the li


});

$("#my-tabs .all").on("click", function(){
    $(".tab").fadeIn();
});

        });
    
