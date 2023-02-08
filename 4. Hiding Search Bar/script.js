const search = document.querySelector('.search-container')
const btn = document.querySelector('.search')
const text = document.querySelector('.text')


btn.addEventListener('click', () => {
    search.classList.toggle('active')
    text.focus()
})