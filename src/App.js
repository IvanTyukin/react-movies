import { useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import Search from './components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [url, setUrl] = useState({
    movieUrlInsert: 'Galaxy',
    movieTypeUrlInsert: 'All',
    moviePageUrlInsert: '1',
  })

  function searchMovies(movieUrlInsert) {
    setUrl({ ...url, movieUrlInsert })
  }

  function searchMoviesType(movieTypeUrlInsert) {
    setUrl({ ...url, movieTypeUrlInsert })
  }

  function changePage(moviePageUrlInsert) {
    setUrl({ ...url, moviePageUrlInsert })
  }

  let urlStr = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${url.movieUrlInsert}&page=${url.moviePageUrlInsert}&type=${url.movieTypeUrlInsert}`
  if (url.movieTypeUrlInsert === 'All') {
    urlStr = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${url.movieUrlInsert}&page=${url.moviePageUrlInsert}`
  }

  return (
    <div className="App">
      <header>ReactMovies.ru</header>
      <main>
        <Search
          searchMovies={searchMovies}
          searchMoviesType={searchMoviesType}
          changePage={changePage}
        />
        <Movies URL={urlStr} />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
