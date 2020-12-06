let elementArray = [
    document.querySelector('.section-construction__title'),
    document.querySelector('.section-construction__desc'),
    document.querySelector('.section-construction__grid'),
    document.querySelector('.features-section__title'),
    ...document.querySelectorAll('.features-section__item'),
    document.querySelector('.pricing-section'),
    document.querySelector('.pricing-section__title'),
    ...document.querySelectorAll('.pricing__card'),
    document.querySelector('.testimonials-section__list'),
    document.querySelector('.testimonials-section__title'),
    document.querySelector('.testimonials-section__partner-list'),
    document.querySelector('.change-section__picture'),
    document.querySelector('.change-section__title'),
    document.querySelector('.change-section__button'),
    document.querySelector('.footer'),
    // document.querySelector('.resources-section__title'),
    // document.querySelector('.resources-section__list'),
]

elementArray.forEach(item => setActiveState(item))

window.addEventListener('scroll', () => {
    elementArray.forEach(item => setActiveState(item))
})

function setActiveState(elem) {
    isInViewport(elem)
        ? elem.classList.add('animation-active')
        : ''
        // uncomment code below to remove active state from elements that not in portview
        // : elem.classList.remove('animation-active')
}

function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect()
    
    return (
        bounding.top >= -bounding.height &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight + (bounding.height) || document.documentElement.clientHeight + (bounding.height)) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}
