import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './others.styled';
import { useIsSmallScreen } from '../index.hooks';
import { Col, Row } from 'antd';
import VideoThumbnail from './videoThumbnail';
import { mockVideos } from './Others.mock';

const jobsLogoList = ['zhihu', 'xiaomi', 'iqiyi', 'ucloud', 'bilibili', 'pingcap'].map(
  (el) => `/images/home/others-${el}-logo.png`
);

const Others = () => {
  const { t } = useTranslation('page-home');

  const lang = t('others', { returnObjects: true });
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Title> {lang.title} </Styled.Title>
      <Row gutter={72}>
        <Col xs={24} lg={16}>
          <Styled.SubsectionHeaderBox>
            <Styled.Subtitle> {lang.videos} </Styled.Subtitle>
            <Styled.More> {lang.more} </Styled.More>
          </Styled.SubsectionHeaderBox>
          <Row gutter={24}>
            {mockVideos.slice(0, isSmallScreen ? 3 : 6).map((meta) => (
              <Col xs={24} md={8}>
                <VideoThumbnail
                  isSmallScreen={isSmallScreen}
                  coverSrc={meta.coverSrc}
                  title={meta.title}
                  views={meta.views}
                  date={meta.date}
                />
              </Col>
            ))}
          </Row>
          <Styled.Divider />
          <Styled.SubsectionHeaderBox>
            <Styled.Subtitle> {lang.jobs.subtitle} </Styled.Subtitle>
            <Styled.More> {lang.more} </Styled.More>
          </Styled.SubsectionHeaderBox>
          <Row>
            <Styled.Text> {lang.jobs.desc} </Styled.Text>
          </Row>
          <Styled.LogosBox gutter={32} justify={'center'}>
            {jobsLogoList.map((url) => (
              <Col>
                <Styled.Logo src={url} />
              </Col>
            ))}
          </Styled.LogosBox>
        </Col>
        <Col xs={24} lg={8}>
          {/* business support */}
          <Styled.Subtitle> {lang.businessSupport.subtitle} </Styled.Subtitle>
          <Styled.LogoWrapper>
            <Styled.Logo src={'/images/home/others-pingcap-logo.svg'} />
          </Styled.LogoWrapper>
          <Styled.Text> {lang.businessSupport.desc} </Styled.Text>
          <Styled.Divider />
          <Styled.Subtitle> {lang.communityCollaboration.subtitle} </Styled.Subtitle>
          <Styled.LogoWrapper>
            <Styled.Logo src={'/images/home/others-tikv-logo.svg'} />
          </Styled.LogoWrapper>
          <Styled.Text> {lang.communityCollaboration.tikvDesc} </Styled.Text>
          <Styled.LogoWrapper>
            <Styled.Logo src={'/images/home/others-chaos-mesh-logo.svg'} />
          </Styled.LogoWrapper>
          <Styled.Text> {lang.communityCollaboration.chaosMeshDesc} </Styled.Text>
          <Styled.Divider />
          <Styled.Text>
            {lang.contact.label}
            <Styled.LinkText> {lang.contact.linkText} </Styled.LinkText> !
          </Styled.Text>
        </Col>
      </Row>
    </Styled.Container>
  );
};

export default Others;
