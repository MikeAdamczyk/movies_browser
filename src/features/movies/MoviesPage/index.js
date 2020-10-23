import React from "react";
import { useSelector } from "react-redux";
import { useQueryParameter } from "../../../hooks/queryParameters";
import { useMovieDetail } from "../../../hooks/useMovieDetail";
import {
    selectMovies,
    selectTotalResults,
    selectLoading,
    selectLoadingSearchStatus,
    selectErrorStatus
} from "../MoviesPopular/moviesSlice";
import { Footer } from "../../../common/Footer";
import { Title } from "../../../common/Title";
import { Tile } from "../../../common/Tile";
import { Error } from "../../../common/Error";
import { NoResult } from "../../../common/NoResult";
import { getProductionYear } from "../../../lib/utils";
import { QUERY_PARAMETER } from "../../../lib/consts";
import spinner from "../../../images/icon-spinner.svg";
import { Spinner, SpinnerBox } from "../../../common/Loading/styled";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";

export const MoviesPage = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const getMovieGenres = useMovieDetail();
    const moviesResult = useSelector(selectMovies);
    const totalResults = useSelector(selectTotalResults);
    const searchingLoadingStatus = useSelector(selectLoadingSearchStatus);
    const errorStatus = useSelector(selectErrorStatus);
    const loading = useSelector(selectLoading);

    return (
        <Wrapper>
            {loading ?
                <SpinnerBox>
                    <Spinner src={spinner}/>
                </SpinnerBox>
                :
                !loading && searchingLoadingStatus ?
                    <>
                        <Title title={`Search results for "${query}"`}/>
                        <SpinnerBox>
                            <Spinner src={spinner}/>
                        </SpinnerBox>
                    </>
                    :
                    !loading && !searchingLoadingStatus && totalResults === 0 ?
                        <NoResult/>
                        :
                        !loading && !searchingLoadingStatus && errorStatus ?
                            <Error/>
                            :
                            <>
                                <Title
                                    title={(!query || query.trim() === "") ? "Popular movies" : `Search results for "${query}" (${totalResults})`}/>
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
                                        />
                                    ))}
                                </ListContainer>
                                <Footer/>
                            </>
            }
        </Wrapper>
    )
};
