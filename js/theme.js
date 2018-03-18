//  Theme Custom jquery file, 

      // Created on   : 22/08/2017. 
      // Theme        : SEO+ - SEO & Business HTML Template!.
      // Category     : SEO.
      // Author       : @Unifytheme.
      // Designed By  : @Unifytheme.
      // Developed By : @Unifytheme.


"use strict";


// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// WOW animation 
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       80,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
    }
  );
  wow.init();
  }
}



// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}



// Theme Search Box 
function searchBox () {
  var search = $("#search-button"),
      mainSearch = $("#searchWrapper"),
      close = $("#close-button");
  if(search.length) {
    search.on('click', function(){
      mainSearch.addClass('show-box');
    });
    close.on('click', function() {
      mainSearch.removeClass('show-box');
    });
  }
}



// SEO banner slider 
function BannerSlider () {
  var banner = $("#seo-main-banner");
  if (banner.length) {
    banner.revolution({
      sliderType:"standard",
      dottedOverlay:"none",
      loops:true,
      delay:7500,
      navigation: {
        keyboardNavigation:"off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation:"off",
        onHoverStop:"on",
        touch:{
          touchenabled:"on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
      },
      responsiveLevels:[2220,1183,975,751],
      gridwidth:[1170,970,770,480],
      gridheight:[615,615,600,600],
      lazyType:"none",
      parallax: {
        type:"mouse",
        origo:"slidercenter",
        speed:2000,
        levels:[2,3,4,5,6,7,12,16,10,50],
      },
      shadow:0,
      spinner:"off",
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,
      shuffle:"off",
      autoHeight:"off",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      disableProgressBar:"on",
      debugMode:false,
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });
  };
}


// SEO banner slider 
function BannerSliderTwo () {
  var banner = $("#seo-main-banner-two");
  if (banner.length) {
    banner.revolution({
      sliderType:"standard",
      dottedOverlay:"none",
      loops:true,
      delay:7500,
      navigation: {
        keyboardNavigation:"off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation:"off",
        onHoverStop:"on",
        touch:{
          touchenabled:"on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
      },
      responsiveLevels:[2220,1183,975,751],
      gridwidth:[1170,970,770,480],
      gridheight:[850,800,600,600],
      lazyType:"none",
      parallax: {
        type:"mouse",
        origo:"slidercenter",
        speed:2000,
        levels:[2,3,4,5,6,7,12,16,10,50],
      },
      shadow:0,
      spinner:"off",
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,
      shuffle:"off",
      autoHeight:"off",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      disableProgressBar:"on",
      debugMode:false,
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });
  };
}


// Main Menu Function 
function themeMenu () {
  var menu= $("#mega-menu-holder");
  if(menu.length) {
    menu.slimmenu({
      resizeWidth: '991',
      animSpeed:'medium',
      indentChildren: true,
    });
  }
}


// Fancybox 
function FancypopUp () {
  var popBox = $(".fancybox");
  if (popBox.length) {
      popBox.fancybox({
      openEffect  : 'elastic',
        closeEffect : 'elastic',
         helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.6)'
                }
            }
        }
    });
  };
}


// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
    timer.appear(function () {
      timer.countTo();
    })
  }
}


// SEO Client Slider
function seoClientSlider () {
  var cSlider = $ (".seo-client-slider");
  if(cSlider.length) {
     cSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:1200,
        lazyLoad:true,
        dragEndSpeed:1000,
        dotsSpeed:1200,
        responsive:{
          0:{
                items:1
            },
            700:{
                items:2
            },
            1200:{
                items:2
            }
        }
    })
  }
}


// Partner Logo Footer 
function partnersLogo () {
  var pSlider = $ ("#partner-logo");
  if(pSlider.length) {
     pSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:900,
        lazyLoad:true,
        dragEndSpeed:1000,
        responsive:{
            0:{
                items:2
            },
            700:{
                items:3
            },
            992:{
                items:4
            }
        }
    })
  }
}


// Doughnut Charts 
function doughnutChartBox () {
  if($('#doughnut-chartBox').length) {
   var ctx = $("#doughnut-chartBox");
     var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
            "65%",
            "35%",
        ],
        datasets: [
            {
                data: [65, 35],
                backgroundColor: [
                    "#ffc75a",
                    "#4e71d5",
                ],
                hoverBackgroundColor: [
                    "#ffc75a",
                    "#4e71d5",
                ],
                hoverBorderColor: [
                    "#fff",
                    "#fff",
                ]
            }]
    },
    option: {
       position:"right",
       responsive: true,
    }
  });
  };
}


// Doughnut Charts 
function doughnutChartBoxTwo () {
  if($('#doughnut-chartBoxTwo').length) {
   var ctx = $("#doughnut-chartBoxTwo");
     var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
            "55%",
            "45%",
        ],
        datasets: [
            {
                data: [55, 45],
                backgroundColor: [
                    "#25caad",
                    "#8e3ef0",
                ],
                hoverBackgroundColor: [
                    "#25caad",
                    "#8e3ef0",
                ],
                hoverBorderColor: [
                    "#fff",
                    "#fff",
                ]
            }]
    },
    option: {
       position:"right",
       responsive: true,
    }
  });
  };
}



// Scroll to top
function scrollToTop () {
  var scrollTop = $ (".scroll-top")
  if (scrollTop.length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        scrollTop.fadeIn();
      } else {
        scrollTop.fadeOut();
      }
    });
    
    //Click event to scroll to top
      scrollTop.on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  var activeform = $(".form-validation");
  if(activeform.length){
      activeform.validate({ // initialize the plugin
        rules: {
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          message: {
            required: true
          },
          phone: {
            required: true
          }
        },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeform.fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        activeform.fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


// Sticky header
function stickyHeader () {
  var sticky = $('.theme-main-menu'),
      scroll = $(window).scrollTop();

  if (sticky.length) {
    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}



// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");
          
    });
    
    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });

    $('.panel-heading a').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.stopPropagation();
        }
    });

  };
}

// Mixitup gallery
function mixitupGallery () {
  if ($("#mixitUp-item").length) {
    $("#mixitUp-item").mixItUp()
  };
}


// Related Product Slider
function productSlider () {
  var pSlider = $ (".related-product-slider");
  if(pSlider.length) {
      pSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        lazyLoad:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
  }
}


// Product Quantity
function productValue () {
  var inputVal = $("#product-value");
  if(inputVal.length) {
    $('#value-decrease').on('click', function() {
        inputVal.html(function(i, val) { return val*1-1 });
    });
    $('#value-increase').on('click', function() {
        inputVal.html(function(i, val) { return val*1+1 });
    });
  }
}

// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     searchBox ();
     BannerSlider ();
     BannerSliderTwo ();
     seoClientSlider () ;
     themeMenu ();
     wowAnimation ();
     FancypopUp ();
     CounterNumberChanger ();
     partnersLogo ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     themeAccrodion ();
     mixitupGallery ();
     productSlider ();
     productValue ();

        popoverTop();
        data_title();
  })(jQuery);
});


$(window).resize(function(){
    popoverTop();
    data_title();
});

// Window load function
jQuery(window).on('load', function () {
   (function ($) {
		  prealoader ();
      doughnutChartBox ();
      doughnutChartBoxTwo ();

  })(jQuery);
 });


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ();
  })(jQuery);
});


//弹出框
jQuery(document).ready(function($) {
    $('.instruction-button').click(function(){
        $('.instruction-popover-mask').fadeIn(100);
        $('.instruction-popover').slideDown(200);
    });

    $('.instruction-poptit .close').click(function(){
        $('.instruction-popover-mask').fadeOut(100);
        $('.instruction-popover').slideUp(200);
    })

});


//弹出框垂直居中
function popoverTop(){
    var window_height = $(window).height();
    var pop = $(".instruction-popover");
    var pop_height = pop.height();

    var pop_top = ( window_height - pop_height ) / 2;
     pop.css({"top":pop_top});

}


//资料库标题居中
function data_title(){
    var window_width = $(window).width();
    var data_title = $(".data-classification ul");
    var data_title_width = data_title.width();

    var data_title_left = ( window_width - data_title_width ) / 2;
    data_title.css({"margin-left":data_title_left});

}


//配送方式
$(".distribution2").click(function(){
    $(".address_li").css({"display":"inline-block"});
});

$(".distribution1").click(function(){
   $(".address_li").css({"display":"none"});
});



//表单验证
var notyf = new Notyf({delay:3000});
window.onload = function(){
    var check_phone = document.getElementById('phone-check');
    var check_address = document.getElementById('address-check');

    var myreg = /^1[3458]\d{9}$/;

    check_phone.onblur = function(){
        var inpVal = this.value;
        if (!myreg.exec(inpVal)){
//						notyf.confirm("请输入正确的手机号");
            notyf.alert("请输入正确的手机号");
        }
    };

    check_address.onblur = function(){
        if (this.value == ""){
            notyf.alert("请填写配送地址");
        }
    }

    $(".pay-button").click(function(){
        var inpVal = check_phone.value;
        if (!myreg.exec(inpVal) || check_address.value == "" || $(".totalPrice").text()<0.1){
            $(this).attr('disabled',"true");
            notyf.alert("请正确填写信息");
        }else{
            $(this).removeAttr("disabled");
        }
    })
}


/* 打印页面消息提示 */

$(".choose-distribution .distribution1 input").click(function(){
    notyf.confirm("配送方式您已选择自提，请填写手机号码");
});

$(".choose-distribution .distribution2 input").click(function(){
    notyf.confirm("配送方式您已选择配送，请填写手机号码和配送地址");
});


$(".upload-file").on("click",".choose-spec .single-double .single span",function(){
    notyf.confirm("您已选择单面打印");
});

//$(".upload-file").on("click",".choose-spec .single-double .single",function(){
//    notyf.confirm("您已选择双面打印");
//});

/* 资料库消息提示 */

$(".data-members").on("click",".single-member .member-info .data_icon_print",function(){
    notyf.confirm("所选资料已添加打印列表");
});
