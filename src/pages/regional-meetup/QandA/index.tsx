import * as React from 'react';

import * as Styled from './index.styled';
import Container from '~/components/Container';
import { questionAndAnswer } from '~/data/regional-meetup';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const QandA: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Container>
        <Styled.Title>Q&A</Styled.Title>
        <Styled.Content size={54} direction={'vertical'}>
          {questionAndAnswer.map((value) => (
            <Styled.Item key={value.Q} size={16} direction={'vertical'}>
              <Styled.Question align={'start'}>
                <Styled.QuestionIcon>Q</Styled.QuestionIcon>
                <Styled.QuestionText>{value.Q}</Styled.QuestionText>
              </Styled.Question>
              <Styled.Answer align={'start'}>
                <Styled.AnswerIcon>A</Styled.AnswerIcon>
                <Styled.AnswerText>{value.A}</Styled.AnswerText>
              </Styled.Answer>
            </Styled.Item>
          ))}
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
};

export default QandA;
