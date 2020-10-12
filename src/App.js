import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie, selectMovie} from "./features/movies/moviesSlice";
import {fetchGenre, selectGenre} from "./features/genres/genresSlice";

function App() {
    //@FIXME: below is only sample render
    const dispatch = useDispatch();

    const moviesResult = useSelector(selectMovie);
    const genresResult = useSelector(selectGenre);

    useEffect(() => {
        dispatch(fetchMovie());
        dispatch(fetchGenre())
    }, [dispatch])

    return (<>
            {moviesResult.map((result, index) => (
                    <div key={index}>{JSON.stringify(result)}</div>
                )
            )}
            {genresResult.map((result, index) => (
                    <div key={index}>{JSON.stringify(result)}</div>
                )
            )}
        </>
    )
}

export default App;
