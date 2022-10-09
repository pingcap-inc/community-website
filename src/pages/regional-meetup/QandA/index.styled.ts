import styled from 'styled-components';
import { Space } from 'antd';

export const Container = styled.div`
  padding: 72px 0;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 45px;
  /* identical to box height */
  color: #2c2c2c;
`;

export const Content = styled(Space)`
  margin-top: 54px;
`;

export const More = styled.div`
  padding-top: 32px;
  text-align: center;
`;

export const Item = styled(Space)``;

export const Question = styled(Space)``;

export const QuestionIcon = styled.div`
  width: 28px;
  height: 28px;
  background: #ff6d78;
  border-radius: 2px;
  line-height: 28px;
  text-align: center;
  color: #fff;
`;

export const QuestionText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */
  color: #2c2c2c;
`;

export const Answer = styled(Space)``;

export const AnswerIcon = styled.div`
  width: 28px;
  height: 28px;
  background: #4f54c1;
  border-radius: 2px;
  line-height: 28px;
  text-align: center;
  color: #fff;
`;

export const AnswerText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #2c2c2c;
`;
