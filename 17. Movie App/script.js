const URL_DATA =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=08ca6a44b59a1274b62739ef31950742'
const URL_Search = 'https://api.themoviedb.org/3/search/movie?api_key=08ca6a44b59a1274b62739ef31950742&query="'

const imagePath = 'https://image.tmdb.org/t/p/w500'
const main = document.querySelector('.main')
const form = document.querySelector('.form')
const search = document.querySelector('.search')



form.addEventListener('submit', (e) => {
    e.preventDefault()
   
    const searchValue = search.value

    if(searchValue && searchValue !== '') {
    apiData(URL_Search + searchValue)
    search.value = ''
    } else {
        window.location.reload()
    }
})

const apiData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    showMovies(data.results)
}

const showMovies = (movies) => {
    main.innerHTML = ''

    movies.forEach((movie) => {

        const { title, poster_path, vote_average, overview} = movie
        const movieCard = document.createElement('div')
        movieCard.classList.add('card')
        movieCard.innerHTML = `
        <img
        src="${imagePath + poster_path}"
        alt=""
        />
        <div class="info">
            <h3>${title}</h3>
            <span class="${ratingColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            ${overview}
        </div>
        `
        main.appendChild(movieCard)
    })
}

const ratingColor = (rating) => {
    if(rating >= 8) {
        return 'green'
    } else if(rating >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


apiData(URL_DATA)