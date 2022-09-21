import * as React from 'react';
import { Button } from 'antd';

import * as Styled from './index.styled';
import Container from '~/components/Container';

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
          <Button type={'primary'}>🙋 我要成为地区组织者</Button>
        </Styled.Action>
      </Container>
    </Styled.Container>
  );
};

export default JoinNow;
