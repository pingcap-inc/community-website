import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

import styles from './index.module.scss';

export default function ArrowLink({ children, ...rest }) {
  return (
    <div className={styles.container} {...rest}>
      <div className={styles.label}>{children}</div>
      <div className={styles.icon}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
}
