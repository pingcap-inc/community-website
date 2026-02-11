import * as React from 'react';
import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';
import { FlagOutlined } from '@ant-design/icons';

const feedbackUrl = 'https://pingkai.cn/tidbcommunity/forum/t/topic/542917';

export default function FeedbackCard() {
  return (
    <Styled.Container>
      <Styled.Card title={<HeaderLeft />} extra={<HeaderRight />}>
        如果你在使用博客系统时遇到问题，或者想要提供建议，来 <Anchor href={feedbackUrl}>【这里】</Anchor> 反馈。
      </Styled.Card>
    </Styled.Container>
  );
}

function HeaderLeft() {
  return <>建议反馈入口</>;
}

function HeaderRight() {
  return (
    <Styled.HeaderRight>
      <FlagOutlined />
    </Styled.HeaderRight>
  );
}
