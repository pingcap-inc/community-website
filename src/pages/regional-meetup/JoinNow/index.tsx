import * as React from 'react';
import { Button } from 'antd';

import Container from '~/components/Container';
import Anchor from '~/components/Anchor';

import * as Styled from './index.styled';
import { joinUrl } from '../data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  //data: {};
}

const JoinNow: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Container>
        <Styled.Title>现在立刻报名组织一场活动吧！</Styled.Title>
        <Styled.Action>
          <Anchor href={joinUrl}>
            <Button type={'primary'}>🙋 我要成为地区组织者</Button>
          </Anchor>
        </Styled.Action>
      </Container>
    </Styled.Container>
  );
};

export default JoinNow;
