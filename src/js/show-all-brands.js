export let buttonShowAll = document.querySelector('.show-all__button--brands')
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
