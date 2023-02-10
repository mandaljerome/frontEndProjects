const joke = document.querySelector('.joke')
const jokeBtn = document.getElementById('jokeBtn')

const callJoke = () => {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            joke.innerHTML = data.joke
        })
}

jokeBtn.addEventListener('click', callJoke)
callJoke()
