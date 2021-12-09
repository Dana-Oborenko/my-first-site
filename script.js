const images = document.querySelectorAll('.slider__image')
const dots = document.querySelectorAll('.slider__dot')
const next = document.querySelector('.slider__next')
const prev = document.querySelector('.slider__prev')
let activeIndex = 0

dots.forEach(function (dot, i) {
    dot.addEventListener('click', () => {
        images.forEach((image) => {
            image.classList.remove('active')
        })
        dots.forEach((dot) => {
            dot.classList.remove('active')
        })

        activeIndex = i
        
        images[activeIndex].classList.add('active')
        dots[activeIndex].classList.add('active')
    })
})

next.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })
    dots.forEach((dot) => {
        dot.classList.remove('active')
    })

    if (activeIndex === images.length - 1) {
        activeIndex = 0
    } else {
        activeIndex = activeIndex + 1
    }
    
    images[activeIndex].classList.add('active')
    dots[activeIndex].classList.add('active')
})

prev.addEventListener('click', () =>{
    images.forEach((image) => {
        image.classList.remove('active')
    })
    dots.forEach((dot) => {
        dot.classList.remove('active')
    })

    if (activeIndex === 0) {
         activeIndex = images.length - 1
    } else {
        activeIndex = activeIndex - 1
    }

    images[activeIndex].classList.add('active')
    dots[activeIndex].classList.add('active')
})

const commentBox = document.querySelector('.js-comments')
let html = ''

const addHtml = (name, email, body) => {
    html = html +
    `<div class="comment">
        <h4 class="name">Vārds: ${name}</h4>
        <span class="email">E-pasts: ${email}</span>
        <p class="body">${body}</p>
    </div>`
}

const getComments = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const comments = await data.json()
    
    comments.forEach((comment) => {
        const {name, email, body} = comment
        addHtml(name, email, body)
    })

    commentBox.innerHTML = html
}

getComments()

const form = document.querySelector('.js-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const name = document.querySelector('.js-form-text')
    const email = document.querySelector('.js-form-email')
    const body = document.querySelector('.js-form-body')

    if (name.value === '') {
        alert('Lūdzu, ievadiet savu vārdu!')
        return
    }
    if (email.value === '') {
        alert('Lūdzu, ievadiet savu e-pastu!')
        return
    }
    if (body.value === '') {
        alert('Lūdzu, ievadiet sava komentāra tekstu!')
        return
    }

    addHtml(name.value, email.value, body.value.trim())
    commentBox.innerHTML = html

    name.value = ''
    email.value = ''
    body.value = ''
})

const toTopButton = document.querySelector('#go-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTopButton.style.display = 'block'
    } else {
        toTopButton.style.display = 'none'
    }
}

toTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})