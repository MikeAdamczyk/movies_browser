import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../hooks/queryParameters";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { fetchPeople } from "../../features/people/PeoplePopular/peopleSlice";
import { fetchMovieDetail, selectIsError, selectMovieDetail } from "../../features/movies/MovieDetail/movieDetailSlice";
import {
    fetchPersonDetail,
    selectPersonDetail, selectPersonIsError,
    selectPersonIsLoading
} from "../../features/people/PersonDetail/personDetailSlice";
import { selectLoading } from "../../features/movies/MovieDetail/movieDetailSlice";
import {
    fetchMovieCredits, selectIsMovieCreditsError,
    selectIsMovieCreditsLoading,
    selectMovieCast,
    selectMovieCrew
} from "../../features/movies/MovieCredits/movieCreditsSlice";
import {
    fetchPersonCredits, selectIsPersonCreditsError,
    selectIsPersonCreditsLoading,
    selectPersonCast,
    selectPersonCrew
} from "../../features/people/PersonCredits/personCreditsSlice";
import { MoviesPage } from "../../features/movies/MoviesPage";
import { PeoplePage } from "../../features/people/PeoplePage";
import { Error } from "../Error";
import { Backdrop } from "./backdrop";
import { Title } from "../Title";
import { Tile } from "../Tile";
import spinner from "../../images/icon-spinner.svg";
import { getProductionYear } from "../../lib/utils";
import { QUERY_PARAMETER } from "../../lib/consts";
import { DetailsContainer } from "./styled";
import { ListContainer, Wrapper } from "../Containers/styled";
import { Spinner, SpinnerBox } from "../Loading/styled";

export const SinglePage = ({match, detailType, listType}) => {

    const dispatch = useDispatch();
    const movieDetail = useSelector(selectMovieDetail);
    const personDetail = useSelector(selectPersonDetail);
    const personCast = useSelector(selectPersonCast);
    const personCrew = useSelector(selectPersonCrew);
    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);
    const loading = useSelector(selectLoading);
    const isPersonLoading = useSelector(selectPersonIsLoading);
    const isPersonCreditsLoading = useSelector(selectIsPersonCreditsLoading);
    const isMovieCreditsLoading = useSelector(selectIsMovieCreditsLoading);
    const isMovieCreditsError = useSelector(selectIsMovieCreditsError);
    const isPersonCreditsError = useSelector(selectIsPersonCreditsError);
    const isPeopleError = useSelector(selectPersonIsError);
    const isMovieError = useSelector(selectIsError);
    const getMovieGenres = useMovieDetail();
    const id = match.params.id;
    const query = useQueryParameter(QUERY_PARAMETER);

    const sortedPersonCast = [...personCast];
    sortedPersonCast.sort((a, b) => {
        return b.popularity - a.popularity;
    });

    useEffect(() => {
        dispatch(fetchPeople());
        if(detailType === "movie"){
            dispatch(fetchMovieDetail({id}));
            dispatch(fetchMovieCredits({id}));
        } else {
            dispatch(fetchPersonDetail({id}));
            dispatch(fetchPersonCredits({id}));
        }
    }, [id, dispatch]);

    const getProductionCountries = (countries) => {
        const productionCountries = [];

        countries.forEach(country => {
            const productionCountry = country.name;
            productionCountries.push(productionCountry);
        });
        return productionCountries;
    };

    const getDetailGenres = (genresArray) => {
        const genresDetail = [];

        genresArray.forEach(genre => {
            const genreName = genre.name;
            genresDetail.push(genreName);
        })

        return genresDetail;
    };

    const getFormattedDate = (date) => {
        const formattedDate = (new Date(date)).toLocaleDateString();
        return formattedDate;
    };

    if (loading || isPersonLoading || isPersonCreditsLoading || isMovieCreditsLoading) {
        return (
            <SpinnerBox>
                <Spinner src={spinner} />
            </SpinnerBox>
        )
    }
    else if (!loading && !isPersonLoading && !isPersonCreditsLoading && !isMovieCreditsLoading && (isMovieError || isPeopleError || isPersonCreditsError || isMovieCreditsError)){
        return <Error/>
    }
    else if (!loading && !isPersonLoading && !isPersonCreditsLoading && !isMovieCreditsLoading && !isMovieError && !isPeopleError && !isPersonCreditsError && !isMovieCreditsError && query && query !== ""){
        return (
            window.location.href.includes("people") ?
            <PeoplePage/>
            : <MoviesPage/>
            )
    }
    return (
        <>
            {detailType === "movie" ?
                <Backdrop
                    backdrop={movieDetail.backdrop_path}
                    title={movieDetail.title}
                    rate={movieDetail.vote_average}
                    votesNumber={movieDetail.vote_count}
                />
            : ""}
            <DetailsContainer>
                <Wrapper tileView={"detail"}>
                    {detailType === "movie" ?
                        <Tile
                            tileType={detailType} //movie / people
                            tileView={"detail"} // list / detail
                            header={movieDetail.title}
                            subheader={getProductionYear(movieDetail.release_date)}
                            image={movieDetail.poster_path}
                            place={getProductionCountries(movieDetail.production_countries)}
                            date={getFormattedDate(movieDetail.release_date)}
                            genres={getDetailGenres(movieDetail.genres)}
                            rateValue={movieDetail.vote_average}
                            votesNumber={movieDetail.vote_count}
                            description={movieDetail.overview}
                        ></Tile>
                        :
                        <Tile
                            tileType={detailType} //movie / people
                            tileView={"detail"} // list / detail
                            header={personDetail.name}
                            image={personDetail.profile_path}
                            place={personDetail.place_of_birth}
                            date={getFormattedDate(personDetail.birthday)}
                            description={personDetail.biography}
                        ></Tile>
                    }
                </Wrapper>
                <Wrapper DataType={listType}>
                    <Title title={"Cast"} />
                    {detailType === "movie" ?
                        <ListContainer DataType={listType}>
                            {movieCast.map((result) => (
                                <Tile
                                    key={result.cast_id}
                                    id={result.id}
                                    tileType={listType} //movie / people
                                    tileView={"list"} // list / detail
                                    header={result.name}
                                    subheader={result.character}
                                    image={result.profile_path}
                                />
                            ))}
                        </ListContainer>
                        :
                        <ListContainer DataType={listType}>
                            {sortedPersonCast.map((result) => (
                                <Tile
                                    key={result.cast_id}
                                    id={result.id}
                                    tileType={listType} //movie / people
                                    tileView={"list"} // list / detail
                                    header={result.title}
                                    subheader={`${result.character} (${getProductionYear(result.release_date)})`}
                                    image={result.poster_path}
                                    genres={getMovieGenres(result.genre_ids)}
                                    rateValue={result.vote_average}
                                    votesNumber={result.vote_count}
                                />
                            ))}
                        </ListContainer>
                    }
                </Wrapper>
                <Wrapper DataType={listType}>
                    <Title title={"Crew"} />
                    {detailType === "movie" ?
                        <ListContainer DataType={listType}>
                            {movieCrew.map((result) => (
                                <Tile
                                    key={result.credit_id}
                                    id={result.id}
                                    tileType={listType} //movie / people
                                    tileView={"list"} // list / detail
                                    header={result.name}
                                    subheader={result.job}
                                    image={result.profile_path}
                                />
                            ))}
                        </ListContainer>
                        :
                        <ListContainer DataType={listType}>
                            {personCrew.map((result) => (
                                <Tile
                                    key={result.credit_id}
                                    id={result.id}
                                    tileType={listType} //movie / people
                                    tileView={"list"} // list / detail
                                    header={result.title}
                                    subheader={`${result.job} (${getProductionYear(result.release_date)})`}
                                    image={result.poster_path}
                                    // genres={getMovieGenres(result.genre_ids)}
                                    rateValue={result.vote_average}
                                    votesNumber={result.vote_count}
                                />
                            ))}
                        </ListContainer>
                    }
                </Wrapper>
            </DetailsContainer>
        </>
    )
};