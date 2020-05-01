import React, { Fragment } from "react";
import { Route, Redirect } from 'react-router';
import Unauthenticated from "../Unauthenticated";
import Authenticated from "../Authenticated";

import routes from '../../../routes';

const PrivateRoute = ({
    redirect,
    returnAfterAuthentication,
    location,
    ...props
}) => {

    const to = returnAfterAuthentication
        ? { pathname: redirect, redirect: location.pathname }
        : redirect;

    return (
        <Fragment>
            <Unauthenticated>
                <Redirect to={to} />
            </Unauthenticated>
            <Authenticated>
                <Route {...props} />
            </Authenticated>
        </Fragment>
    )
}

PrivateRoute.defaultProps = {
    redirect: routes.login.path,
    returnAfterAuthentication: false,
};

export default PrivateRoute;