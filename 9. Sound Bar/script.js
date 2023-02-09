const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound) => {
    const btn = document.createElement('button')
    btn.innerText = sound
    document.body.appendChild(btn)
    btn.classList.add('btn')

    btn.addEventListener('click', () => {
        stopSound()
        document.getElementById(sound).play()
    })
})

const stopSound = () => {
    sounds.forEach((sound) => {
        document.getElementById(sound).pause()
        sound.currentTime = 0
    })
}
