import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import cx from 'classnames';

import { Label } from '../Label/index';

import styles from './styles.module.scss';

const LoginInput = ({ type, label, name, input, meta, autoComplete, ...props }) => {
  const isValid = !Boolean(meta.error) && !meta.submitFailed;
  const showValid = meta.touched;
  return (
    <FormGroup row className={styles.formGroup}>
      <Col lg="3" xs="12">
        <Label
          className={styles.label}
          center
          for={name}
          label={label}
          weight="bold"
          align="right"
          withColon
        />
      </Col>
      <Col lg="9" xs="12">
        <Input
          className={cx(styles.input, {
            'is-invalid': showValid && !isValid,
            'is-valid': showValid && isValid,
          })}
          autoComplete={autoComplete}
          name={name}
          type={type}
          {...input}
          {...props}
        />
      </Col>
    </FormGroup>
  );
};

export default LoginInput;
