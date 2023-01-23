export let buttonShowAllText = document.querySelector('.show-all__button--text')
export let cardsHiddenText = document.querySelector('.text-show')
export let showAllIconText = document.querySelector('.show-all__icon--text')

buttonShowAllText.addEventListener('click', function () {
  cardsHiddenText.classList.toggle('text--hidden')

  if (cardsHiddenText.classList.contains('text--hidden')) {
    buttonShowAllText.textContent = 'Читать далее'
    showAllIconText.classList.remove('show-all__icon--rotate')
  } else {
    buttonShowAllText.textContent = 'Скрыть'
    showAllIconText.classList.add('show-all__icon--rotate')
  }
})
