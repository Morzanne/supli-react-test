import { createAction } from 'redux-act';

export const fetchUserActionSuccess = createAction('user/fetch/success')
export const fetchUserActionFailure = createAction('user/fetch/failure')
export const fetchUserActionRequest = createAction('user/fetch/request')