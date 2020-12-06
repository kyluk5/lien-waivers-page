const burgerBtn = document.querySelector('.header-burger')
const body = document.querySelector('body')
const navLink = document.querySelectorAll('.header-menu__item-link')
const navButtons = document.querySelectorAll('.header__nav-buttons-item')

burgerBtn.addEventListener('click', () => {
    body.classList.toggle('menu--open')
})

navLink.forEach(item => {
    item.addEventListener('click', () => {
        body.classList.remove('menu--open')
    })
})

navButtons.forEach(item => {
    item.addEventListener('click', () => {
        body.classList.remove('menu--open')
    })
})



// MODAl

let modalClose = document.querySelectorAll('.modal__close')
let modalOpen = document.querySelectorAll('.modal--opener')

modalOpen.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault()

        body.classList.add('modal--open')
    })
})

modalClose.forEach(item => {
    item.addEventListener('click', () => body.classList.remove('modal--open'))
})


