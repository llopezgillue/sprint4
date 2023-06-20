// Exercise 1: Get the array of all directors.
const getAllDirectors = (array) => directors = array.map(movie => movie.director)


// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (array, director) => array.filter(movie => movie.director === director)



// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const myDirector = getMoviesFromDirector(array, director)
  const score = myDirector.reduce((i, film) => i += film.score, 0)
  const directorMedia = Number(score / myDirector.length).toFixed(2)
  return Number(directorMedia)
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(movie => movie.title)
  titles.sort()
  return titles.slice(0, 20)
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedFilms = [...array].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  })
  return sortedFilms
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  const moviesByGenre = array.filter(movie => movie.genre.includes(genre) && movie.score)

  const averageByGenre = moviesByGenre.reduce((average, movie) => (average + movie.score || 0), 0)

  const averageFilm = averageByGenre / moviesByGenre.length || 1

  if (averageFilm === 7) {
    return averageFilm
  }
  return Number(averageFilm.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) {
  const result = array.map(movie => {
    let hours = 0;
    let minutes = 0;
    const hoursRegex = /(\d+)h/;
    const minutesRegex = /(\d+)min/;

    const hoursMatch = movie.duration.match(hoursRegex);
    if (hoursMatch) {
      hours = parseInt(hoursMatch[1]);
    }

    const minutesMatch = movie.duration.match(minutesRegex);
    if (minutesMatch) {
      minutes = parseInt(minutesMatch[1]);
    }

    const totalMinutes = hours * 60 + minutes;
    return {
      ...movie,
      duration: totalMinutes
    };
  });

  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const moviesOfYear = array.filter(movie => movie.year === year)
  moviesOfYear.sort((a, b) => b.score - a.score)
  return [moviesOfYear[0]]
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
