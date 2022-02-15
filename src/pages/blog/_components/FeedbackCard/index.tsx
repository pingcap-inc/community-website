import * as React from 'react';
import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';

const feedbackUrl = '';

function Header() {
  return (
    <>
      社区专栏上线啦！<Anchor href={feedbackUrl}>意见反馈</Anchor>看这里👀
    </>
  );
}

export default function FeedbackCard() {
  return (
    <Styled.Container>
      <Styled.Card title={Header}>
        如果你在使用过程中想要告诉我们：
        <ul>
          <li>专栏 BUG</li>
          <li>功能优化</li>
          <li>功能新增</li>
        </ul>
        相关内容，请前往 <Anchor href={feedbackUrl}>【建议收集专区】</Anchor> 反馈～
      </Styled.Card>
    </Styled.Container>
  );
}
