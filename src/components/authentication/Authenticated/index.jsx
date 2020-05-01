import { useSelector } from "react-redux"
import { isSupliUserAuthenticated } from "../../../selectors/authenticatedSupliUser/authenticatedSupliUser"

import PT from 'prop-types';

export const Authenticated = ({ children, fallBack }) => {

    const isAuthenticated = useSelector(state => {
        return isSupliUserAuthenticated(state);
    })

    if (isAuthenticated) {
        return children;
      }

      return fallBack;
}

Authenticated.defaultProps = {
    fallBack: null,
  };

  Authenticated.propTypes = {
      children: PT.node,
      fallBack: PT.elementType
  }

  export default Authenticated;
  