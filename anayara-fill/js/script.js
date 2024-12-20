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
      this.tabActivation();
      this.jarallaxAactivation();
    },

    // Start Swiper Activation
    swiperActivation: function () {

      // Start Hero Slider
      $(document).ready(function () {
        var interleaveOffset = 0.5;
        var swiper = new Swiper(".an__hero-slider", {
          slidePreview: 1,
          loop: true,
          speed: 1000,
          parallax: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          watchSlidesProgress: true,
          pagination: {
            el: ".swiper-pagination-hero",
            clickable: true,
          },
        });
      });
      // End Hero Slider

      // Start Gallery Slider
      $(document).ready(function () {
        var interleaveOffset = 0.5;
        var swiper = new Swiper(".tab-content-img", {
          slidePreview: 1,
          loop: true,
          speed: 1000,
          parallax: true,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
          watchSlidesProgress: true,
        });
      });
      // End Gallery Slider

    },
    // End Swiper Activation
    

    // Start Jarallax Activation
    jarallaxAactivation: function () {
      $(document).ready(function () {
        $('.jarallax').jarallax({
          speed: 0.4,
        });
      });
    },
    // End Jarallax Activation

    // Start Tab Activation
    tabActivation: function () {
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabContents = document.querySelectorAll('.tab-content');
      const tabButtonsContainer = document.querySelector('.tab-buttons');

      tabButtons.forEach(button => {
        button.addEventListener('click', function () {
          const tab = this.getAttribute('data-tab');

          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          this.classList.add('active');
          document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');

          document.querySelector('.tab-contents').scrollTo({ top: 0, behavior: 'smooth' });
        });
      });

      tabButtons[0].classList.add('active');
      tabContents[0].classList.add('active');
    },
    // End Tab Activation

    // Start Header Sticky
    headerSticky: function () {
      $(document).ready(function () {
        $(window).on("scroll", function () {
          var ScrollBarPostion = $(window).scrollTop();
          if (ScrollBarPostion > 100) {
            $(".header-bottom").addClass("an__header-sticky");
          } else {
            $(".header-bottom").removeClass("an__header-sticky");
          }
        })
      })
    },
    // End Header Sticky

    // Start Mobile Menu Activation
    mobileMenuActivation: function () {
      $(document).ready(function () {
        $('.an__header-mobile-bar').click(function (e) {
          var rect = e.target.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;

          $('.an__overlay').css({
            '--x': x + 'px',
            '--y': y + 'px'
          }).addClass('an__animating');

          setTimeout(function () {
            $('.an__mobile-menu, .an__overlay').addClass('an__active');
            animateNavItems();
          }, 50);

          setTimeout(function () {
            $('.an__overlay').removeClass('an__animating');
          }, 500);
        });

        $('.an__close-btn, .an__overlay').click(function () {
          $('.an__mobile-menu, .an__overlay').removeClass('an__active');
        });

        $('.an__toggle-btn').click(function (e) {
          e.preventDefault();

          // Close all other submenus
          $('.an__submenu').not($(this).closest('.an__nav-item').find('.an__submenu')).slideUp().removeClass('an__active');
          $('.an__toggle-btn').not(this).removeClass('an__active');

          // Toggle current submenu
          $(this).toggleClass('an__active');
          var $submenu = $(this).closest('.an__nav-item').find('.an__submenu');
          $submenu.slideToggle(function () {
            if ($submenu.is(':visible')) {
              $submenu.addClass('an__active');
              animateSubmenuItems($submenu);
            } else {
              $submenu.removeClass('an__active');
            }
          });
        });

        function animateNavItems() {
          $('.an__nav-item').each(function (index) {
            $(this).css({
              'animation': `fadeInRight 0.3s ease forwards ${index * 0.1}s`,
              'opacity': '0'
            });
          });
        }

        function animateSubmenuItems($submenu) {
          $submenu.find('.an__submenu-item').each(function (index) {
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
    wowActivation: function () {
      $(document).ready(function () {
        new WOW().init();
      });
    },
    // End Wow Activation


  };
  // Start Video Popup 
  const videoThumbnail = document.getElementById('videoThumbnail');
  const videoEmbed = document.getElementById('videoEmbed');
  
  // Add event listener for thumbnail click
  videoThumbnail.addEventListener('click', () => {
    // Hide the thumbnail
    videoThumbnail.style.display = 'none';
  
    // Show the embedded video
    videoEmbed.style.display = 'block';
  });
  
  // End Video Popup

  // Start Accordion Box and Image Popup
  document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const firstItem = accordionItems[0];
    
    // Open the first item by default
    firstItem.classList.add('active');
    firstItem.querySelector('.accordion-content').classList.add('active');

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            
            // Close all items except the clicked one
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').classList.remove('active');
                }
            });

            // Toggle the clicked item
            item.classList.toggle('active');
            content.classList.toggle('active');
        });

        // Add keyboard support
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});





// Modal functionality
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalClose = modal.querySelector('.modal-close');

document.querySelectorAll('.image-container, .an__location-item ').forEach(container => {
    container.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent accordion toggle
        const img = this.querySelector('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modal.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});
  // End Accordion Box and Image Popup

  anJs.m();
})(jQuery, window);
