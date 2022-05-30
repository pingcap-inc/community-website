import React from 'react';

import * as Styled from './banner.styled';
import { useIsSmallScreen } from '~/hooks';
import { useTranslation } from 'next-i18next';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';
import Anchor from '~/components/Anchor';
import { Button, Space } from 'antd';

const Banner = () => {
  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-talent-plan');

  const lang = t('banner', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <TwoColumnsSection
          leftPanel={
            <Styled.LeftPanel>
              <Styled.Title>{lang.title}</Styled.Title>
              <Styled.Intro>{lang.intro}</Styled.Intro>
              <Space size={32}>
                <Anchor href="https://forms.pingcap.com/f/talent-plan-application">
                  <Button type={'primary'}>报名学习</Button>
                </Anchor>
                <Anchor href="https://github.com/pingcap/talent-plan">
                  <Button type={'primary'} ghost>
                    Github 代码
                  </Button>
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
