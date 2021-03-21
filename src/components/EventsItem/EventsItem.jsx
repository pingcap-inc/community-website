import React from 'react';
import styles from './EventsItem.module.scss';
import MyLink from 'components/MyLink';
import Image from 'next/image';

export default function EventsItem({ imageUrl, title, summary, link }) {
  return (
    <div className={styles.list_item}>
      <MyLink href={link}>
        <div className={styles.list_item_image}>
          <Image src={imageUrl} alt={title} width={594} height={372} layout="responsive" />
        </div>
      </MyLink>
      <MyLink href={link}>
        <div className={styles.list_item_title}>{title}</div>
      </MyLink>
      <div className={styles.list_item_summary}>{summary}</div>
    </div>
  );
}
