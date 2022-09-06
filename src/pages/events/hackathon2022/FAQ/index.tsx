import * as React from 'react';
import { useState } from 'react';

import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';
import { askCompetitionUrl } from '~/pages/events/hackathon2022/data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    question: string;
    answer: React.ReactNode;
  }[];
}

const FAQ: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.List>
        {data.map((value) => (
          <Item key={value.question} value={value} />
        ))}
      </Styled.List>
      <Styled.Description>
        更多问答，请点击<Anchor href={askCompetitionUrl}>赛事 FAQ</Anchor>
      </Styled.Description>
    </Styled.Container>
  );
};

export default FAQ;

function Item({ value }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Styled.Item>
      <Styled.Header onClick={() => setShowAnswer((value) => !value)}>
        <Styled.Question>{value.question}</Styled.Question>
        <Styled.Button>
          <div>{showAnswer ? '-' : '+'}</div>
        </Styled.Button>
      </Styled.Header>
      <Styled.Body $show={showAnswer}>{value.answer}</Styled.Body>
    </Styled.Item>
  );
}
