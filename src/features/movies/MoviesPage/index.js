import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FadeIn from "react-fade-in";
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
import { Spinner, SpinnerBox } from "../../../common/Spinner/styled";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { SearchButton } from "../../../common/Header/Menu/Navigation/styled";

export const MoviesPage = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const getMovieGenres = useMovieDetail();
    const moviesResult = useSelector(selectMovies);
    const totalResults = useSelector(selectTotalResults);
    const searchingLoadingStatus = useSelector(selectLoadingSearchStatus);
    const errorStatus = useSelector(selectErrorStatus);
    const loading = useSelector(selectLoading);

    const [position, setPosition] = useState("hideButton");

    useEffect(() => {
        document.addEventListener("scroll", e => {
            let pagePosition = document.scrollingElement.scrollTop;
            if (pagePosition >= 1000) {
                setPosition("showButton")
            } else {
                setPosition("hideButton")
            }
        })
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Wrapper >
            {loading ?
                <SpinnerBox>
                    <Spinner src={spinner} />
                </SpinnerBox>
                :
                !loading && searchingLoadingStatus ?
                    <>
                        <Title title={`Search results for "${query}"`} />
                        <SpinnerBox search>
                            <Spinner src={spinner} />
                        </SpinnerBox>
                    </>
                    :
                    !loading && !searchingLoadingStatus && totalResults === 0 ?
                        <NoResult />
                        :
                        !loading && !searchingLoadingStatus && errorStatus ?
                            <Error />
                            :
                            <FadeIn delay={50} transitionDuration={600}>
                                <Title
                                    title={(!query || query.trim() === "") ? "Popular movies" : `Search results for "${query}" (${totalResults})`} />
                                <ListContainer DataType={"movie"}>
                                    {moviesResult.map((result) => (
                                        <Tile
                                            key={result.id}
                                            id={result.id}
                                            tileType={"movie"} //movie / people
                                            tileView={"list"} // list / detail
                                            header={result.title}
                                            subheader={getProductionYear(result.release_date)}
                                            image={result.poster_path}
                                            date={result.release_date}
                                            genres={getMovieGenres(result.genre_ids)}
                                            rateValue={result.vote_average}
                                            votesNumber={result.vote_count}
                                            description={result.overview}
                                        />
                                    ))}
                                </ListContainer>
                                <SearchButton
                                    position={position}
                                    title="Scroll to the top"
                                    onClick={scrollTop}
                                >
                                    ^
                                </SearchButton>
                                <Footer />
                            </FadeIn>
            }
        </Wrapper>
    )
};