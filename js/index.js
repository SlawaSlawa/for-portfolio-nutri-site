const burgerBtn = document.querySelector('.burger')
const navMenu = document.querySelector('.header__nav')

burgerBtn.addEventListener('click', () => {
    if (burgerBtn.classList.contains('burger--active')) {
        burgerBtn.classList.remove('burger--active')
        navMenu.classList.remove('header__nav--active')
    } else {
        burgerBtn.classList.add('burger--active')
        navMenu.classList.add('header__nav--active')
    }
})
const menuSlider = new Swiper('.menu__slider', {
    spaceBetween: 100,
    navigation: {
        nextEl: '.menu__slider-btn--next',
        prevEl: '.menu__slider-btn--prev',
    },
    breakpoints: {
        992: {
            spaceBetween: 45
        },
        1620 : {
            spaceBetween: 100
        }
    }
});

const menuSliderMin = new Swiper('.menu__slider-min', {
    spaceBetween: 40,
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.menu__slider-btn--next',
        prevEl: '.menu__slider-btn--prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
    }
})
const anchors = document.querySelectorAll('.header__nav-link, .footer__link')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        navMenu.classList.remove('header__nav--active')
        burgerBtn.classList.remove('burger--active')
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
}
const menuItems  = document.querySelectorAll('.menu__slider .menu__item')
const menuItemsForMin  = document.querySelectorAll('.menu__slider-min .menu__item')
const menuBtns = document.querySelectorAll('.menu__item-btn')

menuItems.forEach((item) => {
    item.addEventListener('click', (evt) => {
        const target = evt.target
        const btnWrapper = target.closest('.menu__item')

        menuItems.forEach((item, index) => {
            item.classList.remove('menu__item--active')
            menuItemsForMin[index].classList.remove('menu__item--active') 
            if (item === btnWrapper) {
                btnWrapper.classList.add('menu__item--active')
                menuItemsForMin[index].classList.add('menu__item--active')
            }  
        })
    })
})

menuItemsForMin.forEach((item) => {
    item.addEventListener('click', (evt) => {
        const target = evt.target
        const btnWrapper = target.closest('.menu__item')

        menuItemsForMin.forEach((item, index) => {
            item.classList.remove('menu__item--active')
            menuItems[index].classList.remove('menu__item--active') 
            if (item === btnWrapper) {
                btnWrapper.classList.add('menu__item--active')
                menuItems[index].classList.add('menu__item--active')
            }  
        })
    })
})