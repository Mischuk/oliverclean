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