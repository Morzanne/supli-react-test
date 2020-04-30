import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form } from 'reactstrap';
import { required, email } from 'redux-form-validators';
import queryString from 'query-string';

import routes from '../../../routes';
import LoginInput from '../LoginInput';

import styles from './styles.module.scss';
import LOGIN_FORM from '../../../data/api/auth/constants';

const validators = {
    login: [email(), required()],
    password: [required()],
};

const LoginForm = ({
    registrationRedirect,
    handleSubmit,
    onSubmit,
}) => {
    const registrationSearch = {};
    if (registrationRedirect) registrationSearch.redirect = registrationRedirect;
    return (
        <Form onSubmit={handleSubmit(onSubmit)} data-test="login-form">
            <Field
                label="Login"
                name="Login"
                type="text"
                autoComplete={LOGIN_FORM.fields.login}
                component={LoginInput}
                validate={validators.login}
                data-test="username-input"
            />
            <Field
                label="Password"
                name={LOGIN_FORM.fields.password}
                type="password"
                autoComplete="current-password"
                component={LoginInput}
                validate={validators.password}
                data-test="password-input"
            />
            <div className={styles.buttons}>
                <button className={styles.button}>
                    login toi bon de la
          </button>

            </div>
        </Form>
    );
};

export default reduxForm()(LoginForm);
