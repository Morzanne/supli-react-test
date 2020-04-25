import { all } from 'redux-saga/effects';

import { sagas as userFetchSaga } from '../sagas/user/user'

export default function* saga() {
    yield all([...userFetchSaga]);
}