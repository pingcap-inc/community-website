import * as React from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import * as Styled from './index.styled';
import Container from '~/components/Container';
import { questionAndAnswer } from '~/data/regional-meetup';
import { useIsSmallScreen } from '~/hooks';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const QandA: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { ...rest } = props;
  const [showMore, setShowMore] = useState(false);
  const isSmallScreen = useIsSmallScreen();
  const collapse = isSmallScreen.isSmallScreen && !showMore;
  return (
    <Styled.Container {...rest}>
      <Container>
        <Styled.Title>Q&A</Styled.Title>
        <Styled.Content size={54} direction={'vertical'}>
          {questionAndAnswer.slice(1, collapse ? 2 : undefined).map((value) => (
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
        <Styled.More>
          {collapse && (
            <Button type={'primary'} ghost icon={<DownOutlined />} onClick={() => setShowMore(true)}>
              展开其他问题与答案
            </Button>
          )}
        </Styled.More>
      </Container>
    </Styled.Container>
  );
};

export default QandA;
