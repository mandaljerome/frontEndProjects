const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('.left-arrow')
const rightBtn = document.querySelector('.right-arrow')

let sliderCounter = 0

rightBtn.addEventListener('click', () => {
    if (sliderCounter < slides.length - 1) {
        sliderCounter++
        changeMainImage()
        changeBodyBackground()
    } else {
        sliderCounter = 0
        changeMainImage()
        changeBodyBackground()
    }
})

leftBtn.addEventListener('click', () => {
    if (sliderCounter > 0) {
        sliderCounter--
        changeMainImage()
        changeBodyBackground()
    } else {
        sliderCounter = slides.length - 1
        changeMainImage()
        changeBodyBackground()
    }
})

const changeBodyBackground = () => {
    body.style.backgroundImage = slides[sliderCounter].style.backgroundImage
}

const changeMainImage = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slides[sliderCounter].classList.add('active')
}

changeMainImage()
changeBodyBackground()
