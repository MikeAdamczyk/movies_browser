import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getPersonCredits} from "./getPersonCredits";
import {fetchPersonCreditsSuccess, fetchPersonCreditsError, fetchPersonCredits} from "./personCreditsSlice";

function* fetchPersonCreditsHandler() {
    try {
        yield delay(1000)
        const personCredits = yield call(getPersonCredits);
        yield put(fetchPersonCreditsSuccess(personCredits))
    } catch (error) {
        yield put(fetchPersonCreditsError(error))
    }
}

export function* personCreditsSaga() {
    yield takeLatest(fetchPersonCredits.type, fetchPersonCreditsHandler);
}