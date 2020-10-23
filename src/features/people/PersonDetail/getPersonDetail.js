import {API_KEY, URL_ADDRESS} from "../../../lib/consts";

export const getPersonDetail = async (id) => {
    const response = await fetch(`${URL_ADDRESS}/person/${id}?api_key=${API_KEY}&language=en-US`);

    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json();
};