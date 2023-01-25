import Swiper, { Pagination } from 'swiper';


const sliders = document.querySelectorAll('.swiper');

sliders.forEach((el) => {
	  let swiper = new Swiper(el, {
        modules: [Pagination],
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
      },
	});
});



