import React from 'react';
import styles from './HowToBecome.module.scss';
import MyLink from 'components/MyLink';

export default function HowToBecome({ index, iconUrl, title, link }) {
  const innerDom = (
    <>
      <div className={styles.index}>{index}</div>
      <div className={styles.avatar}>
        <img src={iconUrl} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
    </>
  );
  return <div className={styles.wrapper}>{link ? <MyLink href={link}>{innerDom}</MyLink> : innerDom}</div>;
}
