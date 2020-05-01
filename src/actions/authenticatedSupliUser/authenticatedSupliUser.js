import { createAction } from 'redux-act';

export const loginSupliUserActionSuccess = createAction('suppliUser/login/success')
export const loginSupliUserActionFailure = createAction('suppliUser/login/failure')
export const loginSupliUserActionRequest = createAction('suppliUser/login/request')