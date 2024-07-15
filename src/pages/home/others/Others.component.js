import React, { useContext } from 'react';
import { Col, Row } from 'antd';
import Image from 'next/image';

import TwoColumnsSection from '~/layouts/twoColumnsSection';
import VideoThumbnail from './videoThumbnail';
import { PageDataContext } from '~/context';
import { useIsSmallScreen } from '~/hooks';

import * as Styled from './others.styled';
import PingcapLogoSvg from './others-pingcap-logo.svg';
import flinkLogoImage from './others-flink-logo.png';
import actionLogoImage from './others-action-logo.png';

const Others = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container $isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        title={'其他资源'}
        leftPanel={
          <>
            <Styled.ModuleTitle>
              <Styled.Subtitle>视频专区</Styled.Subtitle>
              <Styled.Link href="https://space.bilibili.com/86485707">查看更多</Styled.Link>
            </Styled.ModuleTitle>
            <Row gutter={16}>
              {data.videos.slice(0, isSmallScreen ? 3 : 6).map((video, idx) => (
                <Col key={idx} xs={24} md={8}>
                  <VideoThumbnail {...video} $isSmallScreen={isSmallScreen} />
                </Col>
              ))}
            </Row>
          </>
        }
        rightPanel={
          <>
            <Styled.Subtitle>寻找商业支持</Styled.Subtitle>
            <Styled.LogoWrapper>
              <PingcapLogoSvg height={36} />
            </Styled.LogoWrapper>
            <Styled.SmallerText>
              <Styled.SmallerLink href={'https://cn.pingcap.com'}>PingCAP</Styled.SmallerLink>{' '}
              是业界领先的企业级开源分布式数据库企业，提供开源分布式数据库产品 TiDB
              解决方案与咨询、技术支持与培训认证等服务。
            </Styled.SmallerText>
            <Styled.Divider />
            <Styled.Subtitle>合作社区</Styled.Subtitle>
            <Styled.LogoWrapper>
              <div style={{ maxHeight: 64 }}>
                <Image {...flinkLogoImage} width={81} height={64} alt={'flink logo'} />
              </div>
            </Styled.LogoWrapper>
            <Styled.SmallerText>
              <Styled.SmallerLink href={'https://flink-learning.org.cn'}>Apache Flink</Styled.SmallerLink>{' '}
              是一个针对无界和有界数据流进行有状态计算的框架与分布式处理引擎，以数据并行和流水线方式执行任意流数据程序。Flink
              能在所有常见集群环境中运行，并能以内存速度和任意规模进行计算。
            </Styled.SmallerText>
            <Styled.LogoWrapper>
              <div style={{ maxHeight: 36 }}>
                <Image {...actionLogoImage} width={133} height={36} alt={'action logo'} />
              </div>
            </Styled.LogoWrapper>
            {/*<Styled.Divider />*/}
            {/*<Styled.SmallerText>*/}
            {/*  {contactLang.label}*/}
            {/*  <Styled.SmallerLink href={contactLang.link}>{contactLang.linkText}</Styled.SmallerLink>！*/}
            {/*</Styled.SmallerText>*/}
          </>
        }
      />
    </Styled.Container>
  );
};

export default Others;
