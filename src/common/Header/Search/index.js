import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQueryParameter, useReplaceQueryParameter } from "../../../hooks/queryParameters";
import { fetchMoviesByQuery } from "../../../features/movies/MoviesPopular/moviesSlice"
import { fetchPeopleByQuery } from "../../../features/people/PeoplePopular/peopleSlice";
import { PAGE_PARAMETER, QUERY_PARAMETER } from "../../../lib/consts";
import searchIcon from "../../../images/search.png";
import { SearchBox, Input, SearchIcon } from "./styled";

const Search = ({ showMenu }) => {
  const query = useQueryParameter(QUERY_PARAMETER);
  const replaceQueryParameter = useReplaceQueryParameter();
  const page = useQueryParameter(PAGE_PARAMETER);

  const dispatch = useDispatch();

  useEffect(() => {
    if (query && query !== "" ) {
      window.location.href.includes("/people") ?
          dispatch(fetchPeopleByQuery({query, page}))
          :
          dispatch(fetchMoviesByQuery({query, page}))
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (query && query !== "") {
      window.location.href.includes("/people") ?
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

  return (
      <SearchBox showMenu={showMenu}>
        <SearchIcon src={searchIcon}/>
        <Input placeholder={`Search for ${window.location.href.includes("people") ? "people" : "movies"}...`}
               value={query || ""} onChange={onInputChange}/>
      </SearchBox>
  )
};

export default Search;