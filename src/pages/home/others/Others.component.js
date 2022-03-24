import React, {useContext} from 'react';
import {Col, Row} from 'antd';
import {useTranslation} from 'next-i18next';

import * as Styled from './others.styled';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import VideoThumbnail from './videoThumbnail';
import {PageDataContext} from '~/context';
import {getImage} from '~/pages/home/home.utils';
import {useIsSmallScreen} from '~/hooks';

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
    <Styled.Container $isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        title={lang.title}
        leftPanel={
          <>
            <Styled.ModuleTitle>
              <Styled.Subtitle>{lang.videos}</Styled.Subtitle>
              <Styled.Link href="https://space.bilibili.com/86485707">{lang.more}</Styled.Link>
            </Styled.ModuleTitle>
            <Row gutter={16}>
              {data.videos.slice(0, isSmallScreen ? 3 : 6).map((video, idx) => (
                <Col key={idx} xs={24} md={8}>
                  <VideoThumbnail {...video} $isSmallScreen={isSmallScreen} />
                </Col>
              ))}
            </Row>
            <Styled.Divider />
            <Styled.ModuleTitle>
              <Styled.Subtitle> {jobsLang.subtitle} </Styled.Subtitle>
              <Styled.Link href="https://tidb-jobs.pingcap.com/"> {lang.more} </Styled.Link>
            </Styled.ModuleTitle>
            <Row>
              <Styled.Text>{jobsLang.desc}</Styled.Text>
            </Row>
            <Styled.LogosBox gutter={36} justify="left" $isSmallScreen={isSmallScreen}>
              {jobLogos.map((url, idx) => (
                <Col key={idx}>
                  <Styled.Logo height={36} src={url} />
                </Col>
              ))}
            </Styled.LogosBox>
          </>
        }
        rightPanel={
          <>
            <Styled.Subtitle>{supportLang.subtitle}</Styled.Subtitle>
            <Styled.LogoWrapper>
              <Styled.Logo height={36} src={getImage('others-pingcap-logo.svg')} />
            </Styled.LogoWrapper>
            <Styled.SmallerText>
              <Styled.SmallerLink href={supportLang.link}>{supportLang.name}</Styled.SmallerLink> {supportLang.desc}
            </Styled.SmallerText>
            <Styled.Divider />
            <Styled.Subtitle>{collaborationLang.subtitle}</Styled.Subtitle>
            <Styled.LogoWrapper>
              <Styled.Logo height={64} src={getImage('others-flink-logo.png')} />
            </Styled.LogoWrapper>
            <Styled.SmallerText>
              <Styled.SmallerLink href={collaborationLang.link1}>{collaborationLang.name1}</Styled.SmallerLink>
              {collaborationLang.desc1}
            </Styled.SmallerText>
            <Styled.LogoWrapper>
              <Styled.Logo height={36} src={getImage('others-action-logo.png')} />
            </Styled.LogoWrapper>
            <Styled.SmallerText>
              <Styled.SmallerLink href={collaborationLang.link2}>{collaborationLang.name2}</Styled.SmallerLink>
              {collaborationLang.desc2}
            </Styled.SmallerText>
            <Styled.Divider />
            <Styled.SmallerText>
              {contactLang.label}
              <Styled.SmallerLink href={contactLang.link}>{contactLang.linkText}</Styled.SmallerLink>！
            </Styled.SmallerText>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Others;
