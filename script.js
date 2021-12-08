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

const commetBox = document.querySelector('.js-comments')
let html = ''

const addHtml = (name, email, body) => {
    html = html + `
    <div class="comment>
        <h4 class="name"> Vārds:${name}<h4/>
        <span class="email"> E-pasts:${email}<span/>
        <p class="text">${body}<p/>
    <div/>
    `
}
const getComments = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const comments = await data.json()
    
    comments.forEach((comment) => {
        const {name, email, body} = comment
        addHtml (name, email, body)

        
    });

    commentBox.innerHTML = html

}

getComments()

const form = document.querySelector('.js-form')

form.addEventListener('submit', (e) => {
    e.preventDefault

    const name = document.querySelector('.js-form-text').value
    const email = document.querySelector('.js-form-email').value
    const body = document.querySelector('.js-form-body').value

    addHtml (name, email, body)
    commentBox.innerHTML = html
})


