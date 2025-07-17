import Swiper from 'swiper';
import 'swiper/css/bundle';

const slidecraftLeftArrow = document.getElementById('slidecraftLeftArrow');
const slidecraftRightArrow = document.getElementById('slidecraftRightArrow');
const slidecraftText = document.querySelector('.slidecraft-controls-text');

let slidecraftSwiper;

slidecraftSwiper = new Swiper('.slidecraft-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 32,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 1,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.slidecraft-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateSlidecraftArrows(this);
      updateSlidecraftControlsText(this);
    },
  },
});

updateSlidecraftArrows(slidecraftSwiper);

function updateSlidecraftArrows(swiper) {
  slidecraftLeftArrow.disabled = swiper.isBeginning;
  slidecraftRightArrow.disabled = swiper.isEnd;
}

slidecraftLeftArrow.addEventListener('click', () => {
  slidecraftSwiper.slidePrev();
});

slidecraftRightArrow.addEventListener('click', () => {
  slidecraftSwiper.slideNext();
});

function updateSlidecraftControlsText(swiper) {
  const currentSlide = swiper.realIndex + 1;
  const totalSlides =
    swiper.slides.length - swiper.loopedSlides * 2 || swiper.slides.length;
  slidecraftText.textContent = `${currentSlide}/${totalSlides}`;
}
