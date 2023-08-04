import { useState } from 'react'

function Search({ searchMovies, searchMoviesType, changePage }) {
  const [movieName, setMovieName] = useState('Galaxy')
  const [value, setValue] = useState('1')
  const [selVal, setSelVal] = useState('1')

  function changePageHandler(e) {
    setSelVal(e.target.value)
    changePage(e.target.value)
  }

  function changeHandler(event) {
    setValue(event.target.value)
    if (event.target.value === '1') {
      searchMoviesType('All')
    }
    if (event.target.value === '2') {
      searchMoviesType('movie')
    }
    if (event.target.value === '3') {
      searchMoviesType('series')
    }
  }

  return (
    <>
      <input
        type="search"
        placeholder="type movie name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            searchMovies(movieName)
          }
        }}
      />
      <button className="btn" onClick={() => searchMovies(movieName)}>
        search
      </button>
      <div className="radioInput">
        <span>
          <input
            type="radio"
            name="catigory"
            value="1"
            checked={value === '1' ? true : false}
            onChange={(event) => changeHandler(event)}
          />
          All
        </span>
        <span>
          <input
            type="radio"
            name="catigory"
            value="2"
            checked={value === '2' ? true : false}
            onChange={(event) => changeHandler(event)}
          />
          Movies
        </span>
        <span>
          <input
            type="radio"
            name="catigory"
            value="3"
            checked={value === '3' ? true : false}
            onChange={(event) => changeHandler(event)}
          />
          Series
        </span>
      </div>
      <select
        value={selVal}
        className="pageOption"
        onChange={(e) => changePageHandler(e)}
      >
        <option value="1">1 Страница</option>
        <option value="2">2 Страница</option>
        <option value="3">3 Страница</option>
        <option value="4">4 Страница</option>
        <option value="5">5 Страница</option>
      </select>
    </>
  )
}

export default Search
