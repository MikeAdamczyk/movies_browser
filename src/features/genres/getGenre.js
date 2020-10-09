import {API_KEY} from "../../lib/consts";

export const getGenre = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return await response.json();
};