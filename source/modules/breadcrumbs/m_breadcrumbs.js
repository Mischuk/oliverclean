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