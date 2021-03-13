import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useDebounce } from 'ahooks';

import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import MyLink from 'components/MyLink';
import i18n from 'data/navbar';
import styles from './Navbar.module.scss';
import tugConfig from 'tug.config';

const { joinTUGLink } = tugConfig;

export default function Navbar({ initTransparent, forceNonTransparent }) {
  // const intl = useIntl()
  // const locale = intl.locale
  const locale = 'en';

  const data = i18n[locale];
  initTransparent = forceNonTransparent ? false : initTransparent;

  const [transparent, setTransparent] = useState(initTransparent);
  const transparentDebounced = useDebounce(transparent, { wait: 100 });
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    if (forceNonTransparent) {
      return () => {};
    }

    const eventName = 'scroll';
    const scrollListener = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setTransparent(scrollTop <= 0);
    };

    scrollListener();

    window.addEventListener(eventName, scrollListener);
    return () => {
      window.removeEventListener(eventName, scrollListener);
    };
  }, [forceNonTransparent]);

  return (
    <div className={classNames(styles.wrapper, { [styles.wrapper_transparent]: transparentDebounced })}>
      <Container fluid className={styles.container}>
        <MyLink to="/">
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src="/images/logo.svg" alt="TUG" />
            </div>
            {/*<div className={classNames(styles.title, {[styles.title_transparent]: transparentDebounced})}>*/}
            {/*  {data.title}*/}
            {/*</div>*/}
          </div>
        </MyLink>

        <div className={styles.right}>
          <div className={styles.menu}>
            {data.links.map((link, linkIndex) =>
              link.children ? (
                <div
                  key={linkIndex}
                  className={classNames(styles.menu_item, { [styles.menu_item_transparent]: transparentDebounced })}
                >
                  <Dropdown
                    overlayStyle={{ zIndex: 99999 }}
                    overlay={
                      <Menu style={{ right: 12 }}>
                        {link.children.map((menuItem, menuItemIndex) => (
                          <Menu.Item key={menuItemIndex}>
                            <MyLink to={menuItem.link}>{menuItem.title}</MyLink>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                  >
                    <MyLink to="#" onClick={(e) => e.preventDefault()}>
                      {link.title} <DownOutlined />
                    </MyLink>
                  </Dropdown>
                </div>
              ) : (
                <div
                  key={linkIndex}
                  className={classNames(styles.menu_item, { [styles.menu_item_transparent]: transparentDebounced })}
                >
                  <MyLink to={link.link}>{link.title}</MyLink>
                </div>
              )
            )}
            <div className={styles.buttons}>
              <Button href={joinTUGLink}>加入 TUG</Button>
            </div>
          </div>

          <div className={styles.menu_mobile}>
            <MenuOutlined onClick={() => setIsPopup((prevState) => !prevState)} />
          </div>
        </div>
      </Container>

      {isPopup && (
        <div className={styles.menu_mobile_popup}>
          {data.links.map((link, linkIndex) =>
            link.children ? (
              <div key={linkIndex} className={styles.menu_mobile_popup_item}>
                <Dropdown
                  overlayStyle={{ zIndex: 99999 }}
                  overlay={
                    <Menu>
                      {link.children.map((menuItem) => (
                        <Menu.Item>
                          <MyLink to={menuItem.link}>{menuItem.title}</MyLink>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                >
                  <MyLink to="#" onClick={(e) => e.preventDefault()}>
                    {link.title} <DownOutlined />
                  </MyLink>
                </Dropdown>
              </div>
            ) : (
              <div key={linkIndex} className={styles.menu_mobile_popup_item}>
                <MyLink to={link.link}>{link.title}</MyLink>
              </div>
            )
          )}
          <div className={styles.buttons}>
            <Button href={joinTUGLink}>加入 TUG</Button>
          </div>
        </div>
      )}
    </div>
  );
}
