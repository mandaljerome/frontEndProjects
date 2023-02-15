const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target')
    const increseValue = target / 100
    let count = 0

    const incrementData = () => {
        if (count < target) {
            count += increseValue
            counter.innerHTML = count

            setTimeout(incrementData, 20)
        }
    }

    incrementData()
})
