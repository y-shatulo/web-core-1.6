export let buttonShowAll = document.querySelector('.show-all__button--brands')
export let cardsHidden = document.querySelector('.brand-catalog__list--hidden')
export let showAllIcon = document.querySelector('.show-all__icon--brands')

buttonShowAll.addEventListener('click', function () {
  cardsHidden.classList.toggle('brand-catalog__list--hidden')

  if (cardsHidden.classList.contains('brand-catalog__list--hidden')) {
    buttonShowAll.textContent = 'Показать все'
    showAllIcon.classList.remove('show-all__icon--rotate')
  } else {
    buttonShowAll.textContent = 'Скрыть'
    showAllIcon.classList.add('show-all__icon--rotate')

  }
})


