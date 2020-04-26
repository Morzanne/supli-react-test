import { REDUCER_KEY } from '../../reducers/courses/courses'

export const getCourses = state => {
    return state[REDUCER_KEY].data.courses
}