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
console.log('script3!');