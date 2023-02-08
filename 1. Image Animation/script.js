const panels = document.querySelectorAll('.panels')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass()
    panel.classList.add('active')
  })
})

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
