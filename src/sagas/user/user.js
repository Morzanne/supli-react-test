import { put, takeLatest } from 'redux-saga/effects';

import { fetchUserActionSuccess, fetchUserActionFailure, fetchUserActionRequest } from '../../actions/user/user';
export function* watchFetchUser({ payload: mainUser }) {
    try {
        yield put(fetchUserActionSuccess(mainUser))
    } catch (error) {
        yield put(fetchUserActionFailure())
    }
}

export const sagas = [
    takeLatest(fetchUserActionRequest, watchFetchUser)
]