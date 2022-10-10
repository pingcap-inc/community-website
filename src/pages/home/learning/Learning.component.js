import React from 'react';
import { Col } from 'antd';

import * as Styled from './learning.styled';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { getImage } from '~/pages/home/home.utils';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

const minorVideos = [
  {
    title: 'TiDB 系统管理基础',
    link: 'https://learn.pingcap.com/learner/course/30002',
    coverUrl: 'learn-minor-video-1-cover.jpg',
  },
  {
    title: 'TiDB 故障排除',
    link: 'https://learn.pingcap.com/learner/course/150002',
    coverUrl: 'learn-minor-video-2-cover.jpg',
  },
  {
    title: 'TiDB 高级系统管理',
    link: 'https://learn.pingcap.com/learner/course/120005',
    coverUrl: 'learn-minor-video-3-cover.jpg',
  },
];

const linkSections = [
  {
    title: '遇到问题，需要帮助？',
    links: [
      {
        link: 'https://asktug.com/',
        label: 'AskTUG 论坛',
      },
    ],
  },
  {
    title: '想获得更多补充学习资料？',
    links: [
      {
        link: 'https://docs.pingcap.com/zh/tidb/stable/quick-start-with-tidb',
        label: '快速上手指南',
      },
      {
        link: 'https://docs.pingcap.com/zh/tidb/stable/tidb-faq',
        label: '常见问题解答',
      },
      {
        link: 'https://docs.pingcap.com/zh/tidb/stable/release-notes',
        label: '版本发布历史',
      },
      {
        link: 'https://docs.pingcap.com/zh',
        label: '更多文档资料',
      },
    ],
  },
  {
    title: '想了解更多实践案例？',
    links: [
      {
        link: '/blog',
        label: '专栏',
      },
    ],
  },
  {
    title: '想和其他伙伴交流学习？',
    links: [
      {
        link: '/tug',
        label: 'TiDB User Group',
      },
      {
        link: '/events',
        label: '参与活动',
      },
    ],
  },
];

const Learning = () => {
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container id="learning" isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        title={'如何使用 TiDB'}
        leftPanel={
          <>
            <Styled.Logo src={getImage('learning-pingcap-education.svg')} alt={'PingCAP Education'} />

            <Styled.Text>
              <Styled.Link href={'https://pingcap.com/zh/education'} />
              <Styled.Link href={'https://learn.pingcap.com/learner/certification-center'} />
            </Styled.Text>

            <Styled.VideoHeader>
              <Styled.TitleLink href="https://learn.pingcap.com/learner/course/6">
                Get Started with TiDB
              </Styled.TitleLink>
            </Styled.VideoHeader>

            <Styled.VideosRow wrap={false}>
              <Col xs={24} md={18}>
                <Styled.VideoBoxWrapper $isSmallScreen={isSmallScreen}>
                  <Styled.VideoBox $isSmallScreen={isSmallScreen} src={getImage('learn-main-video-cover.jpg')}>
                    <Styled.VideoPlayButton>
                      <Anchor href={'https://learn.pingcap.com/learner/course/6'}>
                        <Styled.VideoPlayIcon color="white" height="48px" />
                      </Anchor>
                    </Styled.VideoPlayButton>
                    {!isSmallScreen && (
                      <Styled.VideoCaption isSmallScreen={isSmallScreen}>
                        学习 TiDB 由来、发展与演进，理解 TiDB 5.0
                        数据库的体系架构、技术创新、关键特性、应用案例与适用场景。
                      </Styled.VideoCaption>
                    )}
                  </Styled.VideoBox>
                </Styled.VideoBoxWrapper>
              </Col>
              <Col xs={0} md={6}>
                {minorVideos.map((video, idx) => (
                  <Styled.VideoBoxWrapperSmall key={idx}>
                    <Styled.VideoBox $isSmallScreen={isSmallScreen} src={getImage(video.coverUrl)}>
                      <Styled.VideoOverlay href={video.link}>
                        <Styled.VideoOverlayText>{video.title}</Styled.VideoOverlayText>
                      </Styled.VideoOverlay>
                    </Styled.VideoBox>
                  </Styled.VideoBoxWrapperSmall>
                ))}
              </Col>
            </Styled.VideosRow>

            {isSmallScreen && (
              <Styled.Text>
                学习 TiDB 由来、发展与演进，理解 TiDB 5.0 数据库的体系架构、技术创新、关键特性、应用案例与适用场景。
              </Styled.Text>
            )}

            <Styled.More href={'https://learn.pingcap.com/learner/home'} $isSmallScreen={isSmallScreen}>
              更多课程
            </Styled.More>
          </>
        }
        rightPanel={
          <>
            {linkSections.map((section, idx) => (
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
