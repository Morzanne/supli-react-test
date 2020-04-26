import { all } from 'redux-saga/effects';

import { sagas as userFetchSaga } from '../sagas/user/user'
import { sagas as coursesFetchSaga } from '../sagas/courses/courses'

export default function* saga() {
    yield all([...userFetchSaga, ...coursesFetchSaga]);
}