import React, { useContext } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';

import * as Styled from './others.styled';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import VideoThumbnail from './videoThumbnail';
import { Link } from '~/components';
import { ModuleTitle } from '~/pages/home/index.styled';
import { PageDataContext } from '~/context';
import { getImage } from '~/pages/home/index.utils';
import { useIsSmallScreen } from '~/hooks';

const jobLogos = ['zhihu', 'xiaomi', 'iqiyi', 'ucloud', 'bilibili', 'pingcap'].map((el) =>
  getImage(`others-${el}-logo.png`)
);

const Others = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-home');

  const lang = t('others', { returnObjects: true });
  const {
    jobs: jobsLang,
    businessSupport: supportLang,
    communityCollaboration: collaborationLang,
    contact: contactLang,
  } = lang;

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsLayout
        title={lang.title}
        leftPanel={
          <>
            <ModuleTitle>
              <Styled.Subtitle>{lang.videos}</Styled.Subtitle>
              <Link>{lang.more}</Link>
            </ModuleTitle>
            <Row gutter={16}>
              {data.videos.slice(0, isSmallScreen ? 3 : 6).map((video, idx) => (
                <Col key={idx} xs={24} md={8}>
                  <VideoThumbnail {...video} isSmallScreen={isSmallScreen} />
                </Col>
              ))}
            </Row>
            <Styled.Divider />
            <ModuleTitle>
              <Styled.Subtitle> {jobsLang.subtitle} </Styled.Subtitle>
              <Link> {lang.more} </Link>
            </ModuleTitle>
            <Row>
              <Styled.Text> {jobsLang.desc} </Styled.Text>
            </Row>
            <Styled.LogosBox gutter={16} justify="center">
              {jobLogos.map((url, idx) => (
                <Col key={idx}>
                  <Styled.Logo src={url} />
                </Col>
              ))}
            </Styled.LogosBox>
          </>
        }
        rightPanel={
          <>
            <Styled.Subtitle>{supportLang.subtitle}</Styled.Subtitle>
            <Styled.LogoWrapper>
              <Styled.Logo src={getImage('others-pingcap-logo.svg')} />
            </Styled.LogoWrapper>
            <Styled.Text>{supportLang.desc}</Styled.Text>
            <Styled.Divider />
            <Styled.Subtitle>{collaborationLang.subtitle}</Styled.Subtitle>
            <Styled.LogoWrapper>
              <Styled.Logo src={getImage('others-tikv-logo.svg')} />
            </Styled.LogoWrapper>
            <Styled.Text>{collaborationLang.tikvDesc}</Styled.Text>
            <Styled.LogoWrapper>
              <Styled.Logo src={getImage('others-chaos-mesh-logo.svg')} />
            </Styled.LogoWrapper>
            <Styled.Text>{collaborationLang.chaosMeshDesc}</Styled.Text>
            <Styled.Divider />
            <Styled.Text>
              {contactLang.label}
              <Link>{contactLang.linkText}</Link>！
            </Styled.Text>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Others;
