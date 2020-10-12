import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getPeople} from "./getPeople";
import {fetchPeopleSuccess, fetchPeopleError, fetchPeople} from "./peopleSlice";

function* fetchPeopleHandler() {
    try {
        yield delay(1000)
        const people = yield call(getPeople);
        yield put(fetchPeopleSuccess(people))
    } catch (error) {
        yield put(fetchPeopleError(error))
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}