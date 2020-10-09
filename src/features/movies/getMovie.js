import {API_KEY} from "../../lib/consts";

export const getMovie = async (page = 1) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json();
};