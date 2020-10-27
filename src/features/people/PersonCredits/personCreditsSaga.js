import {call, put, takeLatest} from "redux-saga/effects";
import {getPersonCredits} from "./getPersonCredits";
import {fetchPersonCreditsSuccess, fetchPersonCreditsError, fetchPersonCredits} from "./personCreditsSlice";

function* fetchPersonCreditsHandler(action) {
    try {
        const personCredits = yield call(getPersonCredits, action.payload.id);
        yield put(fetchPersonCreditsSuccess(personCredits))
    } catch (error) {
        yield put(fetchPersonCreditsError(error))
    }
}

export function* personCreditsSaga() {
    yield takeLatest(fetchPersonCredits.type, fetchPersonCreditsHandler);
}