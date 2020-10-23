import {API_KEY, URL_ADDRESS} from "../../../lib/consts";

export const getMovieCredits = async (id) => {
    const response = await fetch(`${URL_ADDRESS}/movie/${id}/credits?api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json();
};