import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from 'antd';

import { cdn, link as linkUtils } from '~/utils';
import Container from '~/components/Container/Container';
import styles from './HomeMVA.module.scss';

export default function HomeMVA() {
  const router = useRouter();

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>2020 年度 TUG MVA</div>
        <div className={styles.summary}>
          TUG MVA (Most Valuable Advocate) 通过分享优质的技术内容，帮助大家更好地使用
          TiDB，是经过认证的技术先锋，享受极高的社区荣誉。
        </div>
        <div className={styles.buttons}>
          <Button type="primary" onClick={onClick('/tug/mva')}>
            查看更多
          </Button>
        </div>
      </Container>
      <div className={styles.image}>
        <Image unoptimized src={cdn.getImageUrl('/images/tug/home-mva.png')} alt="" width={2733 / 2} height={360 / 2} />
      </div>
    </div>
  );
}
