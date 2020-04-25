import { toggleUiNavbarAction } from '../../actions/navigation/navbar/navbar';
import { UiNavbar } from '../../data/models/Navigation/navbar';
import { createReducer } from 'redux-act';

export const REDUCER_KEY = 'ui/navbar'

const reducer = createReducer(
    {
        [toggleUiNavbarAction]: state => {
            return state.setIn(['isOpen'], !state.isOpen)
        }
    },
    new UiNavbar() ,
)

export default {
    [REDUCER_KEY]: reducer
}
