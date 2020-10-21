import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getPersonDetail} from "./getPersonDetail";
import {fetchPersonDetailSuccess, fetchPersonDetailError, fetchPersonDetail} from "./personDetailSlice";

function* fetchPersonDetailHandler() {
    try {
        yield delay(1000)
        const personDetail = yield call(getPersonDetail);
        yield put(fetchPersonDetailSuccess(personDetail))
    } catch (error) {
        yield put(fetchPersonDetailError(error))
    }
}

export function* personDetailSaga() {
    yield takeLatest(fetchPersonDetail.type, fetchPersonDetailHandler);
}