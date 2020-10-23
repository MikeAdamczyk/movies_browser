import {API_KEY, URL_ADDRESS} from "../../../lib/consts";

export const getMovieDetail = async (id) => {
    const response = await fetch(`${URL_ADDRESS}/movie/${id}?api_key=${API_KEY}&language=en-US`);

    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json();
};