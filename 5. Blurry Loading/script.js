const image = document.querySelector('.loading-container')
const counter = document.querySelector('.counter')

let count = 0

const timer = setInterval(() => {
    count++
    if (count > 99) {
        clearInterval(timer)
    }
    counter.innerHTML = `${count}%`
    image.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`
    counter.style.opacity = `${scale(count, 0, 100, 1, 0)}`
}, 30)

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
