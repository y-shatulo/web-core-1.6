export let buttonShowAllType = document.querySelector('.show-all__button--type')
export let cardsHiddenType = document.querySelector('.type-catalog__list--hidden')
export let showAllIconType = document.querySelector('.show-all__icon--type')

buttonShowAllType.addEventListener('click', function () {
  cardsHiddenType.classList.toggle('type-catalog__list--hidden')

  if (cardsHiddenType.classList.contains('type-catalog__list--hidden')) {
    buttonShowAllType.textContent = 'Показать все'
    showAllIconType.classList.remove('show-all__icon--rotate')
  } else {
    buttonShowAllType.textContent = 'Скрыть'
    showAllIconType.classList.add('show-all__icon--rotate')
  }
})
