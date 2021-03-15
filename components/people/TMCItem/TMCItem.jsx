import Image from 'next/image';
import React from 'react';

import styles from './TMCItem.module.scss';
import Image from 'next/image';

export default function TMCItem({ name, role, company, title }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Image src={`/images/avatar/${encodeURIComponent(name)}.jpg`} alt={name} width={150} height={150} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.role}>{role}</div>
      <div className={styles.metadata}>
        {company} {title}
      </div>
    </div>
  );
}
