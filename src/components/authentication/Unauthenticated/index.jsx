import { useSelector } from 'react-redux';
import { isSupliUserAuthenticated } from '../../../selectors/authenticatedSupliUser/authenticatedSupliUser';

export const Unauthenticated = ({ children, fallBack }) => {

    const isAuthenticated = useSelector(state => {
        return isSupliUserAuthenticated(state)
    })

    if (!isAuthenticated) {
        return children;
    }

    return fallBack;
};

Unauthenticated.defaultProps = {
    fallBack: null,
};

export default Unauthenticated;