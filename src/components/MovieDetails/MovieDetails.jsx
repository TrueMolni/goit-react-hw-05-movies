const MovieDetails = ({
  name,
  title,
  release_date,
  overview,
  vote_average,
  poster_path,
  backdrop_path,
  genres,
  original_title,
}) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}` || backdrop_path}
        alt={title}
      />
      <div>
        <h2>{title || original_title || name}</h2>
        <p>{release_date}</p>
        <p>{vote_average}</p>
        <p>About : </p>
        <p>{overview}</p>
        <p>
          {genres &&
            genres.map(({ id, name }) => <span key={id}>{name},</span>)}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
