const swiper = new Swiper('.party-slide', {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 1,



  // If we need pagination
  pagination: {
    el: '.party-slide_pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.party-slide_button__next',
    prevEl: '.party-slide_button__prev',
  },
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1166: {
      slidesPerView: 3,
    },
  }

});