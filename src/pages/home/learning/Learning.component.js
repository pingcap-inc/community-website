import React from 'react';
import { Col } from 'antd';

import * as Styled from './learning.styled';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

import learn_minor_video_1_cover_image from './learn-minor-video-1-cover.jpg';
import learn_minor_video_2_cover_image from './learn-minor-video-2-cover.jpg';
import learn_minor_video_3_cover_image from './learn-minor-video-3-cover.jpg';
import LearningPingcapEducationSVG from './learning-pingcap-education.svg';

const minorVideos = [
  {
    title: 'TiDB 特有功能与事务控制',
    link: 'https://learn.pingcap.com/learner/course/750002',
    coverImage: learn_minor_video_1_cover_image,
  },
  {
    title: '在 TiDB 上开发应用的最佳实践',
    link: 'https://learn.pingcap.com/learner/course/780002',
    coverImage: learn_minor_video_2_cover_image,
  },
  {
    title: 'TiDB 数据库核心原理与架构',
    link: 'https://learn.pingcap.com/learner/course/960001',
    coverImage: learn_minor_video_3_cover_image,
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
            <Styled.Logo>
              <LearningPingcapEducationSVG />
            </Styled.Logo>

            <Styled.Text>
              <Styled.Link href={'https://cn.pingcap.com/education'}>PingCAP Education</Styled.Link>{' '}
              致力于培养开发、管理及应用分布式关系型数据库系统的一流人才。获得
              <Styled.Link href={'https://learn.pingcap.com/learner/certification-center'}>能力认证</Styled.Link>的 TiDB
              人才将在分布式数据库领域开启高亮职业生涯，拥抱无限可能。
            </Styled.Text>

            <Styled.VideoHeader>
              <Styled.TitleLink href="https://learn.pingcap.com/learner/course/600003">
                TiDB 的架构与特点
              </Styled.TitleLink>
            </Styled.VideoHeader>

            <Styled.VideosRow wrap={false}>
              <Col xs={24} md={18}>
                <Styled.VideoBoxWrapper $isSmallScreen={isSmallScreen}>
                  <Styled.VideoBox $isSmallScreen={isSmallScreen} $src={learn_minor_video_1_cover_image.src}>
                    <Styled.VideoPlayButton>
                      <Anchor href={'https://learn.pingcap.com/learner/course/600003'}>
                        <Styled.VideoPlayIcon color="white" height="48px" />
                      </Anchor>
                    </Styled.VideoPlayButton>
                    {!isSmallScreen && (
                      <Styled.VideoCaption isSmallScreen={isSmallScreen}>
                        学习构建 TiDB 分布式数据库集群的核心组件及其概念。
                      </Styled.VideoCaption>
                    )}
                  </Styled.VideoBox>
                </Styled.VideoBoxWrapper>
              </Col>
              <Col xs={0} md={6}>
                {minorVideos.map((video, idx) => (
                  <Styled.VideoBoxWrapperSmall key={idx}>
                    <Styled.VideoBox $isSmallScreen={isSmallScreen} $src={video.coverImage.src}>
                      <Styled.VideoOverlay href={video.link}>
                        <Styled.VideoOverlayText>{video.title}</Styled.VideoOverlayText>
                      </Styled.VideoOverlay>
                    </Styled.VideoBox>
                  </Styled.VideoBoxWrapperSmall>
                ))}
              </Col>
            </Styled.VideosRow>

            {isSmallScreen && <Styled.Text>学习构建 TiDB 分布式数据库集群的核心组件及其概念。</Styled.Text>}

            <Styled.More href={'https://cn.pingcap.com/courses-catalog'} $isSmallScreen={isSmallScreen}>
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
