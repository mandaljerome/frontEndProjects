const line = document.querySelector('.line-container')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circles')

let counter = 1

next.addEventListener('click', () => {
  counter++

  if (counter > circles.length) {
    counter = circles.length
  }
  updateDOM()
})

prev.addEventListener('click', () => {
  counter--

  updateDOM()
})

const updateDOM = () => {
  circles.forEach((element, index) => {
    if (index < counter) {
      element.classList.add('active')
    } else {
      element.classList.remove('active')
    }
  })

  if (counter == 1) {
    prev.disabled = true
  } else if (counter == circles.length) {
    next.disabled = true
    prev.disabled = false
  } else {
    prev.disabled = false
    next.disabled = false
  }

  line.style.width = ((counter - 1) / (circles.length - 1)) * 100 + '%'
}
