import { BASE_IMG_URL } from "./api";

const MovieCard = function ({mov}) {
    return (
        <div className="movie-card">
            <img src={BASE_IMG_URL + mov.backdrop_path} />

            <h3>{mov.title}</h3>
            <h4>{mov.vote_average}★</h4>
        </div>
    );
};

export default MovieCard;

