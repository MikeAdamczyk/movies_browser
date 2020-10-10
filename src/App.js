import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie, selectCurrentPage, selectMovie, setNextPage, moviesSlice} from "./features/movies/moviesSlice";
import {fetchGenre, selectGenre} from "./features/genres/genresSlice";

function App() {
    const dispatch = useDispatch();

    const moviesResult = useSelector(selectMovie);
    const genresResult = useSelector(selectGenre);
    const currentPage = useSelector(selectCurrentPage);

    useEffect(() => {
        dispatch(fetchMovie());
        dispatch(fetchGenre())
    }, [])

    return (<>
            <p>Jesteś na: {currentPage} stronie</p>
            {moviesResult.map((result, index) => (
                    <div key={index}>{JSON.stringify(result)}</div>
                )
            )}
            {genresResult.map((result, index) => (
                    <div key={index}>{JSON.stringify(result)}</div>
                )
            )}
            <button onClick={() => dispatch(setNextPage())}>Następna strona</button>
            <button>Poprzednia strona</button>
        </>
    )
}

export default App;
