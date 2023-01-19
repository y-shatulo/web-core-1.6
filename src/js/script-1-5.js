export let buttonShowAll = document.querySelector('.show-all__button')
export let cardsHidden = document.querySelector('.brand-catalog__list--hidden')

buttonShowAll.addEventListener('click', function () {
  cardsHidden.classList.toggle('brand-catalog__list--hidden')

  if (cardsHidden.classList.contains('brand-catalog__list--hidden')) {
    buttonShowAll.textContent = 'Показать все'
  } else {
    buttonShowAll.textContent = 'Скрыть'
  }
})

export let slider = document.querySelector('.swiper')
export let mySwiper

export function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile === 'false') {
    mySwiper = new Swiper(slider, {
      spaceBetween: 16,
      slidesPerView: 'auto',

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    slider.dataset.mobile = 'true'
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false'
    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy()
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider()
})
