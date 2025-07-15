import Swiper from 'swiper';
import 'swiper/css/bundle';

let testimonialsSwiper;

testimonialsSwiper = new Swiper('.testimonials-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 16,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 32,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.testimonials-swiper-container')
        .classList.add('show');
    },
  },
});
