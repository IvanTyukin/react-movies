function MovieItem(props) {
  return (
    <div className="movieItem">
      <img src={props.Poster} className="Poster" alt="N/A"></img>
      <h4>{props.Title}</h4>
      <small>{props.Type}</small>
      <small>{props.Year}</small>
    </div>
  )
}

export default MovieItem
