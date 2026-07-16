const swiper = new Swiper(".galeriaSwiper", {
  loop: true,
  speed: 800,
  centeredSlides: true,
  slidesPerView: 4,
  spaceBetween: 35,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

document
  .querySelector(".galeria-next")
  .addEventListener("click", () => swiper.slideNext());

document
  .querySelector(".galeria-prev")
  .addEventListener("click", () => swiper.slidePrev());
