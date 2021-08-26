import React from 'react';
import { Trans, useTranslation } from 'next-i18next';

import * as Styled from './learning.styled';
import TwoColumnsLayout from '../twoColumsLayout';
import { ModuleTitle } from '../index.styled';
import { Col } from 'antd';
import { useIsSmallScreen } from '../../../hooks';

const Learning = () => {
  const { t } = useTranslation('page-home');

  const lang = t('learning', { returnObjects: true });

  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container>
      <TwoColumnsLayout
        title={lang.title}
        leftPanel={
          <>
            <Styled.Logo src={'/images/home/learning-pingcap-education.svg'} />
            <Styled.Text>
              <Trans
                t={t}
                i18nKey={'learning.desc'}
                components={[<Styled.Link href={lang.educationLink} />, <Styled.Link href={lang.certificateLink} />]}
              />
            </Styled.Text>
            <Styled.VideoHeader>
              {' '}
              {lang.videosTitle}
              <Styled.FreeLabel>{lang.freeLabel}</Styled.FreeLabel>
            </Styled.VideoHeader>
            <Styled.VideosRow wrap={false}>
              <Col xs={24} md={18}>
                <Styled.VideoBoxWrapper isSmallScreen={isSmallScreen}>
                  <Styled.VideoBox isSmallScreen={isSmallScreen}>
                    <Styled.VideoPlayButton>
                      <Styled.VideoPlayIcon color={'white'} height={'48px'} />
                    </Styled.VideoPlayButton>
                    {!isSmallScreen && (
                      <Styled.VideoCaption isSmallScreen={isSmallScreen}>{lang.majorVideoDesc}</Styled.VideoCaption>
                    )}
                  </Styled.VideoBox>
                </Styled.VideoBoxWrapper>
              </Col>
              <Col xs={0} md={6}>
                {[1, 2, 3].map((video) => (
                  <Styled.VideoBoxWrapperSmall>
                    <Styled.VideoBox isSmallScreen={isSmallScreen}>
                      <Styled.VideoPlayButton>
                        <Styled.VideoPlayIconSmall color={'white'} height={'48px'} />
                      </Styled.VideoPlayButton>
                    </Styled.VideoBox>
                  </Styled.VideoBoxWrapperSmall>
                ))}
              </Col>
            </Styled.VideosRow>
            {isSmallScreen && <Styled.Text>{lang.majorVideoDesc}</Styled.Text>}

            <Styled.More isSmallScreen={isSmallScreen}>更多课程</Styled.More>
          </>
        }
        rightPanel={
          <>
            {lang.linkSections.map((section) => (
              <>
                <ModuleTitle>{section.title}</ModuleTitle>
                <Styled.LinksRow gutter={16}>
                  {section.links.map((link) => (
                    <Styled.LinkWrapper xs={24} md={12} lg={8}>
                      <Styled.Link href={link.link}> {link.label} </Styled.Link>
                    </Styled.LinkWrapper>
                  ))}
                </Styled.LinksRow>
              </>
            ))}
          </>
        }
      />
    </Styled.Container>
  );
};

export default Learning;
