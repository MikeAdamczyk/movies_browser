import {API_KEY, URL_ADDRESS} from "../../lib/consts";

export const getGenre = async () => {
    const response = await fetch(`${URL_ADDRESS}/genre/movie/list?api_key=${API_KEY}&language=en-US`);

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json();
};