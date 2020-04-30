import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import LoginForm from '.';


export class LoginFormContainer extends Component {

    handleLoginSuccess = () => {
        const {
            location: { dispatchOnAuthenticationSuccess, redirect },
            redirection,
            toggle,
            dispatch,
            onLoginSuccess,
        } = this.props;

        toggle();
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

    render() {
        return (
            <LoginForm
                {...this.props}
                onSubmitSuccess={this.handleLoginSuccess}
            />
        );
    }
}

export default withRouter(connect()(LoginFormContainer));
