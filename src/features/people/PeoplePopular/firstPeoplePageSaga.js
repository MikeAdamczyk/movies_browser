import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getFirstPeoplePage } from "./getFirstPeoplePage";
import {fetchPeopleSuccess, fetchPeopleError, fetchFirstPeoplePage} from "./peopleSlice";

function* fetchFirstPeoplePageHandler(action) {
    try {
        yield delay(4000);
        const people = yield call(getFirstPeoplePage, action.payload.page);
        yield put(fetchPeopleSuccess(people))
    } catch (error) {
        yield put(fetchPeopleError(error))
    }
}

export function* firstPeoplePageSaga() {
    yield takeLatest(fetchFirstPeoplePage.type, fetchFirstPeoplePageHandler);
}