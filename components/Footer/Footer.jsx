import React from 'react'
// import Socials from '../socials/Socials'
import i18n from '../../data/footer'
import MyLink from 'components/MyLink'
// import { useIntl } from 'react-intl'
import Container from "components/Container/Container";

const logoImageUrl = '/images/logo.svg'

import styles from './Footer.module.scss'
import {Row, Col} from "antd";

export default function Footer() {
  
  // const intl = useIntl()
  // const locale = intl.locale
  const locale = 'en'
  
  const data = i18n[locale]
  
  const copyrightNode = `©${new Date().getFullYear()} TiDB Author.`
  
  return (
    <div className={styles.wrapper}>
      <Container fluid className={styles.container}>
        <Row gutter={[16, 16]} className={styles.main}>
          <Col sm={24} md={16}>
            <Row className={styles.main_left}>
              {data.map((column, columnIndex) => (
                <Col key={columnIndex} xs={24} sm={12} md={8} className={styles.main_left_column}>
                  <div className={styles.main_left_column_title}>
                    {column.name}
                  </div>
                  <ul className={styles.main_left_column_list}>
                    {column.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.outbound ? <MyLink href={item.link}>{item.name}</MyLink> : <MyLink to={item.link}>{item.name}</MyLink>}</li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
          
          <Col sm={24} md={8} className={styles.main_right}>
            <div className={styles.main_right_logo}>
              <MyLink to={'/'}>
                <img src={logoImageUrl} alt="TiDB User Group"/>
              </MyLink>
            </div>
            <div className={styles.main_right_socials}>
              {/*<Socials type="follow" />*/}
            </div>
          </Col>
        </Row>
        
        <div className={styles.copyright}>
          {copyrightNode}
        </div>
      </Container>
    </div>
  )
}
