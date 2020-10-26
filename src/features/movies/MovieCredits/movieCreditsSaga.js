import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getMovieCredits} from "../MovieCredits/getMovieCredits";
import {fetchMovieCredits, 
        fetchMovieCreditsSuccess,
        fetchMovieCreditsError
        } from "../MovieCredits/movieCreditsSlice";

function* fetchMovieCreditsHandler(action) {
    try {
      yield delay(3000);
        const movieCredits = yield call(getMovieCredits, action.payload.id);
        yield put(fetchMovieCreditsSuccess(movieCredits))
    } catch (error) {
        yield put(fetchMovieCreditsError(error))
    }
}

export function* movieCreditsSaga() {
    yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsHandler);
}