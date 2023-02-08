const left = document.querySelector('.container.left')
const right = document.querySelector('.container.right')
const container = document.querySelector('.body-container')

left.addEventListener('mouseover', () => container.classList.add('left-hover'))
left.addEventListener('mouseleave', () => container.classList.remove('left-hover'))

right.addEventListener('mouseover', () => container.classList.add('right-hover'))
right.addEventListener('mouseleave', () => container.classList.remove('right-hover'))
