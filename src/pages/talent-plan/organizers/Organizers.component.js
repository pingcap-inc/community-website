import React from 'react';
import { Row } from 'antd';

import { Styled as CommonStyled } from '@tidb-community/ui';

import { getImage } from '~/pages/talent-plan/talent-plan.utils';

import * as Styled from './organizers.styled';

const Others = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>发起/组织者</CommonStyled.Title>
        <Row gutter={[16, 32]}>
          {['hust', 'ecnu', 'digitalchina', 'pingcap', 'ustc', 'whu'].map((name) => (
            <Styled.ImageContainer xs={12} md={6}>
              <Styled.LogoImage preview={false} height="64px" src={getImage(`organization-${name}.png`)} />
            </Styled.ImageContainer>
          ))}
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Others;
