import React, { useEffect, useState } from 'react';
import { followSocials, shareSocials } from '../../data/socials';
import styles from './Socials.module.scss';
import { Row, Col } from 'antd';

const Socials = ({ type, title }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(
      type === 'follow' ? followSocials : type === 'share' ? shareSocials(window.location.href, title) : followSocials
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <Row gutter={[24, 16]}>
        {data &&
          data.map((social) => (
            <Col key={social.name} span={8}>
              <a className={styles.item} target="_blank" rel="noopener" href={social.href}>
                <div className={styles[social.name]} />
              </a>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Socials;
