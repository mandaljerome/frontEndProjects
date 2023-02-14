const tags = document.querySelector('.tags')
const textArea = document.querySelector('.textArea')

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    stringTrim(e.target.value)

    if (e.key === 'Enter') {
        e.target.value = ''
        callPicker()
    }
})

const stringTrim = (input) => {
    const inputed = input.split(',').filter((trim) => trim.trim() !== '')

    tags.innerHTML = ''

    inputed.forEach((element) => {
        const inputed = document.createElement('span')
        inputed.classList.add('tag')
        inputed.innerHTML = element
        tags.appendChild(inputed)
    })
}

const callPicker = () => {
    const interval = setInterval(() => {
        const num = getRamdomNumber()
        highlightTag(num)
        unHighlightTag(num)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            highlightTag(getRamdomNumber())
        }, 100)
    }, 100 * 50)
}

const getRamdomNumber = () => {
    const tags = document.querySelectorAll('.tag')
    return Math.floor(Math.random() * tags.length)
}

const highlightTag = (para) => {
    const selected = document.querySelectorAll('.tag')[para]
    selected.classList.add('highlighted')
    return selected
}

const unHighlightTag = (para) => {
    const selected = document.querySelectorAll('.tag')[para]

    setTimeout(() => {
        selected.classList.remove('highlighted')
    }, 20)
}
