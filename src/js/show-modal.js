import { burgerMenu } from "./show-burger-menu"

export let modalFeedback = document.querySelector('.modal-feedback')
export let modalCall = document.querySelector('.modal-call')
export let mainPage = document.querySelector('.container-content')
export let burger = document.querySelector('.container-burger')
export let buttonChat = document.querySelector('.button-chat')
export let buttonCall = document.querySelector('.button-call')


buttonChat.addEventListener('click', function () {
  modalFeedback.classList.remove('modal--hidden')
  mainPage.classList.add('main-page--blur')
  burger.classList.add('main-page--blur')
})

buttonCall.addEventListener('click', function () {
  modalCall.classList.remove('modal--hidden')
  mainPage.classList.add('main-page--blur')
  burger.classList.add('main-page--blur')
})


export let buttonCloseModalFeedback = document.querySelector('.button-close--modal-feedback')
export let buttonCloseModalCall = document.querySelector('.button-close--modal-call')

buttonCloseModalFeedback.addEventListener('click', function () {
  modalFeedback.classList.add('modal--hidden')
  mainPage.classList.remove('main-page--blur')
  burger.classList.remove('main-page--blur')
})

buttonCloseModalCall.addEventListener('click', function () {
  modalCall.classList.add('modal--hidden')
  mainPage.classList.remove('main-page--blur')
  burger.classList.remove('main-page--blur')
})
