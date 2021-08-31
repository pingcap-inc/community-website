import Image from 'next/image';
import React, { useContext, useState, useRef } from 'react';
import { Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './banner.styled';
import ActivityIcon from './activity.svg';
import ArticleIcon from './article.svg';
import AsktugIcon from './asktug.svg';
import DocIcon from './doc.svg';
import { PageDataContext } from '~/context';
import { common as commonUtils, link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

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
  const router = useRouter();
  const tooltipContainerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation('page-home');
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();

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

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
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
                <Styled.TryButton onClick={onClick('https://pingcap.com/zh/product-community/')}>
                  {lang.tryButton}
                </Styled.TryButton>
              </Col>
              <Col flex="auto">
                <Styled.StarButton onClick={onClick('https://github.com/pingcap/tidb')}>
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
              {data.promotions.map(({ id, title, link, image }) => {
                const imgProps = commonUtils.getStrapiImgProps(image);

                return (
                  <div key={id} onClick={onClick(link)}>
                    <Image alt={title} {...imgProps} />
                  </div>
                );
              })}
            </Styled.Carousel>
          </Styled.RightPanel>
        </Row>

        <Styled.Navs $isSmallScreen={isSmallScreen}>
          {navItems.map(({ icon: Icon, langKey }, idx) => (
            <Styled.NavItem key={idx}>
              <Icon />
              <span>{navsLang[langKey]}</span>
            </Styled.NavItem>
          ))}
        </Styled.Navs>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
