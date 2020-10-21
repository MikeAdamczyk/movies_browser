import React from "react";
import { Footer } from "../../../common/Footer";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { Title } from "../../../common/Title";
import { useMovieDetail } from "../../useMovieDetail";
import { Tile } from "../../../common/Tile";
import { getProductionYear } from "../../../lib/utils";
import { useSelector } from "react-redux";
import { useQueryParameter } from "../../queryParameters";
import { QUERY_PARAMETER } from "../../../lib/consts";
import { Spinner, SpinnerBox } from "../../../common/Signs/styled";
import spinner from "../../../images/icon-spinner.svg";
import { Error } from "../../Error";
import { NoResult } from "../../NoResult";
import {
    selectMovies,
    selectTotalResults,
    selectLoading,
    selectLoadingSearchStatus,
    selectErrorStatus
} from "../MoviesPopular/moviesSlice";


export const MoviesPage = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const getMovieGenres = useMovieDetail();
    const moviesResult = useSelector(selectMovies);
    const totalResults = useSelector(selectTotalResults);
    const searchingLoadingStatus = useSelector(selectLoadingSearchStatus);
    const errorStatus = useSelector(selectErrorStatus);
    const loading = useSelector(selectLoading);

    if (loading) {
        return (
            <SpinnerBox>
                <Spinner src={spinner} />
            </SpinnerBox>
        )
    } else if (searchingLoadingStatus) {
        return (
            <Wrapper>
                <Title title={`Search results for "${query}"`} />
                <SpinnerBox>
                    <Spinner src={spinner} />
                </SpinnerBox>
            </Wrapper>
        )
    } else if (!searchingLoadingStatus && query && totalResults === 0) {
       return  <NoResult />
    } else if (errorStatus) { return <Error /> }

    return (
        <Wrapper>
            <>
                <Title
                    title={(!query || query.trim() === "") ? "Popular movies" : `Search results for "${query}" (${totalResults})`} />
                <ListContainer DataType={"movie"}>
                    {moviesResult.map((result) => (
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
                <Footer />
            </>
        </Wrapper>
    )
};
