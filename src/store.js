import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import moviesReducer from "./features/movies/moviesSlice";
import genresReducer from "./features/genres/genresSlice";
import peopleReducer from "./features/people/peopleSlice";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
        people: peopleReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
