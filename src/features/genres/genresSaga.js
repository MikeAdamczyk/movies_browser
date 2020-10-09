import {call, put, takeEvery} from "redux-saga/effects";
import {getGenre} from "./getGenre";
import {fetchGenreSucces, fetchGenreError, fetchGenre} from "./genresSlice";

function* fetchGenreHandler() {
    try {
        const genre = yield call(getGenre);
        yield put(fetchGenreSucces(genre));
        console.log(genre)
    } catch (error) {
        yield put(fetchGenreError(error))
    }
}

export function* genresSaga() {
    yield takeEvery(fetchGenre().type, fetchGenreHandler);
}