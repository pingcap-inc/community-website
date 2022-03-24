import React from 'react';
import {Col} from 'antd';
import {Trans, useTranslation} from 'next-i18next';

import * as Styled from './learning.styled';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import {getImage} from '~/pages/home/home.utils';
import {useIsSmallScreen} from '~/hooks';
import Anchor from '~/components/Anchor';

const Learning = () => {
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-home');

  const lang = t('learning', { returnObjects: true });
  const { majorVideo: majorVideoLang } = lang;

  return (
    <Styled.Container id="learning" isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
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
              <Styled.TitleLink href="https://learn.pingcap.com/learner/course/6">{lang.videosTitle}</Styled.TitleLink>
            </Styled.VideoHeader>

            <Styled.VideosRow wrap={false}>
              <Col xs={24} md={18}>
                <Styled.VideoBoxWrapper $isSmallScreen={isSmallScreen}>
                  <Styled.VideoBox $isSmallScreen={isSmallScreen} src={majorVideoLang.coverUrl}>
                    <Styled.VideoPlayButton>
                      <Anchor href={majorVideoLang.link}>
                        <Styled.VideoPlayIcon color="white" height="48px" />
                      </Anchor>
                    </Styled.VideoPlayButton>
                    {!isSmallScreen && (
                      <Styled.VideoCaption isSmallScreen={isSmallScreen}>{majorVideoLang.desc}</Styled.VideoCaption>
                    )}
                  </Styled.VideoBox>
                </Styled.VideoBoxWrapper>
              </Col>
              <Col xs={0} md={6}>
                {lang.minorVideos.map((video, idx) => (
                  <Styled.VideoBoxWrapperSmall key={idx}>
                    <Styled.VideoBox $isSmallScreen={isSmallScreen} src={video.coverUrl}>
                      <Styled.VideoOverlay href={video.link}>
                        <Styled.VideoOverlayText>{video.title}</Styled.VideoOverlayText>
                      </Styled.VideoOverlay>
                    </Styled.VideoBox>
                  </Styled.VideoBoxWrapperSmall>
                ))}
              </Col>
            </Styled.VideosRow>

            {isSmallScreen && <Styled.Text>{majorVideoLang.desc}</Styled.Text>}

            <Styled.More href={lang.moreLink} $isSmallScreen={isSmallScreen}>
              {lang.more}
            </Styled.More>
          </>
        }
        rightPanel={
          <>
            {lang.linkSections.map((section, idx) => (
              <div key={idx}>
                <Styled.ModuleTitle>{section.title}</Styled.ModuleTitle>

                <Styled.LinksRow gutter={32}>
                  {section.links.map((link, linkIdx) => (
                    <Styled.LinkWrapper key={linkIdx} flex={'none'}>
                      <Styled.Link href={link.link}>{link.label}</Styled.Link>
                    </Styled.LinkWrapper>
                  ))}
                </Styled.LinksRow>
              </div>
            ))}
          </>
        }
      />
    </Styled.Container>
  );
};

export default Learning;
