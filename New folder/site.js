let swiperCards = new Swiper('.card__content', {
  loop: true,
  grabCursor:true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
