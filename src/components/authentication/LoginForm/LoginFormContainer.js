import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import LoginForm from '.';
import { loginSupliUserActionRequest } from '../../../actions/authenticatedSupliUser/authenticatedSupliUser';


class LoginFormContainer extends Component {

    handleLoginSuccess = () => {
        const {
            location: { dispatchOnAuthenticationSuccess, redirect },
            redirection,
            dispatch,
            onLoginSuccess,
        } = this.props;

        if (dispatchOnAuthenticationSuccess) {
            dispatch(dispatchOnAuthenticationSuccess);
        }
        if (redirect) {
            dispatch(push(redirect));
        } else if (redirection) {
            dispatch(push(redirection));
        }
        if (onLoginSuccess) {
            onLoginSuccess({ dispatch });
        }
    };

    handleSubmit = form => {
        const { dispatch } = this.props
        dispatch(loginSupliUserActionRequest({ form: form }))
    }

    render() {
        return (
            <LoginForm
                onSubmitSuccess={this.handleLoginSuccess}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default withRouter(connect()(LoginFormContainer));
