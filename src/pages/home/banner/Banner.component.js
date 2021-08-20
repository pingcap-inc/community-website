import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { Col, Grid, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import { useMount } from 'ahooks';

import * as Styled from './banner.styled';
import ActivityIcon from './activity.svg';
import ArticleIcon from './article.svg';
import AsktugIcon from './asktug.svg';
import DocIcon from './doc.svg';

const { useBreakpoint } = Grid;

const Banner = () => {
  const bp = useBreakpoint();
  const [mounted, setMounted] = useState(false);
  const tooltipContainerRef = useRef(null);
  const { t } = useTranslation('page-home');

  // Solving the warning of "Expected server HTML to contain a matching <tag>"
  // because of AntD Tooltip.
  // More details: https://github.com/vercel/next.js/discussions/17443
  useMount(() => {
    setMounted(true);
  });

  const lang = t('banner', { returnObjects: true });
  const { navs: navsLang } = lang;
  const isSmallScreen = !bp.md;

  const tooltipProps = {
    title: '37,916',
    placement: 'right',
    autoAdjustOverflow: false,
    getPopupContainer: () => tooltipContainerRef?.current,
  };

  return (
    <Styled.Container>
      <Styled.Content isSmallScreen={isSmallScreen}>
        <Row gutter={[32, 64]} justify="space-between" align="middle">
          <Styled.LeftPanel>
            <Styled.Logo />
            <Styled.Intro>{lang.intro}</Styled.Intro>
            <Row gutter={32} justify="space-between" align="middle">
              <Col flex="none">
                <Styled.TryButton>{lang.tryButton}</Styled.TryButton>
              </Col>
              <Col flex="auto">
                <Styled.StarButton>
                  <GithubOutlined />
                  Star
                  {mounted && (
                    <Styled.StarButtonTooltip {...tooltipProps}>
                      <Styled.TooltipContainer ref={tooltipContainerRef} />
                    </Styled.StarButtonTooltip>
                  )}
                </Styled.StarButton>
              </Col>
            </Row>
          </Styled.LeftPanel>

          <Styled.RightPanel>
            <Styled.Carousel isSmallScreen={isSmallScreen}>
              {[...new Array(4).keys()].map((key) => (
                <div key={key}>
                  <Image src="/images/home/banner-carousel.png" height="234" width="652" />
                </div>
              ))}
            </Styled.Carousel>
          </Styled.RightPanel>
        </Row>

        <Styled.Navs>
          <Styled.NavItem>
            <DocIcon />
            {navsLang.doc}
          </Styled.NavItem>
          <Styled.NavItem>
            <AsktugIcon />
            {navsLang.asktug}
          </Styled.NavItem>
          <Styled.NavItem>
            <ArticleIcon />
            {navsLang.article}
          </Styled.NavItem>
          <Styled.NavItem>
            <ActivityIcon />
            {navsLang.activity}
          </Styled.NavItem>
        </Styled.Navs>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
