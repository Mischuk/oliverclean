$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });


    /*! IE10 viewport hack for Surface/desktop Windows 8 bug */
    (function () {
      'use strict';
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
          document.createTextNode(
            '@-ms-viewport{width:auto!important}'
          )
        )
        document.querySelector('head').appendChild(msViewportStyle)
      }
    })();

    /*! Mask for form's input */
    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"X"});
    };
    inputMask();

    $('input[type=file]').on('change', function(){
      if ( !$(this).val() == '' ) {
        var filename = $('input[type=file]').val().split('\\').pop();
        $(this).parent().next('.upload-status').text(filename);
      } else {
        $(this).parent().next('.upload-status').text('Файлы не добавлены');
      }
    });

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });

    /* ONLY FOR TEST! */
    $('.m_form .submit, .m_hook .submit').on('click', function () {
      $('#succefulOpen').trigger('click');
      $('#jobSuccefulOpen').trigger('click');
      return false;
    });
    /* END ONLY FOR TEST! */


    function showAllBreadcrums() {


      $('.show-all-bc').on('click', function () {


        if ( $(this).hasClass('open') ) {


          $('.services-list').animate({height: '80px'}, 500);


          $('.show-all-bc').removeClass('open').text('Показать всё');


        } else {


          var el = $('.services-list'),


              curHeight = el.height(),


              autoHeight = el.css('height', 'auto').height();


          el.height(curHeight).animate({height: autoHeight}, 500);


          $('.show-all-bc').addClass('open').text('Скрыть');


    


        }


      });


    };


    showAllBreadcrums();


    


    function clientsCarousel() {


      $('.clients-carousel').slick({


        slidesToShow: 4,


        slidesToScroll: 4,


        appendArrows: '.clients-carousel-nav',


        responsive: [


          {


            breakpoint: 992,


            settings: {


              slidesToShow: 3,


              slidesToScroll: 3


            }


          },


          {


            breakpoint: 768,


            settings: {


              slidesToShow: 2,


              slidesToScroll: 2


            }


          },


          {


            breakpoint: 479,


            settings: {


              slidesToShow: 1,


              slidesToScroll: 1


            }


          },


        ]


      });


    };


    clientsCarousel();


    


    function mapsite() {


      $('.sitemap a').magnificPopup({


        type: 'inline',


        fixedContentPos: false,


        fixedBgPos: true,


        overflowY: 'auto',


        closeBtnInside: true,


        preloader: false,


        midClick: true,


        alignTop: true,


        removalDelay: 300,


        mainClass: 'my-mfp-slide-bottom',


        callbacks: {


          open: function() {


            $('.mobile-menu-trigger').addClass('open');


          },


          beforeClose: function() {


            $('.mobile-menu-trigger').removeClass('open');


          }


        }


      });


    };


    mapsite();


    


    function searchHeader() {


      $('.show-search').on('click', function(){


        $(this).next().show(0, function(){


          $(this).find('input[type="text"]').focus();


        });


      });


    


      $('.controls form input[type="text"]').on('blur', function () {


        $(this).parent().fadeOut(250)


      });


    };


    searchHeader();


    


    


    


    console.log('Layout generated');


    


    //Main 'Revolution' carousel


    jQuery('.tp-banner').revolution({


      delay:90000,


      startwidth:1170,


      startheight:600,


      hideThumbs:0,


      autoHeight: "on",


      // navigationType: "none",


      nexttobullets: "nexttobullets",


      hideTimerBar:"on",


      fullWidth:"on",


      forceFullWidth:"on"


      // navigationHAlign:"left",


      // navigationVAlign:"bottom",


      // soloArrowLeftHalign:"left",


      // soloArrowLeftValign:"bottom",


      // soloArrowRightHalign:"left",


      // soloArrowRightValign:"bottom",


    });


    // $('.tp-leftarrow, .tp-rightarrow, .carousel-calc').delay(3000).addClass('show');


    


    function popups() {


      $('.call-popup').magnificPopup({


        type: 'inline',


        fixedContentPos: false,


        fixedBgPos: true,


        overflowY: 'auto',


        closeBtnInside: true,


        preloader: false,


        midClick: true,


        removalDelay: 300,


        mainClass: 'my-mfp-zoom-in'


      });


    };


    popups();
});