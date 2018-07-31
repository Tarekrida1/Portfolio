$(function () {
    'use strict';
    // tabs
    // get the click li  id and cache in myId varible
    $("#my-tabs li").click(function () {
        var myID = $(this).attr("id");
        $("#navi-toggle").prop("checked", false);
        $('.navigation__item').toggleClass("show-item");

        // remove class inactive frome clicked li and add it to other li in the same UL
        $(this).addClass("inactive").siblings().removeClass("inactive");
        $(".the-tabs .content").hide();
        // hide all divs when click on the li
        $("#" + myID + "-content").delay(500).fadeIn(1000);
    });
    $('.navigation__button').click(function () {
        $('.navigation__item').toggleClass("show-item");
    });

    /*
    <!------->
    <div class="fixed-nav" id="my-tabs">
      <ul>
        <li id="tab6"><a href="#"><i class="fa fa-comment"></i></a></li>
        <li id="tab5"><a href="#"><i class="fa fa-camera"></i></a></li>
        <li id="tab4"><a href="#"><i class="fa fa-eye"></i></a></li>
        <li id="tab3"><a href="#"><i class="fa fa-gift"></i></a></li>
        <li id="tab2"><a href="#"><i class="fa fa-user-circle"></i></a></li>
        <li  class="inactive"  id="tab1"><a href="#"><i class="fa fa-home"></i></a></li>
    
      </ul>
    </div>
    -->
    */
    // tabs
    // wellcome


    var typed3 = new Typed('#ppp', {
        strings: ['<span>Hello World!</span><br><span>My Name Is <span>TaReK</span></span><br><span>I’m a front-end developer</span><br>I have more than 3 years of experience in web Design based on webstandard technologies like HTML5, CSS, javascript, jquery, bootstrap and sass.'],
        typeSpeed: 20,
        loop: false
    });
    // wellcome
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

    /**clores*/

    $(".themes-overlay .themes ul li").click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        $(".themes-overlay").fadeOut();
        $("#tab1-content").delay(500).fadeIn(1000);
        $('#change-color').removeClass("inactive");
        $('#tab1').addClass("inactive");
    });


    $('.themes-overlay .themes button').click(function () {
        $('.themes-overlay').fadeOut();
    });
    $('.themes-overlay').click(function () {
        $('.themes-overlay').fadeOut();
    });
    $("#change-color").click(function () {
        $('.themes-overlay').fadeIn();
    });
  
    
  
        });
    
