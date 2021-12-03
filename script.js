let images = document.querySelectorAll('.slider__image')
let next = document.querySelector('.slider__next')
let prev = document.querySelector('.slider__prev')
let activeIndex = 0

next.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if (activeIndex === images.length - 1) {
        activeIndex = 0
    } else {
        activeIndex = activeIndex + 1
    }

     images[activeIndex].classList.add('active')
})

prev.addEventListener('click', () =>{
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if (activeIndex === 0) {
         activeIndex = images.length - 1
    } else {
        activeIndex = activeIndex - 1
    }

    images[activeIndex].classList.add('active')
})

/*images = document.querySelectorAll('.js-image')
next = document.querySelector('.js-next')
prev = document.querySelector('.js-prev')

next.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if (activeIndex === images.length - 1) {
        activeIndex = 0
    } else {
        activeIndex = activeIndex + 1
    }

     images[activeIndex].classList.add('active')
})

prev.addEventListener('click', () =>{
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if (activeIndex === 0) {
         activeIndex = images.length - 1
    } else {
        activeIndex = activeIndex - 1
    }

    images[activeIndex].classList.add('active')
})*/
