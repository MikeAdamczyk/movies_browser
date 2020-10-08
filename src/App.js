import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie, selectMovie} from "./features/movies/moviesSlice";

function App() {
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
        </>
    )
}

export default App;
