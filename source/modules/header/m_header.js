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

