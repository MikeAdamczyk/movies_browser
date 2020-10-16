import React from "react";
import {
    useQueryParameter,
    useReplaceQueryParameter,
} from "../../../features/queryParameters";
import searchIcon from "./search.png";
import {SearchBox, Input, SearchIcon} from "./styled";
import {QUERY_PARAMETER} from "../../../lib/consts";
import {useDispatch} from "react-redux";
import {fetchMoviesByQuery} from "../../../features/movies/moviesSlice"
import {fetchPeopleByQuery} from "../../../features/people/peopleSlice";

const Search = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const replaceQueryParameter = useReplaceQueryParameter();

    const dispatch = useDispatch();

    const onInputChange = ({target}) => {
        const usedQuery = target.value.trim();
        replaceQueryParameter({
            key: QUERY_PARAMETER,
            value: usedQuery !== "" ? target.value : "",
        });
        window.location.href.includes("people") ?
            dispatch(fetchPeopleByQuery(usedQuery))
            :
            dispatch(fetchMoviesByQuery(usedQuery))
    };

    return (<SearchBox>
            <SearchIcon src={searchIcon}/>
            <Input
                placeholder={`Search for ${window.location.href.includes("people") ? "people" : "movies"}...`}
                value={query || ""}
                onChange={onInputChange}
            />
        </SearchBox>
    )
};

export default Search;