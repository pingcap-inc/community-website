import * as React from 'react';
import { useState } from 'react';

import * as Styled from './index.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [
  {
    question: '每支参赛队伍最多几个人？',
    answer: '团队参赛最多 4 人为一个小组。单人参赛也支持哦～',
  },
  {
    question: '想不到好的创意想法怎么办？',
    answer: '',
  },
  {
    question: '主办方提供餐饮和住宿吗？',
    answer:
      '本次活动不允许偷跑哟，决赛现场评委会严格审查参赛选手的作品是否符合“第一行代码提交时间需在初赛结果公示后”这一规则。如果遇到学习资料中尚未解答的问题，可以加入 Hackathon 2022 参赛群，群内将有导师不定期线上答疑，以及集中直播分享。',
  },
];

const FAQ: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value) => (
        <Item value={value} />
      ))}
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
      <Styled.Body style={{ maxHeight: showAnswer ? 100 : 0 }}>{value.answer}</Styled.Body>
    </Styled.Item>
  );
}
