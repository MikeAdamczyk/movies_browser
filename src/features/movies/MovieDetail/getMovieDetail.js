import {API_KEY, URL_ADDRESS} from "../../../lib/consts";

export const getMovieDetail = async (movie_id = 337401) => {
    const response = await fetch(`${URL_ADDRESS}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);

    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json();
};