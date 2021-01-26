import React, {useEffect, useState} from 'react';
import styles from './Navbar.module.scss'
import classNames from 'classnames'
import MyLink from "components/MyLink";
import {Dropdown, Menu} from 'antd';
import {DownOutlined, MenuOutlined} from "@ant-design/icons";
import i18n from '../../data/navbar'
// import {useIntl} from "react-intl";
import {useDebounce} from 'ahooks'
import Container from "components/Container/Container";
import Button from "components/Button/Button";

export default function Navbar({initTransparent, forceNonTransparent}) {
  
  // const intl = useIntl()
  // const locale = intl.locale
  const locale = 'en'
  
  const data = i18n[locale]
  initTransparent = forceNonTransparent ? false : initTransparent
  
  const [transparent, setTransparent] = useState(initTransparent)
  const transparentDebounced = useDebounce(transparent, {wait: 100})
  const [isPopup, setIsPopup] = useState(false)
  
  useEffect(() => {
    if (forceNonTransparent) {
      return () => {}
    }
    
    const eventName = 'scroll'
    const scrollListener = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setTransparent(scrollTop <= 0)
    }
    
    scrollListener()
    
    window.addEventListener(eventName, scrollListener)
    return () => {
      window.removeEventListener(eventName, scrollListener)
    }
  }, [])

  return (
    <div className={classNames(styles.wrapper, {[styles.wrapper_transparent]: transparentDebounced})}>
      <Container fluid className={styles.container}>
  
        <MyLink to="/">
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src="/images/logo.svg" alt="TUG"/>
            </div>
            {/*<div className={classNames(styles.title, {[styles.title_transparent]: transparentDebounced})}>*/}
            {/*  {data.title}*/}
            {/*</div>*/}
          </div>
        </MyLink>
        
        <div className={styles.right}>
          
          <div className={styles.menu}>
            {data.links.map((link, linkIndex) => link.children ? (
              <div key={linkIndex} className={classNames(styles.menu_item, {[styles.menu_item_transparent]: transparentDebounced})}>
                <Dropdown overlayStyle={{zIndex: 99999}} overlay={
                  <Menu style={{right: 12}}>
                    {link.children.map((menuItem, menuItemIndex) => (
                      <Menu.Item key={menuItemIndex}>
                        <MyLink to={menuItem.link}>
                          {menuItem.title}
                        </MyLink>
                      </Menu.Item>
                    ))}
                  </Menu>
                }>
                  <MyLink to="#" onClick={e => e.preventDefault()}>
                    {link.title} <DownOutlined />
                  </MyLink>
                </Dropdown>
              </div>
            ) : (
              <div key={linkIndex} className={classNames(styles.menu_item, {[styles.menu_item_transparent]: transparentDebounced})}>
                <MyLink to={link.link}>
                  {link.title}
                </MyLink>
              </div>
            ))}
            <div className={styles.buttons}>
              <Button href={'https://accounts.pingcap.com/login?redirect_to=https%3A//accounts.pingcap.com/discourse/sso%3Fsso%3Dbm9uY2U9ODI0YTQ2MjNmZTk2OWQ0MTVjNjMyOTc1NzE3MzUwNzgmcmV0dXJuX3Nzb191cmw9aHR0cHMlM0ElMkYlMkZhc2t0dWcuY29tJTJGc2Vzc2lvbiUyRnNzb19sb2dpbg%253D%253D%26sig%3Db85501909e73837e9c6d94a8589b14622068afc212b3120f88e838d2ff8bb010'}>
                加入 TUG
              </Button>
            </div>
          </div>
        
          <div className={styles.menu_mobile}>
            <MenuOutlined onClick={() => setIsPopup(prevState => !prevState)}/>
          </div>
          
        </div>

      </Container>
      
      {isPopup && (
        <div className={styles.menu_mobile_popup}>
          {data.links.map((link, linkIndex) => link.children ? (
            <div key={linkIndex} className={styles.menu_mobile_popup_item}>
              <Dropdown overlayStyle={{zIndex: 99999}} overlay={
                <Menu>
                  {link.children.map(menuItem => (
                    <Menu.Item>
                      <MyLink to={menuItem.link}>
                        {menuItem.title}
                      </MyLink>
                    </Menu.Item>
                  ))}
                </Menu>
              }>
                <MyLink to="#" onClick={e => e.preventDefault()}>
                  {link.title} <DownOutlined />
                </MyLink>
              </Dropdown>
            </div>
          ) : (
            <div key={linkIndex} className={styles.menu_mobile_popup_item}>
              <MyLink to={link.link}>
                {link.title}
              </MyLink>
            </div>
          ))}
          <div className={styles.buttons}>
            <Button as={MyLink} href={'https://accounts.pingcap.com/login?redirect_to=https%3A//accounts.pingcap.com/discourse/sso%3Fsso%3Dbm9uY2U9ODI0YTQ2MjNmZTk2OWQ0MTVjNjMyOTc1NzE3MzUwNzgmcmV0dXJuX3Nzb191cmw9aHR0cHMlM0ElMkYlMkZhc2t0dWcuY29tJTJGc2Vzc2lvbiUyRnNzb19sb2dpbg%253D%253D%26sig%3Db85501909e73837e9c6d94a8589b14622068afc212b3120f88e838d2ff8bb010'}>
              加入 TUG
            </Button>
          </div>
        </div>
      )}
      
    </div>
  )
}
