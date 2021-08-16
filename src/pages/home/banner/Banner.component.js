import Image from 'next/image';
import React, { useRef } from 'react';
import { Carousel, Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

import * as Styled from './banner.styled';
import ActivityIcon from './activity.svg';
import ArticleIcon from './article.svg';
import AsktugIcon from './asktug.svg';
import DocIcon from './doc.svg';

const Banner = () => {
  const tooltipContainerRef = useRef(null);
  const { t } = useTranslation('page-home');

  const lang = t('banner', { returnObjects: true });
  const { navs: navsLang } = lang;

  const tooltipProps = {
    title: '37,916',
    placement: 'right',
    autoAdjustOverflow: false,
    getPopupContainer: () => tooltipContainerRef?.current,
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Row gutter={32} justify="space-between" align="middle">
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
                  <Styled.StarButtonTooltip {...tooltipProps}>
                    <Styled.TooltipContainer ref={tooltipContainerRef} />
                  </Styled.StarButtonTooltip>
                </Styled.StarButton>
              </Col>
            </Row>
          </Styled.LeftPanel>

          <Styled.RightPanel>
            <Carousel dotPosition="right">
              {[...new Array(4).keys()].map((key) => (
                <div key={key}>
                  <Image src="/images/home/banner-carousel.png" height="234" width="652" />
                </div>
              ))}
            </Carousel>
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
