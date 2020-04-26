import navbar from '../reducers/navigation/navbar'
import user from '../reducers/user/user'
import courses from '../reducers/courses/courses'

export default {
    ...navbar,
    ...user,
    ...courses,
};