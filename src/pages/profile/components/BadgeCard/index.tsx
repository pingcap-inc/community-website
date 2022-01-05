import * as React from 'react';
import * as Styled from './index.styled';
import { BulbFilled } from '@ant-design/icons';

export interface IProfileCard {
  nums: {
    current: number;
    total: number;
  };
}

export default function ProfileCard(props: IProfileCard) {
  const { nums } = props;
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          <Styled.TitleText>徽章</Styled.TitleText>
          <Styled.TitleNums>
            {nums.current}/{nums.total}
          </Styled.TitleNums>
        </Styled.Title>
        <Styled.ActiveMore>
          <BulbFilled /> 点亮更多徽章
        </Styled.ActiveMore>
      </Styled.Header>
      <Styled.Body>{/*<Styled.Badge></Styled.Badge>*/}</Styled.Body>
    </Styled.Container>
  );
}
