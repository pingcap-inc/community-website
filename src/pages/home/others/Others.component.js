import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './others.styled';
import { useIsSmallScreen } from '../index.hooks';
import { Col, Row } from 'antd';
import VideoThumbnail from './videoThumbnail';

const Others = () => {
  const { t } = useTranslation('page-home');

  const lang = t('others', { returnObjects: true });
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Title> {lang.title} </Styled.Title>
      <Row>
        <Col xs={24} lg={16}>
          <Styled.SubsectionHeaderBox>
            <Styled.Subtitle> {lang.videos} </Styled.Subtitle>
            <Styled.More> {lang.more} </Styled.More>
          </Styled.SubsectionHeaderBox>
          <Row gutter={24}>
            {/* TODO: Add data source */}
            {[1, 2, 3, 4, 5, 6].map((_) => (
              <Col xs={24} sm={8}>
                <VideoThumbnail isSmallScreen={isSmallScreen} />
              </Col>
            ))}
          </Row>
          <Styled.SubsectionHeaderBox>
            <Styled.Subtitle> {lang.jobs.subtitle} </Styled.Subtitle>
            <Styled.More> {lang.more} </Styled.More>
          </Styled.SubsectionHeaderBox>
          <Row>
            <Styled.Text> {lang.jobs.desc} </Styled.Text>
          </Row>
          <Styled.LogosBox gutter={32} justify={'center'}>
            <Col>
              <Styled.Logo src={'/images/home/iqiyi.png'}></Styled.Logo>
            </Col>
            <Col>
              <Styled.Logo src={'/images/home/bilibili.png'}></Styled.Logo>
            </Col>
            <Col>
              <Styled.Logo src={'/images/home/ucloud.png'}></Styled.Logo>
            </Col>
            <Col>
              <Styled.Logo src={'/images/home/xiaomi.png'}></Styled.Logo>
            </Col>
            <Col>
              <Styled.Logo src={'/images/home/zhihu.png'}></Styled.Logo>
            </Col>
            <Col>
              <Styled.Logo src={'/images/home/pingcap.png'}></Styled.Logo>
            </Col>
          </Styled.LogosBox>
        </Col>
        <Col xs={24} lg={8}>
          TOBE CONTINUED
        </Col>
      </Row>
    </Styled.Container>
  );
};

export default Others;
