import React, { useEffect } from "react";
import { Backdrop } from "./backdrop";
import { DetailsContainer } from "./styled";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { Title } from "../../../common/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPeople } from "../../people/PeoplePopular/peopleSlice";
import { fetchMovieDetail, selectMovieDetail } from "../../movies/MovieDetail/movieDetailSlice";
import { fetchPersonDetail, selectPersonDetail } from "../../people/PersonDetail/personDetailSlice";
import { Tile } from "../../../common/Tile";
import { useMovieDetail } from "../../useMovieDetail";
import { getFormattedDate, getProductionCountries, getProductionYear } from "../../../lib/utils";
import { Spinner, SpinnerBox } from "../../../common/Signs/styled";
import spinner from "../../../images/icon-spinner.svg";
import { selectLoading } from "../MovieDetail/movieDetailSlice";
import { fetchMovieCredits, selectMovieCast, selectMovieCrew } from "../MovieCredits/movieCreditsSlice";
import { fetchPersonCredits, selectPersonCast, selectPersonCrew } from "../../people/PersonCredits/personCreditsSlice";

export const SinglePage = ({match, detailType, listType}) => {

    const dispatch = useDispatch();
    const peopleResult = useSelector(selectPeople);
    const movieDetail = useSelector(selectMovieDetail);
    const personDetail = useSelector(selectPersonDetail);
    const personCast = useSelector(selectPersonCast);
    const personCrew = useSelector(selectPersonCrew);
    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);
    const loading = useSelector(selectLoading);
    const getMovieGenres = useMovieDetail();
    const id = match.params.id;
    
    useEffect(() => {
        dispatch(fetchPeople());
        if(detailType === "movie"){
            dispatch(fetchMovieDetail({id}));
            dispatch(fetchMovieCredits({id}));
        } else {
            dispatch(fetchPersonDetail({id}));
            dispatch(fetchPersonCredits({id}));
        }
        
    }, [id, dispatch])

    if (loading) {
        return (
            <SpinnerBox>
                <Spinner src={spinner} />
            </SpinnerBox>
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
                        place={"tablica z API jest jako undefined "}
                        date={getFormattedDate(movieDetail.release_date)}
                        genres={["nie", "działają", "tablice", "z", "API"]}
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
                        {personCast.map((result) => (
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