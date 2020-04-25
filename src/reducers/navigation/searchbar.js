import { ActionTypes } from '../../actions/navigation/navbar/searchbar';
import { UiSearchBar } from '../../data/models/Navigation/searchbar';
import createReducer from 'lib/redux/createReducer';

const toggle = state => state.set('isOpen', !state.isOpen);

const initialState = new UiSearchBar();

export default createReducer(initialState, {
    [ActionTypes.UI_SEARCH_BAR_TOGGLE]: [toggle],
});
