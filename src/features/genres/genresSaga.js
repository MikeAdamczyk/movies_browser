import {call, put, takeLatest} from "redux-saga/effects";
import {getGenre} from "./getGenre";
import {fetchGenreSucces, fetchGenreError, fetchGenre} from "./genresSlice";

function* fetchGenreHandler() {
    try {
        const genre = yield call(getGenre);
        yield put(fetchGenreSucces(genre));
    } catch (error) {
        yield put(fetchGenreError(error))
    }
}

export function* genresSaga() {
    yield takeLatest(fetchGenre().type, fetchGenreHandler);
}