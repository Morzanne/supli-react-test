import { useSelector } from "react-redux"
import { isSupliUserAuthenticated } from "../../../selectors/authenticatedSupliUser/authenticatedSupliUser"

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

  export default Authenticated;
  