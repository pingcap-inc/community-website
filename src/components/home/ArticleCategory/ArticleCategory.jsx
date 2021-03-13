import React from 'react';
import styles from './ArticleCategory.module.scss';
import classnames from 'classnames';
import MyLink from 'components/MyLink';

export default function ArticleCategory({ title, children, color, link, ...rest }) {
  return (
    <div className={styles.wrapper}>
      <MyLink href={link}>
        <div className={classnames(styles.title, styles[`title_with_color_${color}`])}>{title}</div>
      </MyLink>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
