import {call, put, takeLatest} from "redux-saga/effects";
import {fetchPeopleSuccess, fetchPeopleError, fetchDifferentPageSearchedPeople} from "./PeoplePopular/peopleSlice";
import {getSearchedPeoplePage} from "./getSearchedPeopleDifferentPage";

function* fetchChangePageSearchedPeopleHandler(action) {
    try {
        const searchedPeople = yield call(getSearchedPeoplePage, action.payload.query, action.payload.page);
        yield put(fetchPeopleSuccess(searchedPeople))
    } catch (error) {
        yield put(fetchPeopleError(error))
    }
}

export function* changePagePeopleSaga() {
    yield takeLatest(fetchDifferentPageSearchedPeople.type, fetchChangePageSearchedPeopleHandler);
}