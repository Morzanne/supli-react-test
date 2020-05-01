import { all } from 'redux-saga/effects';

import { sagas as userFetchSaga } from '../sagas/user/user'
import { sagas as coursesFetchSaga } from '../sagas/courses/courses'
import { sagas as authenticatedSupliUserSaga } from '../sagas/authenticatedSupliUser/authenticatedSupliUser'

export default function* saga() {
    yield all([...userFetchSaga, ...coursesFetchSaga, ...authenticatedSupliUserSaga]);
}