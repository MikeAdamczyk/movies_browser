import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getPeople} from "./getPeople";
import {fetchPeopleSuccess, fetchPeopleError, fetchPeople} from "./peopleSlice";

function* fetchPeopleHandler(action) {
    try {
        yield delay(2200);
        const people = yield call(getPeople, action.payload.page);
        yield put(fetchPeopleSuccess(people))
    } catch (error) {
        yield put(fetchPeopleError(error))
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}