import { put, takeLatest } from 'redux-saga/effects';
import { fetchCoursesActionSuccess, fetchCoursesActionFailure, fetchCoursesActionRequest } from '../../actions/courses/courses';


export function* watchFetchCourses({ payload: courses }) {
    try {
        yield put(fetchCoursesActionSuccess(courses))
    } catch (error) {
        yield put(fetchCoursesActionFailure())
    }
}

export const sagas = [
    takeLatest(fetchCoursesActionRequest, watchFetchCourses)
]