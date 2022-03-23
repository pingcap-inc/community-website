import React, {useContext, useRef, useState} from 'react';
import {Col, Row} from 'antd';
import {GithubOutlined} from '@ant-design/icons';
import {useMount} from 'ahooks';
import {useTranslation} from 'next-i18next';

import * as Styled from './banner.styled';
import ActivityIcon from './activity.svg';
import ArticleIcon from './article.svg';
import AsktugIcon from './asktug.svg';
import DocIcon from './doc.svg';
import {PageDataContext} from '~/context';
import {common as commonUtils} from '~/utils';
import {useIsSmallScreen} from '~/hooks';
import Anchor from '~/components/Anchor';

const navItems = [
  {
    icon: DocIcon,
    langKey: 'doc',
  },
  {
    icon: AsktugIcon,
    langKey: 'asktug',
  },
  {
    icon: ArticleIcon,
    langKey: 'article',
  },
  {
    icon: ActivityIcon,
    langKey: 'activity',
  },
];

const Banner = () => {
  const tooltipContainerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation('page-home');
  const { data } = useContext(PageDataContext);
  const { isSmallScreen, breakpoint } = useIsSmallScreen();

  // Solving the warning of "Expected server HTML to contain a matching <tag>"
  // because of AntD Tooltip.
  // More details: https://github.com/vercel/next.js/discussions/17443
  useMount(() => {
    setMounted(true);
  });

  const lang = t('banner', { returnObjects: true });
  const { navs: navsLang } = lang;

  const tooltipProps = {
    title: new Intl.NumberFormat('en-US').format(data.githubInfo.starNum),
    placement: 'right',
    autoAdjustOverflow: false,
    getPopupContainer: () => tooltipContainerRef?.current,
  };

  return (
    <Styled.Container>
      <Styled.Content isSmallScreen={isSmallScreen}>
        <Row gutter={!isSmallScreen && [32, 64]} justify={isSmallScreen ? 'center' : 'space-between'} align="middle">
          <Styled.LeftPanel>
            <Styled.Logo />
            <Styled.Intro>{lang.intro}</Styled.Intro>
            <Row gutter={32} justify={isSmallScreen ? 'space-around' : 'space-between'} align="bottom">
              <Col flex="none">
                <Anchor href={'https://pingcap.com/zh/product-community/'}>
                  <Styled.TryButton>{lang.tryButton}</Styled.TryButton>
                </Anchor>
              </Col>
              <Col flex="auto">
                <Anchor href={'https://github.com/pingcap/tidb'}>
                  <Styled.StarButton>
                    <GithubOutlined />
                    Star
                    {mounted && (
                      <Styled.StarButtonTooltip {...tooltipProps}>
                        <Styled.TooltipContainer ref={tooltipContainerRef} />
                      </Styled.StarButtonTooltip>
                    )}
                  </Styled.StarButton>
                </Anchor>
              </Col>
            </Row>
          </Styled.LeftPanel>

          <Styled.RightPanel>
            <Styled.Carousel isSmallScreen={isSmallScreen}>
              {data.promotions.map(({ id, title, link, image }) => {
                const imgProps = commonUtils.getStrapiImgProps(image);
                const props = {
                  title,
                  key: id,
                  link,
                  image: imgProps.src,
                  height: (() => {
                    if (breakpoint.lg) {
                      return 250;
                    }
                    if (breakpoint.md) {
                      return 200;
                    }
                    if (breakpoint.sm) {
                      return 250;
                    }
                    if (breakpoint.xs) {
                      return 200;
                    }
                  })(),
                };

                return (
                  <Anchor href={link}>
                    <Styled.Promotion {...props}>
                      <Styled.PromotionOverlay>{title}</Styled.PromotionOverlay>
                    </Styled.Promotion>
                  </Anchor>
                );
              })}
            </Styled.Carousel>
          </Styled.RightPanel>
        </Row>

        <Styled.Navs $isSmallScreen={isSmallScreen}>
          {navItems.map(({ icon: Icon, langKey }) => (
            <Col span={6} key={langKey}>
              <Styled.NavItem href={navsLang[langKey].link}>
                <Icon />
                <span>{navsLang[langKey].label}</span>
              </Styled.NavItem>
            </Col>
          ))}
        </Styled.Navs>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
