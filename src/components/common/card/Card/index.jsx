import React from 'react';
import classNames from 'classnames';
import { Card as BaseCard } from 'reactstrap';

import styles from './styles.module.scss';

const Card = ({
  className: baseClassName,
  children,
  shadow,
  rounder,
  fullWidth,
  variant,
  ...otherProps
}) => {
  const className = classNames(
    baseClassName,
    styles.card,
    { 'w-100': fullWidth },
    { [styles[variant]]: variant },
    { [styles.shadow]: shadow },
    { [styles.rounder]: rounder }
  );

  return (
    <BaseCard className={className} {...otherProps}>
      {children}
    </BaseCard>
  );
};

Card.defaultProps = {
  variant: null,
  shadow: false,
};

export default Card;
