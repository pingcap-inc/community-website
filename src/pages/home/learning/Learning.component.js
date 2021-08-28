import React from 'react';
import { Col } from 'antd';
import { Trans, useTranslation } from 'next-i18next';

import * as Styled from './learning.styled';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { ModuleTitle } from '~/pages/home/index.styled';
import { getImage } from '~/pages/home/index.utils';
import { useIsSmallScreen } from '~/hooks';

const Learning = () => {
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-home');

  const lang = t('learning', { returnObjects: true });

  return (
    <Styled.Container>
      <TwoColumnsLayout
        title={lang.title}
        leftPanel={
          <>
            <Styled.Logo src={getImage('learning-pingcap-education.svg')} />

            <Styled.Text>
              <Trans
                t={t}
                i18nKey={'learning.desc'}
                components={[<Styled.Link href={lang.educationLink} />, <Styled.Link href={lang.certificateLink} />]}
              />
            </Styled.Text>

            <Styled.VideoHeader>
              {lang.videosTitle}
              <Styled.FreeLabel>{lang.freeLabel}</Styled.FreeLabel>
            </Styled.VideoHeader>

            <Styled.VideosRow wrap={false}>
              <Col xs={24} md={18}>
                <Styled.VideoBoxWrapper isSmallScreen={isSmallScreen}>
                  <Styled.VideoBox isSmallScreen={isSmallScreen} src={lang.majorVideo.coverUrl}>
                    <Styled.VideoPlayButton>
                      <Styled.VideoPlayIcon color="white" height="48px" />
                    </Styled.VideoPlayButton>
                    {!isSmallScreen && (
                      <Styled.VideoCaption isSmallScreen={isSmallScreen}>{lang.majorVideo.desc}</Styled.VideoCaption>
                    )}
                  </Styled.VideoBox>
                </Styled.VideoBoxWrapper>
              </Col>
              <Col xs={0} md={6}>
                {lang.minorVideos.map((video) => (
                  <Styled.VideoBoxWrapperSmall>
                    <Styled.VideoBox isSmallScreen={isSmallScreen} src={video.coverUrl}>
                      <Styled.VideoPlayButton>
                        <Styled.VideoPlayIcon small />
                      </Styled.VideoPlayButton>
                    </Styled.VideoBox>
                  </Styled.VideoBoxWrapperSmall>
                ))}
              </Col>
            </Styled.VideosRow>

            {isSmallScreen && <Styled.Text>{lang.majorVideoDesc}</Styled.Text>}

            <Styled.More isSmallScreen={isSmallScreen}> {lang.more} </Styled.More>
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
