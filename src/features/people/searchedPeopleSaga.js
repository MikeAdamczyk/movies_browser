import {call, put, debounce} from "redux-saga/effects";
import {getSearchedPeople} from "./getSearchedPeople";
import {fetchPeopleSuccess, fetchPeopleError, fetchPeopleByQuery} from "./peopleSlice";

function* fetchSearchedPeopleHandler(action) {
    try {
        const searchedPeople = yield call(getSearchedPeople, action.payload.query);
        yield put(fetchPeopleSuccess(searchedPeople))
    } catch (error) {
        yield put(fetchPeopleError(error))
    }
}

export function* searchedPeopleSaga() {
    yield debounce(2000, fetchPeopleByQuery.type, fetchSearchedPeopleHandler);
}