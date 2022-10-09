import React from 'react';
import { Button, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import { useIsSmallScreen } from '~/hooks';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';
import Anchor from '~/components/Anchor';

import * as Styled from './banner.styled';

const Banner = () => {
  const { isSmallScreen, breakpoint } = useIsSmallScreen();

  return (
    <Styled.Container>
      <Styled.Content>
        <TwoColumnsSection
          leftPanel={
            <Styled.LeftPanel>
              <Styled.Title>Talent Plan</Styled.Title>
              <Styled.Intro>
                以 Talent Plan
                开源数据库开发课程为依托，联合优秀高校和企业，建设成对全国各高校数据库开发人才培养的最佳实践平台。既能帮助学习者掌握数据库开发的理论知识，进行实际数据库开发锻炼，又能给与学习者使用开源资源，开发开源软件的培养。
              </Styled.Intro>
              <Space size={24}>
                <Anchor href="https://forms.pingcap.com/f/talent-plan-application">
                  <Button type={'primary'}>报名学习</Button>
                </Anchor>
                <Anchor href="https://github.com/pingcap/talent-plan" style={{ fontSize: 24 }}>
                  <GithubOutlined />
                </Anchor>
              </Space>
            </Styled.LeftPanel>
          }
          rightPanel={
            <Styled.CarouselWrapper>
              <Styled.Carousel isSmallScreen={isSmallScreen}>
                {[1, 2, 3].map((el) => {
                  const props = {
                    image: getImage(`banner-rec-${el}.svg`),
                    key: el,
                    height: (() => {
                      if (breakpoint.lg) {
                        return 300;
                      }
                      if (breakpoint.md) {
                        return 300;
                      }
                      if (breakpoint.sm) {
                        return 300;
                      }
                      if (breakpoint.xs) {
                        return 200;
                      }
                    })(),
                  };
                  return <Styled.Recommendation {...props} />;
                })}
              </Styled.Carousel>
            </Styled.CarouselWrapper>
          }
        />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
