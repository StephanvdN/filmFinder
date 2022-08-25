const movieList = movies['Movies']

const addMoviesToDom = (films) => {
    const filmList = document.getElementById("film-posters")
    const arr = films.map(function (movie) {
        console.log(movie.imdbID)
        const movieWebpage = "https://www.imdb.com/title/" + movie.imdbID
        return "<li class='list-item'><a href=" + movieWebpage + "><img src=" + movie.Poster + " alt=''></a></li>"
    })

    arr.forEach(function (movie) {
        filmList.innerHTML += movie
    })
}

addMoviesToDom(movieList)


const addEventListeners = () => {
    const radioButtons = document.querySelectorAll("input[name='movie']")
    radioButtons.forEach(function (buttons) {
        buttons.addEventListener('change', function (e) {
            handleOnChangeEvent(e.target.value)
        })
    })
}


const filterMovies = (nameMovies) => {
    const result = movieList.filter(function (movie) {
        return movie.Title.includes(nameMovies)
    })
    removeLi();
    addMoviesToDom(result)
}

const filterLatestMovies = () => {
    const resultFilteredMovies = movieList.filter(function (movie) {
        return parseInt(movie.Year) >= 2014
    })
    removeLi();
    addMoviesToDom(resultFilteredMovies)
}

const removeLi = () => {
    const liItems = document.querySelectorAll(".list-item")
    liItems.forEach(item => item.remove())
}

addEventListeners()

const handleOnChangeEvent = (movieNames) => {
    switch (movieNames) {
        case 'newMovies':
            filterLatestMovies()
            break;
        case 'avenger':
            filterMovies("Avenger")
            break;
        case 'xmen':
            filterMovies("X-Men")
            break;
        case 'princess':
            filterMovies("Princess")
            break;
        case 'batman':
            filterMovies("Batman")
            break;
        default:
            console.log('werkt niet')
    }
}
