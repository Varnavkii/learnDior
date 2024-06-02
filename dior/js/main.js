// JS взят с https://swiperjs.com/

const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    //direction: 'vertical',
    effect: 'fade',
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
  
    /* If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    */
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    /* And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    */
  });
  

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });