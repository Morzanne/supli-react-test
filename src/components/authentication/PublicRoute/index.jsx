import React, { Fragment } from "react";
import { Route, Redirect, useLocation } from 'react-router';
import Unauthenticated from "../Unauthenticated";
import Authenticated from "../Authenticated";

const PublicRoute = ({ redirect, ...props }) => {

    const location = useLocation();

    const redirection = location && location.redirect ? location.redirect : redirect;

    return (
        <Fragment>
            <Unauthenticated>
                <Route redirect={redirect} {...props} />
            </Unauthenticated>
            <Authenticated>
                <Redirect to={redirection} />
            </Authenticated>
        </Fragment>
    )
}

export default PublicRoute;