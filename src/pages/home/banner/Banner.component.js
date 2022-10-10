import React, { useContext, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';

import { PageDataContext } from '~/context';
import { common as commonUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

import * as Styled from './banner.styled';
import ActivityIcon from './activity.svg';
import ArticleIcon from './article.svg';
import AsktugIcon from './asktug.svg';
import DocIcon from './doc.svg';

const navItems = [
  {
    icon: DocIcon,
    langKey: 'doc',
    label: '文档手册',
    link: 'https://docs.pingcap.com/zh',
  },
  {
    icon: AsktugIcon,
    langKey: 'asktug',
    label: '问答',
    link: 'https://asktug.com/',
  },
  {
    icon: ArticleIcon,
    langKey: 'article',
    label: '文章',
    link: '/blog',
  },
  {
    icon: ActivityIcon,
    langKey: 'activity',
    label: '活动',
    link: '/events',
  },
];

const Banner = () => {
  const tooltipContainerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { data } = useContext(PageDataContext);
  const { isSmallScreen, breakpoint } = useIsSmallScreen();

  // Solving the warning of "Expected server HTML to contain a matching <tag>"
  // because of AntD Tooltip.
  // More details: https://github.com/vercel/next.js/discussions/17443
  useMount(() => {
    setMounted(true);
  });

  const tooltipProps = {
    title: new Intl.NumberFormat('en-US').format(data.githubInfo.starNum),
    placement: 'right',
    autoAdjustOverflow: false,
    getPopupContainer: () => tooltipContainerRef?.current,
  };

  const height = (() => {
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
  })();

  return (
    <Styled.Container>
      <Styled.Content isSmallScreen={isSmallScreen}>
        <Row gutter={!isSmallScreen && [32, 64]} justify={isSmallScreen ? 'center' : 'space-between'} align="middle">
          <Styled.LeftPanel>
            <Styled.Logo />
            <Styled.Intro>TiDB 是一款同时支持在线事务处理与在线分析处理 (HTAP) 的融合型分布式数据库产品。</Styled.Intro>
            <Row gutter={32} justify={isSmallScreen ? 'space-around' : 'space-between'} align="bottom">
              <Col flex="none">
                <Anchor href={'https://pingcap.com/zh/product-community/'}>
                  <Styled.TryButton>立即体验</Styled.TryButton>
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
            <Styled.Carousel isSmallScreen={isSmallScreen} height={height}>
              {data.promotions.map(({ id, title, link, image }) => {
                const imgProps = commonUtils.getStrapiImgProps(image);
                const props = {
                  title,
                  link,
                  image: imgProps.src,
                  height,
                };

                return (
                  <Anchor key={id} href={link}>
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
          {navItems.map(({ icon: Icon, label, link }) => (
            <Col span={6} key={label}>
              <Styled.NavItem href={link}>
                <Icon />
                <span>{label}</span>
              </Styled.NavItem>
            </Col>
          ))}
        </Styled.Navs>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
