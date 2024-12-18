(function ($, window) {
  "use strict";
  var anJs = {
    m: function () {
      anJs.d();
      anJs.methods();
    },
    d: function () {
      this._window = $(window);
      this._document = $(document);
      this._body = $("body");
      this._html = $("html");
    },
    methods: function () {
      this.inlineCssActivation();
      this.mobileMenuActivation();
      this.wowActivation();
      this.headerSticky();
      this.swiperActivation();
      this.videoPopup();
    },
    
    // Start Swiper Activation
    swiperActivation: function (){

      // Start Hero Slider
      $(document).ready(function(){
        var interleaveOffset = 0.5;
        var swiper = new Swiper(".an__hero-slider", {
          slidePreview:1,
          loop: true,
          speed: 1000,
          parallax: true,
          // autoplay: {
          //     delay: 3000,
          //     disableOnInteraction: false,
          // },
          // watchSlidesProgress: true,
          pagination: {
            el: ".swiper-pagination-hero",
            clickable: true,
          },
        });
      });
      // End Hero Slider

    },
    // End Swiper Activation

    // Start Video Popup 
    videoPopup: function (){
      $(document).ready(function(){
        $('.an__popup-video').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      });
    },
    // End Video Popup

    // Start Header Sticky
    headerSticky: function (){
      $(document).ready(function (){
        $(window).on("scroll", function() {
          var ScrollBarPostion = $(window).scrollTop();
          if (ScrollBarPostion > 100) {
            $(".an__header-area-home-01").addClass("an__header-sticky");
          } else {
            $(".an__header-area-home-01").removeClass("an__header-sticky");
          }
        })
      })
    },
    // End Header Sticky

    // Start Mobile Menu Activation
    mobileMenuActivation: function () {
      $(document).ready(function() {
        $('.an__header-mobile-bar').click(function(e) {
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            
            $('.an__overlay').css({
                '--x': x + 'px',
                '--y': y + 'px'
            }).addClass('an__animating');

            setTimeout(function() {
                $('.an__mobile-menu, .an__overlay').addClass('an__active');
                animateNavItems();
            }, 50);

            setTimeout(function() {
                $('.an__overlay').removeClass('an__animating');
            }, 500);
        });

        $('.an__close-btn, .an__overlay').click(function() {
            $('.an__mobile-menu, .an__overlay').removeClass('an__active');
        });

        $('.an__toggle-btn').click(function(e) {
            e.preventDefault();
            
            // Close all other submenus
            $('.an__submenu').not($(this).closest('.an__nav-item').find('.an__submenu')).slideUp().removeClass('an__active');
            $('.an__toggle-btn').not(this).removeClass('an__active');
            
            // Toggle current submenu
            $(this).toggleClass('an__active');
            var $submenu = $(this).closest('.an__nav-item').find('.an__submenu');
            $submenu.slideToggle(function() {
                if ($submenu.is(':visible')) {
                    $submenu.addClass('an__active');
                    animateSubmenuItems($submenu);
                } else {
                    $submenu.removeClass('an__active');
                }
            });
        });

        function animateNavItems() {
            $('.an__nav-item').each(function(index) {
                $(this).css({
                    'animation': `fadeInRight 0.3s ease forwards ${index * 0.1}s`,
                    'opacity': '0'
                });
            });
        }

        function animateSubmenuItems($submenu) {
            $submenu.find('.an__submenu-item').each(function(index) {
                $(this).css({
                    'animation': `fadeInDown 0.3s ease forwards ${index * 0.1}s`,
                    'opacity': '0'
                });
            });
        }
    });
    },
    // End Mobile Menu Activation

    // Start Inline Css Activation
    inlineCssActivation: function () {
      $(document).ready(function () {
        $("[data-background]").each(function () {
          $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
          );
        });
      });
    },
    // End Inline Css Activation

    // Start Wow Activation
    wowActivation: function (){
      $(document).ready(function (){
        new WOW().init();
      });
    },
    // End Wow Activation


  };

  anJs.m();
})(jQuery, window);
