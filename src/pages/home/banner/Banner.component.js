import React from 'react';
import { Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

import * as Styled from './banner.styled';

const Banner = () => {
  const { t } = useTranslation('page-home');

  const lang = t('banner', { returnObjects: true });

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
                </Styled.StarButton>
              </Col>
            </Row>
          </Styled.LeftPanel>

          <Styled.RightPanel>Image</Styled.RightPanel>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
