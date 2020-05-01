import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import cx from 'classnames';

import styles from './styles.module.scss';

const LoginInput = ({ type, placeholder, name, input, meta, autoComplete, ...props }) => {
  const isValid = !Boolean(meta.error) && !meta.submitFailed;
  const showValid = meta.touched;
  return (
    <FormGroup row className={styles.formGroup}>
      <Col xs="12">
        <Input
          className={cx(styles.input, {
            'is-invalid': showValid && !isValid,
            'is-valid': showValid && isValid,
          })}
          autoComplete={autoComplete}
          name={name}
          placeholder={placeholder}
          type={type}
          {...input}
          {...props}
        />
      </Col>
    </FormGroup>
  );
};

export default LoginInput;
