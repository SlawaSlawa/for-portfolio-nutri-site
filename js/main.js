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



// header__nav--active
// burger--active
console.log('script2');
console.log('script3!');