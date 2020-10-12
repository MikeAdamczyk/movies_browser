import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie, selectMovie} from "./features/movies/moviesSlice";
import {fetchGenre, selectGenre} from "./features/genres/genresSlice";
import { Tile } from "./components/Tile"
import poster from './images/poster.jpg'
import posterList from './images/posterlist.png'
import actor from './images/actor.png'

function App() {
    //@FIXME: below is only sample render
    const dispatch = useDispatch();

    const moviesResult = useSelector(selectMovie);
    const genresResult = useSelector(selectGenre);

    useEffect(() => {
      dispatch(fetchMovie());
      dispatch(fetchGenre())
  }, [dispatch])
  
    const getProductionYear = (releaseDate) => {
      const productionYear = (new Date(releaseDate)).getFullYear();
      return productionYear;
    }

    return (<Container>
            {moviesResult.map((result) => (
                
                  <Tile
                    tileType={"movie"} //movie / people
                    tileView={"list"} // list / detail
                    header={result.title}
                    subheader={getProductionYear(result.release_date)}
                    poster={`https://image.tmdb.org/t/p/w342/${result.poster_path}`}
                    place={"China, United States of America"}
                    date={result.release_date}
                    genres={["Adventure", "Drama", "Action"]}
                    rateValue={result.vote_average}
                    votesNumber={result.vote_count}
                    description={result.overview}
                  ></Tile> 
                )
            )}
            </Container>
    )
}

export default App;
