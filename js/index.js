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
const moreBtns = document.querySelectorAll('.menu__slider-slide .btn-more')

const createMenuModal = (title) => {
    const overlayEl = document.createElement('div')
    overlayEl.classList.add('menu-overlay')
    const modalEl = document.createElement('div')
    modalEl.classList.add('menu-modal')
    overlayEl.append(modalEl)
    const modalTitle = document.createElement('h3')
    modalTitle.classList.add('menu__slider-title')
    modalTitle.textContent = title + ':'
    modalEl.append(modalTitle)
    const modalContent = document.createElement('ul')
    modalContent.classList.add('menu-list')
    modalContent.innerHTML = `
        <li class="menu-list__item">
            Ingridient 1
        </li>
        <li class="menu-list__item">
            Ingridient 2
        </li>
        <li class="menu-list__item">
            Ingridient 3
        </li>
    <div>Price: 100$</div>
    `
    modalEl.append(modalContent)
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('menu-close-btn')
    closeBtn.textContent = 'X'
    modalContent.append(closeBtn)
    document.body.append(overlayEl)
    stopScroll()

    overlayEl.addEventListener('click', (evt) => {
        const target = evt.target
        closeMenuModal(overlayEl, target)
    })
}

const stopScroll = () => {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.cssText = `
        height: 100vh;
        overflow-y: hidden;
        padding-right: ${scrollWidth}px;
    `
}

const startScroll = () => {
    document.body.style.cssText = `
        height: ;
        overflow-y: ;
        padding-right: ;
    `
}

const closeMenuModal = (overlayEl, target) => {
    if (target.classList.contains('menu-overlay')
        || target.classList.contains('menu-close-btn')
    ) {
        overlayEl.style.display = 'none'
        overlayEl.removeEventListener('click', closeMenuModal)
        startScroll()
    }
}

moreBtns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        const target = evt.target
        const card = target.closest('.menu__slider-slide')
        const title = card.querySelector('.menu__slider-title').textContent
        createMenuModal(title)
    })
})
const benefitsMoreBtns = document.querySelectorAll('.btn-more--benefits')
const benefitsOvelays = document.querySelectorAll('.benefits__more-info-overlay')

benefitsMoreBtns.forEach(btn => {
    btn.addEventListener('click', evt => {
        const target = evt.target
        const benefitsItem = target.closest('.benefits__item')
        const overlay = benefitsItem.querySelector('.benefits__more-info-overlay')
        overlay.style.display = 'block'
        stopScroll()
    })
})

benefitsOvelays.forEach(overlay => {
    overlay.addEventListener('click', (evt) => {
        const target = evt.target

        if (target.classList.contains('benefits__more-info-overlay') ||
            target.classList.contains('benefits__close-btn')
        ) {
            overlay.style.display = ''
            startScroll()
        }
    })
})
const URL = 'https://jsonplaceholder.typicode.com/posts'
const getStartBtn = document.querySelector('#getStartBtn')
const getStartFormOverlay = document.querySelector('.personal__overlay')
const getStartForm = document.querySelector('.personal-form')

const getData = ({name, age, weight, target, phone} = data) => {
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
            name,
            age,
            weight,
            target,
            phone,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    .then((response) => response.json())
    .then((json) => succesMsg(json))
    .catch(() => errorMsg())
}

const succesMsg = ({name, age, weight, target, phone} = data) => {
    const msgOverlay = document.createElement('div')
    msgOverlay.classList.add('successMsg-overlay')
    const msgEl = document.createElement('div')
    msgEl.classList.add('success-msg')
    msgEl.textContent = `Ваша заявка принята, скоро с Вами свяжется наш оператор`
    msgOverlay.append(msgEl)
    document.body.append(msgOverlay)

    setTimeout(() => {
        msgOverlay.style.display = 'none'
    }, 2000)
}

const errorMsg = () => {
    const msgOverlay = document.createElement('div')
    msgOverlay.classList.add('errorMsg-overlay')
    const msgEl = document.createElement('div')
    msgEl.classList.add('error-msg')
    msgEl.textContent = `Что-то пошло не так, поробуйте позже`
    msgOverlay.append(msgEl)
    document.body.append(msgOverlay)

    setTimeout(() => {
        msgOverlay.style.color = 'none'
    }, 2000)
}

const validationForm = () => {
    const labels = document.querySelectorAll('.personal-form__error-label')
    const formElements = []
    const flags = []

    for (let item of getStartForm.elements) {
        if (item.value) formElements.push(item)
    }

    formElements.forEach((item, index) => {
        if (item.value.length < 2) {
            labels[index].classList.add('personal-form__error-label--active')
        } else {
            labels[index].classList.remove('personal-form__error-label--active')
            flags.push(true)
        }
    })
    if (flags.length === formElements.length) return true
}
validationForm()

getStartBtn.addEventListener('click', () => {
    stopScroll()
    getStartFormOverlay.style.display = 'block'
})

getStartFormOverlay.addEventListener('click', evt => {
    const target = evt.target

    if (target.classList.contains('personal__overlay') ||
        target.classList.contains('personal-form__btn-close')
    ) {
        getStartFormOverlay.style.display = ''
        startScroll()
        getStartForm.reset()
    }
})

getStartForm.addEventListener('submit', evt => {
    evt.preventDefault()
    if (validationForm()) {
        const name = getStartForm.elements.name.value
        const age = getStartForm.elements.age.value
        const weight = getStartForm.elements.weight.value
        const target = getStartForm.elements.target.value
        const phone = getStartForm.elements.phone.value

        const data = {
            name, age, weight, target, phone,
        }

        getData(data)
        getStartFormOverlay.style.display = ''
        startScroll()
        // getStartForm.reset()
    }
})