import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import moviesReducer from "./features/movies/MoviesPopular/moviesSlice";
import movieDetailReducer from "./features/movies/MovieDetail/movieDetailSlice";
import movieCreditsReducer from "./features/movies/MovieCredits/movieCreditsSlice";
import genresReducer from "./features/genres/genresSlice";
import peopleReducer from "./features/people/PeoplePopular/peopleSlice";
import personDetailReducer from "./features/people/PersonDetail/personDetailSlice";


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieDetail: movieDetailReducer,
        movieCredits: movieCreditsReducer,
        genres: genresReducer,
        people: peopleReducer,
        personDetail: personDetailReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
