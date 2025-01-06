const MovieCard = function ({mov}) {
    return (
        <div className="movie-card">
            <img src={BASE_IMG_URL + movie.backdrop_path} />

            <h3>{movie.title}</h3>
            <h4>{movie.vote_average}★</h4>
        </div>
    );
};

export default MovieCard;
