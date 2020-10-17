import React, {useEffect} from "react";
import {
    useQueryParameter,
    useReplaceQueryParameter,
} from "../../../features/queryParameters";
import searchIcon from "./search.png";
import {SearchBox, Input, SearchIcon} from "./styled";
import {QUERY_PARAMETER} from "../../../lib/consts";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesByQuery, selectCurrentPage} from "../../../features/movies/moviesSlice"
import {fetchPeopleByQuery, selectPeopleCurrentPage} from "../../../features/people/peopleSlice";

const Search = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const replaceQueryParameter = useReplaceQueryParameter();
    const peopleCurrentPage = useSelector(selectPeopleCurrentPage);
    const movieCurrentPage = useSelector(selectCurrentPage);

    const dispatch = useDispatch();

    useEffect(() => {
        if (query && query !== "") {
            window.location.href.includes("people") ?
                dispatch(fetchPeopleByQuery({query, page: peopleCurrentPage}))
                :
                dispatch(fetchMoviesByQuery({query, page: movieCurrentPage}))
        }
    }, [dispatch, query, peopleCurrentPage, movieCurrentPage])

    const onInputChange = ({target}) => {
        const usedQuery = target.value.trim();
        replaceQueryParameter({
            key: QUERY_PARAMETER,
            value: usedQuery !== "" ? target.value : "",
        });
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