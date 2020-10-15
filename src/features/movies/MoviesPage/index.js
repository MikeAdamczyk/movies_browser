import React from "react";
import { Footer } from "../../../common/Footer";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { Title } from "../../../common/Title";
import { useMovieDetail } from "../../../lib/useMovieDetail"
import { Tile } from "../../../common/Tile";

export const MoviesPage = () => {
    const {getProductionYear, getMovieGenres, moviesResult} = useMovieDetail();


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
            <Footer />
        </Wrapper>
};
