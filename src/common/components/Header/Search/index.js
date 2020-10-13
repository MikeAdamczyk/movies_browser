import React from "react";
import searchIcon from "./search.png";
import { SearchBox, Input, SearchIcon } from "./styled";

const Search = () => (
    <SearchBox>
        <SearchIcon src={searchIcon} />
        <Input
            placeholder="Search for movies..."
        // value={query || ""}
        // onChange={onInputChange}
        />
    </SearchBox>
);

export default Search;