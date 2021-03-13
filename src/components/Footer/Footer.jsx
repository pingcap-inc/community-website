import React from 'react';

import Container from 'components/Container/Container';
import MyLink from 'components/MyLink';
import Socials from 'components/socials/Socials';
import i18n from 'data/footer';
import styles from './Footer.module.scss';
import tugConfig from 'tug.config';

const logoImageUrl = 'images/logo.svg';

export default function Footer() {
  const locale = 'zh';

  const data = i18n[locale];

  const copyrightNode = `©${new Date().getFullYear()} ${tugConfig.author}.`;

  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main_left}>
            {data.map((column, columnIndex) => (
              <div key={columnIndex} className={styles.main_left_column}>
                <div className={styles.main_left_column_title}>{column.name}</div>
                <ul className={styles.main_left_column_list}>
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.outbound ? (
                        <MyLink href={item.link}>{item.name}</MyLink>
                      ) : (
                        <MyLink to={item.link}>{item.name}</MyLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.main_right}>
            <div className={styles.main_right_socials}>
              <Socials type="follow" />
            </div>
            <div className={styles.main_right_brand}>
              <div className={styles.main_right_brand_logo}>
                <MyLink to={'/'}>
                  <img src={logoImageUrl} alt="TiDB User Group" />
                </MyLink>
              </div>
              <div className={styles.main_right_brand_copyright}>{copyrightNode}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
