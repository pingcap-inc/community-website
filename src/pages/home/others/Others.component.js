import React from 'react';
import { useTranslation } from 'next-i18next';
import { Col, Row } from 'antd';

import * as Styled from './others.styled';
import { useIsSmallScreen } from '~/hooks';
import VideoThumbnail from './videoThumbnail';
import { mockVideos } from './others.mock';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { ModuleTitle } from '../index.styled';
import { Link } from '~/components';

const jobsLogoList = ['zhihu', 'xiaomi', 'iqiyi', 'ucloud', 'bilibili', 'pingcap'].map(
  (el) => `/images/home/others-${el}-logo.png`
);

const Others = () => {
  const { t } = useTranslation('page-home');

  const lang = t('others', { returnObjects: true });
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsLayout
        title={lang.title}
        leftPanel={
          <>
            <ModuleTitle>
              <Styled.Subtitle> {lang.videos} </Styled.Subtitle>
              <Link> {lang.more} </Link>
            </ModuleTitle>
            <Row gutter={16}>
              {mockVideos.slice(0, isSmallScreen ? 3 : 6).map((meta) => (
                <Col xs={24} md={8}>
                  <VideoThumbnail
                    isSmallScreen={isSmallScreen}
                    coverSrc={meta.cover_image}
                    title={meta.title}
                    views={meta.play_count}
                    date={meta.created.split('-').slice(1).join('-')}
                    length={meta.length}
                  />
                </Col>
              ))}
            </Row>
            <Styled.Divider />
            <ModuleTitle>
              <Styled.Subtitle> {lang.jobs.subtitle} </Styled.Subtitle>
              <Link> {lang.more} </Link>
            </ModuleTitle>
            <Row>
              <Styled.Text> {lang.jobs.desc} </Styled.Text>
            </Row>
            <Styled.LogosBox gutter={16} justify="center">
              {jobsLogoList.map((url) => (
                <Col>
                  <Styled.Logo src={url} />
                </Col>
              ))}
            </Styled.LogosBox>
          </>
        }
        rightPanel={
          <>
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
              <Link> {lang.contact.linkText} </Link> !
            </Styled.Text>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Others;
