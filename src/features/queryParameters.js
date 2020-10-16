import {useLocation, useHistory} from "react-router-dom";

export const useQueryParameter = (key) => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();

    return ({key, value}) => {
        const searchParams = new URLSearchParams(location.search);

        if (value.trim() === "") {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }
      history.push(`${location.pathname}?${searchParams.toString()}`)
    };
};
