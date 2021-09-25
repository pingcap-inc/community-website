import React from 'react';
import { Divider } from 'antd';

import * as Styled from './applyStart.styled';
import { title, postImageUrl, question, answer, whyJoinTitle, whyJoinItems } from './applyStart.constants';

const ApplyStart = () => (
  <Styled.Wrapper>
    <Styled.Title>{title}</Styled.Title>

    <Styled.Post>
      <img src={postImageUrl} alt={title} />
    </Styled.Post>

    <Divider />

    <Styled.Question>{question}</Styled.Question>

    <Styled.Answer>{answer}</Styled.Answer>

    <Divider />

    <Styled.WhyJoinTitle>{whyJoinTitle}</Styled.WhyJoinTitle>

    <Styled.WhyJoinList>
      {whyJoinItems.map(({ text, iconUrl }) => (
        <Styled.WhyJoinListItem key={text}>
          <Styled.WhyJoinListItemIcon>
            <img alt={text} src={iconUrl} />
          </Styled.WhyJoinListItemIcon>
          <Styled.WhyJoinListItemText>{text}</Styled.WhyJoinListItemText>
        </Styled.WhyJoinListItem>
      ))}
    </Styled.WhyJoinList>
  </Styled.Wrapper>
);

export default ApplyStart;
