import { createReducer } from "redux-act";
import { Map } from 'immutable';

import { InitialState } from '../../data/models/initialState';
import { fetchCoursesActionSuccess, fetchCoursesActionRequest } from "../../actions/courses/courses";

export const REDUCER_KEY = "courses/fetch";

const reducer = createReducer(
    {
        [fetchCoursesActionSuccess]: (state, payload) => {
            return state.set(['data'], payload).set('isFetchingDatas', false)
        },
        [fetchCoursesActionRequest]: state =>
            state.set('isFetchingDatas', true)
    },
    new InitialState({
        data: Map()
    })
);

export default {
    [REDUCER_KEY]: reducer
}