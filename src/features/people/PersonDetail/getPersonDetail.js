import {API_KEY, URL_ADDRESS} from "../../../lib/consts";

export const getPersonDetail = async (person_id = 18918) => {
    const response = await fetch(`${URL_ADDRESS}/person/${person_id}?api_key=${API_KEY}&language=en-US`);

    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json();
};