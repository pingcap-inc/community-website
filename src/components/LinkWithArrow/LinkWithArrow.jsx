import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import styles from '~/components/LinkWithArrow/LinkWithArrow.module.scss';
import MyLink from '~/components/MyLink';

export default function LinkWithArrow({ children, ...rest }) {
  return (
    <MyLink className={styles.link_with_arrow} {...rest}>
      <ArrowRightOutlined /> <span>{children}</span>
    </MyLink>
  );
}
