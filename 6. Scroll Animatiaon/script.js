const boxes = document.querySelectorAll('.box')



const showBoxes = () => {

    const height = window.innerHeight / 5 * 4

    boxes.forEach(box => {

        const boxHeight = box.getBoundingClientRect().top


        if(boxHeight < height) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    });

}

window.addEventListener('scroll', showBoxes)

showBoxes()