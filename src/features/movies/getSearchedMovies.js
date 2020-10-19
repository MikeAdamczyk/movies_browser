import {API_KEY, URL_ADDRESS} from "../../lib/consts";

export const getSearchedMovies = async (query) => {
    if (query || query.trim() !== "") {
        const response = await fetch(`${URL_ADDRESS}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`);

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json();
    }
};
