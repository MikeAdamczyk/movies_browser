import { call, put, takeLatest } from "redux-saga/effects";
import { getPersonDetail } from "./getPersonDetail";
import { fetchPersonDetailSuccess, fetchPersonDetailError, fetchPersonDetail } from "./personDetailSlice";

function* fetchPersonDetailHandler (action) {
  try {
    const personDetail = yield call(getPersonDetail, action.payload.id);
    yield put(fetchPersonDetailSuccess(personDetail))
  } catch (error) {
    yield put(fetchPersonDetailError(error))
  }
}

export function* personDetailSaga () {
  yield takeLatest(fetchPersonDetail.type, fetchPersonDetailHandler);
}