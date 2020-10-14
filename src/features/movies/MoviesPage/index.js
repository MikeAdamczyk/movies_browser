import React, { useEffect } from "react";
import Paging from "../../../common/components/Paging";
import { ListContainer, Wrapper } from "../../../common/components/Containers/styled";
import { Title } from "../../../common/components/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, selectMovie } from "../moviesSlice";
import { fetchGenre, selectGenre } from "../../genres/genresSlice";
import { Tile } from "../../../common/components/Tile";

export const MoviesPage = () => {
    const dispatch = useDispatch();

    const moviesResult = useSelector(selectMovie);
    const genresResult = useSelector(selectGenre);

    useEffect(() => {
      dispatch(fetchMovie());
      dispatch(fetchGenre())
  }, [dispatch])

    const getMovieGenres = (genre_ids) => {
      const genres = [];

      genre_ids.forEach(ID => {
        const genreName = (genresResult.find((element) => element.id === ID)).name;
        genres.push(genreName);
      });

      return genres;
    };

    const getProductionYear = (releaseDate) => {
      const productionYear = (new Date(releaseDate)).getFullYear();
      return productionYear;
    }


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
            <Paging />
        </Wrapper>
};