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