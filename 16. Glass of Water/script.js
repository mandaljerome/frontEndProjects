const cups = document.querySelectorAll('.small-cup')
const remained = document.querySelector('.remained')
const remmainedContainer = document.querySelector('.remained-container')
const percentage = document.querySelector('.percentage')

cups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        cupChecker(idx)
    })
})

const cupChecker = (idx) => {
    const per = percentage.innerHTML.slice(0, 2)

    if (
        cups[idx].classList.contains('full') &&
        !cups[idx].nextElementSibling.classList.contains('full')
    ) {
        cups[idx].classList.remove('full')
    } else {
        cups.forEach((cup, idx2) => {
            if (idx >= idx2) {
                cup.classList.add('full')
            } else {
                cup.classList.remove('full')
            }
        })
    }
    updateCup(idx)
}

const updateCup = (idx) => {
    const percent = ((idx + 1) / cups.length) * 100
    percentage.innerHTML = `${percent}%`
    percentage.style.height = `${percent}%`
    remained.innerHTML = `${2 - ((idx + 1) / 8) * 2} L`

    if (percent === 100) {
        remmainedContainer.style.height = 0
    } else {
        remmainedContainer.style.height = `${100}%`
    }
}
