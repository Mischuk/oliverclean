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


    //=include modules.js
});