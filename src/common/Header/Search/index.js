import React, {useEffect} from "react";
import {
    useQueryParameter,
    useReplaceQueryParameter,
} from "../../../features/queryParameters";
import searchIcon from "./search.png";
import {SearchBox, Input, SearchIcon} from "./styled";
import {PAGE_PARAMETER, QUERY_PARAMETER} from "../../../lib/consts";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchMoviesByQuery,
    fetchDifferentPageSearchedMovies
} from "../../../features/movies/moviesSlice"
import {fetchPeopleByQuery, fetchDifferentPageSearchedPeople} from "../../../features/people/peopleSlice";

const Search = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const replaceQueryParameter = useReplaceQueryParameter();
    const page= useQueryParameter(PAGE_PARAMETER);

    const dispatch = useDispatch();

    useEffect(() => {
        if (query && query !== "" && page !== 1) {
            window.location.href.includes("people") ?
                dispatch(fetchDifferentPageSearchedPeople({query, page}))
                :
                dispatch(fetchDifferentPageSearchedMovies({query, page}))
        }
    }, [page, dispatch]);

    useEffect(() => {
        if (query && query !== "") {
            window.location.href.includes("people") ?
                dispatch(fetchPeopleByQuery({query, page: 1}))
                :
                dispatch(fetchMoviesByQuery({query, page: 1}))
        }
    }, [dispatch, query]);

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