const swiper = new Swiper('.project__swiper', {
  loop: true,
  spaceBetween: 48,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3.5,
    }
  },
});