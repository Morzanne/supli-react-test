import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form } from 'reactstrap';
import { required, email } from 'redux-form-validators';
import { Row, Col } from 'reactstrap';

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

    const placeHolder = {
        login: "E-mail",
        password: "Mot de passe"
    }

    const registrationSearch = {};
    if (registrationRedirect) registrationSearch.redirect = registrationRedirect;

    return (
        <Form onSubmit={handleSubmit(onSubmit)} data-test="login-form" className={styles.form}>
            <Row className={styles.row}>
                <Col xs={12}>
                    <Field
                        placeholder={placeHolder.login}
                        name="login"
                        type="text"
                        autoComplete={LOGIN_FORM.fields.login}
                        component={LoginInput}
                        validate={validators.login}
                        data-test="username-input"
                    />
                </Col>
                <Col xs={12}>
                    <Field
                        placeholder={placeHolder.password}
                        name={LOGIN_FORM.fields.password}
                        type="password"
                        autoComplete="current-password"
                        component={LoginInput}
                        validate={validators.password}
                        data-test="password-input"
                    />
                </Col>
                <Col xs={12}>
                    <div className={styles.buttons}>
                        <button className={styles.button}>
                            S'identifier !
                        </button>
                    </div>
                </Col>
            </Row>
        </Form>
    );
};

export default reduxForm({
    form: 'login',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(LoginForm);
