function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.posterUrl} alt="Movie poster" style={{ width: "100%" }} />
      <h2>{props.title}</h2>
      <p><strong>Director:</strong> {props.director}</p>
      <p><strong>Year of premiere:</strong> {props.year}</p>
      <p><strong>Film company:</strong> {props.studio}</p>
    </div>
  );
}

export default MovieCard;
