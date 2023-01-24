import Swiper from "./swiper-bundle.js";

export let sliderType = document.querySelector('.swiper-type')
export let mySwiperType
export function mobileSliderType() {
  if (window.innerWidth <= 767 && sliderType.dataset.mobile === 'false') {
    mySwiperType = new Swiper(sliderType, {
      spaceBetween: 16,
      slidesPerView: 'auto',

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    sliderType.dataset.mobile = 'true'
  }

  if (window.innerWidth >= 768) {
    sliderType.dataset.mobile = 'false'
    if (sliderType.classList.contains('swiper-initialized')) {
      mySwiperType.destroy()
    }
  }
}

mobileSliderType()

window.addEventListener('resize', () => {
  mobileSliderType()
})
