import React from 'react';
import cx from 'classnames';
import { CardFooter as BaseCardFooter } from 'reactstrap';

import styles from './styles.module.scss';

const CardFooter = ({ className: baseClassName, variant, children, ...otherProps }) => {
  const className = cx(styles.cardFooter, baseClassName, { [styles[variant]]: styles[variant] });
  return (
    <BaseCardFooter className={className} {...otherProps}>
      {children}
    </BaseCardFooter>
  );
};

export default CardFooter;
