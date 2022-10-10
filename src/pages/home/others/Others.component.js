import React, { useContext } from 'react';
import { Col, Row } from 'antd';
import Image from 'next/image';

import TwoColumnsSection from '~/layouts/twoColumnsSection';
import VideoThumbnail from './videoThumbnail';
import { PageDataContext } from '~/context';
import { useIsSmallScreen } from '~/hooks';

import * as Styled from './others.styled';
import zhihuLogoImage from './others-zhihu-logo.png';
import xiaomiLogoImage from './others-xiaomi-logo.png';
import iqiyiLogoImage from './others-iqiyi-logo.png';
import ucloudLogoImage from './others-ucloud-logo.png';
import bilibiliLogoImage from './others-bilibili-logo.png';
import pingcapLogoImage from './others-pingcap-logo.png';
import PingcapLogoSvg from './others-pingcap-logo.svg';
import flinkLogoImage from './others-flink-logo.png';
import actionLogoImage from './others-action-logo.png';

const jobLogos = [
  { name: 'zhihu', image: zhihuLogoImage },
  { name: 'xiaomi', image: xiaomiLogoImage },
  { name: 'iqiyi', image: iqiyiLogoImage },
  { name: 'ucloud', image: ucloudLogoImage },
  { name: 'bilibili', image: bilibiliLogoImage },
  { name: 'pingcap', image: pingcapLogoImage },
];

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
            <Styled.Divider />
            <Styled.ModuleTitle>
              <Styled.Subtitle> 工作机会 </Styled.Subtitle>
              <Styled.Link href="https://tidb-jobs.pingcap.com/">查看更多</Styled.Link>
            </Styled.ModuleTitle>
            <Row>
              <Styled.Text>
                如果你喜欢新技术，希望在分布式数据库领域实现自己的价值，TiDB
                社区联合了相关生态企业为你提供了就业的机会，帮助你在工作中实践 TiDB 知识，获得职业上的成长。
              </Styled.Text>
            </Row>
            <Styled.LogosBox size={36} justify="left" wrap $isSmallScreen={isSmallScreen}>
              {jobLogos.map(({ name, image }) => (
                <img key={name} {...image} alt={`${name} logo`} />
              ))}
            </Styled.LogosBox>
          </>
        }
        rightPanel={
          <>
            <Styled.Subtitle>寻找商业支持</Styled.Subtitle>
            <Styled.LogoWrapper>
              <PingcapLogoSvg height={36} />
            </Styled.LogoWrapper>
            <Styled.SmallerText>
              <Styled.SmallerLink href={'https://pingcap.com/zh'}>PingCAP</Styled.SmallerLink>{' '}
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
            <Styled.SmallerText>
              <Styled.SmallerLink href={'https://opensource.actionsky.com'}>爱可生社区</Styled.SmallerLink>
              以开源高质量的运维工具、日常分享技术干货内容、持续的全国性的社区活动为社区己任；立志于每年 10.24
              日开源一款高质量的数据库相关的开源产品；目前开源的产品有：分布式中间件 DBLE、数据传输组件
              DTLE、全局事务框架 TXLE、SQL 审核组件 SQLE。
            </Styled.SmallerText>
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
