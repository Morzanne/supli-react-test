import navbar from '../reducers/navigation/navbar'
import user from '../reducers/user/user'
import courses from '../reducers/courses/courses'
import authenticatedSupliUser from '../reducers/authenticatedSupliUser/authenticatedSupliUser'

export default {
    ...navbar,
    ...user,
    ...courses,
    ...authenticatedSupliUser
};