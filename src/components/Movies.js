import { useEffect, useState } from 'react'
import MovieItem from './MovieItem'

function Movies({ URL }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setMovies(json))
      .catch((error) => setError(error))
  }, [URL])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      {movies.Search && movies.Search.length ? (
        <div className="movies">
          {movies.Search.map((movie) => {
            return <MovieItem key={movie.imdbID} {...movie} />
          })}
        </div>
      ) : (
        <div className="EmptyList">Не найдено!</div>
      )}
    </>
  )
}

export default Movies
