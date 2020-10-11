import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie, selectMovie} from "./features/movies/moviesSlice";
import { Tile } from "./components/Tile"
import poster from './images/poster.jpg'
import posterList from './images/posterlist.png'
import actor from './images/actor.png'

function App() {
    //@FIXME: below is only sample render
    const moviesResult = useSelector(selectMovie)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovie())
    }, [])

    return (<>
            {moviesResult.map((result, index) => (
                    <div key={index}>{JSON.stringify(result)}</div>
                )
            )}
                    <Tile
                        tileType={"movie"} //movie / people
                        tileView={"list"} // list / detail
                        header={"Mulan"}
                        subheader={"2020"}
                        poster={posterList}
                        place={"China, United States of America"}
                        date={"24.10.2020"}
                        genres={["Action", "Adventure", "Drama"]}
                        rateValue={"7,8"}
                        votesNumber={"35"}
                        description={`A young Chinese maiden disguises herself as a male warrior in order to save her father. 
                                      Disguises herself as a male warrior in order to save her father. 
                                      A young Chinese maiden disguises herself as a male warrior in order to save her father.`
                                    }
                      ></Tile>
        </>
    )
}

export default App;
