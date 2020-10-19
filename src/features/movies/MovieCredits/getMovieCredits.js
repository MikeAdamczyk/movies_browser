import {API_KEY, URL_ADDRESS} from "../../../lib/consts";

export const getMovieCredits = async (movie_id = 337401) => {
    const response = await fetch(`${URL_ADDRESS}/movie/${movie_id}/credits?api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json();
};