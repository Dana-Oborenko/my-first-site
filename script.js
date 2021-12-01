var images = document.querySelectorAll('.js-image')
const next = document.querySelector('.js-next')
const prev = document.querySelector('.js-prev')
let activeIndex = 0

next.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex === image.lenght - 1) {
        activeIndex = 0
    } else {
        activeIndex = activeIndex + 1
    }

     images[activeIndex].classList.add
})

prev.addEventListener('click', () =>{
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex === 0) {
         activeIndex = images.length - 1
    } else {
        activeIndex = activeIndex - 1
    }

    images[activeIndex].classList.add
})
