import React from "react";
import {Tile} from "../../common/Tile";
import {getProductionYear} from "../../lib/utils";
import {useQueryParameter} from "../queryParameters";
import {QUERY_PARAMETER} from "../../lib/consts";
import {useSelector} from "react-redux";
import {selectSearchedMovies} from "./searchedMoviesSlice";
import {useMovieDetail} from "../useMovieDetail";
import {Title} from "../../common/Title";
import {ListContainer} from "../../common/Containers/styled";

export const SearchMoviesPage = () => {
    const query = useQueryParameter(QUERY_PARAMETER)
    const SearchMoviesResult = useSelector(selectSearchedMovies);
    const getMovieGenres = useMovieDetail();

    return (
        <>
            <Title title={`Search results for ${query} (${SearchMoviesResult.totalResults})`}/>
            <ListContainer DataType={"movie"}>
                {SearchMoviesResult.map((result) => (
                    <Tile
                        key={result.id}
                        tileType={"movie"} //movie / people
                        tileView={"list"} // list / detail
                        header={result.title}
                        subheader={getProductionYear(result.release_date)}
                        image={result.poster_path}
                        place={"China, United States of America"}
                        date={result.release_date}
                        genres={getMovieGenres(result.genre_ids)}
                        rateValue={result.vote_average}
                        votesNumber={result.vote_count}
                        description={result.overview}
                    ></Tile>
                ))}
            </ListContainer>
        </>
    )
};