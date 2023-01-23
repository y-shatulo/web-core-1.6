export let burgerMenu = document.querySelector('.container-burger');
export let buttonShowMenu = document.querySelector('.burger-menu');
export let mainPage = document.querySelector('.container-content');

buttonShowMenu.addEventListener('click', function () {
  burgerMenu.classList.remove('container-burger--hidden')
  burgerMenu.classList.add('.container-burger--absolute')
  mainPage.classList.add('.main-page--blur')
})
