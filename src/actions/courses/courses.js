import { createAction } from 'redux-act';

export const fetchCoursesActionSuccess = createAction('courses/fetch/success')
export const fetchCoursesActionFailure = createAction('courses/fetch/failure')
export const fetchCoursesActionRequest = createAction('courses/fetch/request')