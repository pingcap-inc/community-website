import React from 'react';
import styles from './ArticleItem.module.scss';
import MyLink from '~/components/MyLink';
import classnames from 'classnames';

export default function ArticleItem({ title, link, color }) {
  return (
    <div className={classnames(styles.wrapper, styles[`with_color_${color}`])}>
      <MyLink href={link}>
        <span className={styles.dot}>·</span> {title}
      </MyLink>
    </div>
  );
}
