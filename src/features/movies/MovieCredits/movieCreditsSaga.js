import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getMovieCredits} from "../MovieCredits/getMovieCredits";
import {fetchMovieCredits, 
        fetchMovieCreditsSuccess,
        fetchMovieCreditsError
        } from "../MovieCredits/movieCreditsSlice";

function* fetchMovieCreditsHandler() {
    try {
        yield delay(1000)
        const movieCredits = yield call(getMovieCredits);
        yield put(fetchMovieCreditsSuccess(movieCredits))
    } catch (error) {
        yield put(fetchMovieCreditsError(error))
    }
}

export function* movieCreditsSaga() {
    yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsHandler);
}