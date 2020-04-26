import React from 'react';
import PT from 'prop-types';
import cx from 'classnames';

import styles from './styles.module.scss';

const CardHeader = ({
  className: baseClassName,
  children,
  isSelected,
  variant,
  selectedLabel,
  label,
}) => {
  const className = cx(styles.header, { [styles.selected]: isSelected }, baseClassName);
  return (
    <div className={className}>
      <h5 className={styles.title}>{children}</h5>
      {(variant === 'checkbox' || variant === 'radio') && (
        <p className={styles.label}>
          {isSelected ? selectedLabel : label}
        </p>
      )}
    </div>
  );
};

CardHeader.defaultProps = {
  isSelected: false,
  variant: null,
};

CardHeader.propTypes = {
  isSelected: PT.bool,
  variant: PT.oneOf([null, 'checkbox', 'radio']),
};

export default CardHeader;
