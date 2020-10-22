import {API_KEY, URL_ADDRESS} from "../../lib/consts";

export const getSearchedMovies = async (query, page=1) => {
    if (query && query.trim() !== "") {
        const response = await fetch(`${URL_ADDRESS}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}`);

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json();
    }
};
