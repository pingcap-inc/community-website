import Image from 'next/image';
import React from 'react';

import Button from '~/components/Button/Button';
import Container from '~/components/Container/Container';
import MyLink from '~/components/MyLink';
import styles from './HomeMVA.module.scss';

export default function HomeMVA() {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>2020 年度 TUG MVA</div>
        <div className={styles.summary}>
          TUG MVA (Most Valuable Advocate) 通过分享优质的技术内容，帮助大家更好地使用
          TiDB，是经过认证的技术先锋，享受极高的社区荣誉。
        </div>
        <div className={styles.buttons}>
          <Button as={MyLink} href={'/tug/mva'}>
            查看更多
          </Button>
        </div>
      </Container>
      <div className={styles.image}>
        <Image src="/images/tug/home-mva.png" alt="" width={2733 / 2} height={360 / 2} />
      </div>
    </div>
  );
}
