import React from 'react';
import classnames from 'classnames';

import styles from './Label.module.scss';

const Label = ({ required, children, className, ...props }) => {
  return (
    <label className={classnames(styles.label, className)} {...props}>
      {!!required && <span className={styles.label_require}>* </span>}
      {children}
    </label>
  );
};

export default Label;
