import React from 'react';
import { Divider } from 'antd';

import * as Styled from './applyStart.styled';

import { title, postImageUrl, question, answer, whyJoinTitle, whyJoinItems } from './applyStart.constants';

const ApplyStart = () => {
  return (
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
        {whyJoinItems.map((value) => (
          <Styled.WhyJoinListItem key={value.text}>
            <Styled.WhyJoinListItemIcon>
              <img src={value.iconUrl} alt={value.text} />
            </Styled.WhyJoinListItemIcon>
            <Styled.WhyJoinListItemText>{value.text}</Styled.WhyJoinListItemText>
          </Styled.WhyJoinListItem>
        ))}
      </Styled.WhyJoinList>
    </Styled.Wrapper>
  );
};

export default ApplyStart;
