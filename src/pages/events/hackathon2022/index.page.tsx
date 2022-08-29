import * as React from 'react';
import classNames from 'classnames';
import type { NextPage } from 'next';

import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';

import styles from './index.module.scss';
import titleImage from './title.svg';
import bannerImage from './banner_image.svg';
import { getI18nProps } from '~/utils/i18n.utils';

const seo = {
  title: 'TiDB Hackathon 2022',
  //TODO
  description: '',
  keywords: ['黑客马拉松', 'TiDB', 'Hackathon'],
};

const Hackathon2022: NextPage = () => {
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <div className={classNames(styles.container)}>
        <header className={styles.header}>
          <div className={styles.header_start}>
            <div className={styles.header_start_title}>
              <img src={titleImage} alt={seo.title} />
            </div>
            <div className={styles.header_start_button}>
              <div className={styles.header_start_button_signup}>立即报名</div>
              <div className={styles.header_start_button_join_group}>加入官方群</div>
              <div className={styles.header_start_button_ask}>我要咨询</div>
            </div>
            <div className={styles.header_start_nav}>
              <div className={styles.header_start_nav_item}>介绍</div>
              <div className={styles.header_start_nav_item}>奖项</div>
              <div className={styles.header_start_nav_item}>评委</div>
              <div className={styles.header_start_nav_item}>常见问题</div>
              <div className={styles.header_start_nav_item}>合作伙伴</div>
            </div>
          </div>
          <div className={styles.header_end}>
            <img src={bannerImage} alt="" />
          </div>
        </header>
      </div>
    </CoreLayout>
  );
};

export default Hackathon2022;

export const getServerSideProps = async (ctx) => {
  //const client = await api.initStrapiClient();
  //
  //const data = await Promise.all([
  //  client.get('tidbio-hackathon-2021-leaderboards'),
  //  client.get('tidbio-hackathon-2021-news'),
  //]);
  //@ts-ignore
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
      //data: jsConvert.camelKeys(
      //  {
      //    leaderboard: data[0],
      //    news: data[1],
      //  },
      //  {
      //    recursive: true,
      //    recursiveInArray: true,
      //  }
      //),
    },
  };
};
