import navbar from '../reducers/navigation/navbar'
import user from '../reducers/user/user'
import courses from '../reducers/courses/courses'
import authenticatedSupliUser from '../reducers/authenticatedSupliUser/authenticatedSupliUser'
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from '../data/storage/storage';

export const reducers = {
    ...navbar,
    ...user,
    ...courses,
    ...authenticatedSupliUser
};

const rootReducer = history => combineReducers({
    ...reducers,
    form: formReducer,
    router: connectRouter(history)
})

const storedReducers = history => persistReducer(storage, rootReducer(history))

export default storedReducers;