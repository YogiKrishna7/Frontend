export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const AllMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`;

    const response = await fetch(url);
    const data = await response.json();

    return data.results;
};