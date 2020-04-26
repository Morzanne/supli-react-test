import React from 'react';
import cx from 'classnames';
import { CardBody as BaseCardBody } from 'reactstrap';
import PT from 'prop-types';

import styles from './styles.module.scss';

const CardBody = ({ className: baseClassName, children, variant, ...otherProps }) => {
  const className = cx(styles.cardBody, baseClassName, { [styles[variant]]: styles[variant] });

  return (
    <BaseCardBody className={className} {...otherProps}>
      {children}
    </BaseCardBody>
  );
};

CardBody.propTypes = {
  variant: PT.oneOf(['standard']),
};

export default CardBody;
