// JS взят с https://swiperjs.com/

const swiper = new Swiper('.swiper', {
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
  