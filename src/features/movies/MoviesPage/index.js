import React from "react";
import {Footer} from "../../../common/Footer";
import {ListContainer, Wrapper} from "../../../common/Containers/styled";
import {Title} from "../../../common/Title";
import {useMovieDetail} from "../useMovieDetail"
import {Tile} from "../../../common/Tile";
import {getProductionYear} from "../../../lib/utils";
import {useSelector} from "react-redux";
import {getSearchedMovies} from "../moviesSlice";
import {useQueryParameter} from "../../queryParameters";
import {QUERY_PARAMETER} from "../../../lib/consts";

export const MoviesPage = () => {
    const query = useQueryParameter(QUERY_PARAMETER);

    const getMovieGenres = useMovieDetail();
    const moviesResult = useSelector((state) => getSearchedMovies(state, query));

    return <Wrapper>
        <Title title={"Popular movies"}></Title>
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
                )
            )
            }
        </ListContainer>
        <Footer/>
    </Wrapper>
};
