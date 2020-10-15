import React from "react";
import {
    useQueryParameter,
    useReplaceQueryParameter,
} from "../../../queryParameters";
import searchIcon from "./search.png";
import {SearchBox, Input, SearchIcon} from "./styled";
import {QUERY_PARAMETER} from "../../../lib/consts";

const Search = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({target}) => {
        replaceQueryParameter({
            key: QUERY_PARAMETER,
            value: target.value.trim() !== "" ? target.value : "",
        });
    };

    return (<SearchBox>
            <SearchIcon src={searchIcon}/>
            <Input
                placeholder="Search for movies..."
                value={query || ""}
                onChange={onInputChange}
            />
        </SearchBox>
    )
};

export default Search;