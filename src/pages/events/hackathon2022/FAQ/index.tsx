import * as React from 'react';
import { useState } from 'react';

import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';
import { askCompetitionUrl } from '~/pages/events/hackathon2022/data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [
  {
    question: '1. 每支参赛队伍最多几个人？',
    answer: (
      <ul>
        <li>团队参赛最多 4 人为一个小组。单人参赛也支持哦～</li>
      </ul>
    ),
  },
  {
    question: '2. 没有队友怎么办？',
    answer: (
      <ul>
        <li>可以在社区链接（跳转链接）发布寻找队友、自我推荐，找到团队缺少的队友，也可以找到合适的队伍加入。</li>
      </ul>
    ),
  },
  {
    question: '3. 想不到好的创意想法怎么办？',
    answer: (
      <ul>
        <li>锁定 9 月 17 日宇宙漫游预备营，听听资深架构师们的创意想法，找到属于你的灵感</li>
        <li>也可以在社区链接（跳转链接）看看社区开发者们的想法，激发你的创意</li>
      </ul>
    ),
  },
  {
    question: '4. 主办方提供餐饮和住宿吗？',
    answer: (
      <ul>
        <li>
          我们提供参赛者和志愿者比赛期间的餐饮（两份午餐、一份早餐、两份晚餐），参赛选手可留在比赛场地过夜，如需在场地附近租住宾馆请自行解决～
        </li>
      </ul>
    ),
  },
  {
    question: '5. 比赛会由于疫情取消吗？',
    answer: (
      <ul>
        <li>我们会密切关注疫情动向，如有不可抗力则比赛会改为全程线上，不会取消哦～</li>
      </ul>
    ),
  },
  {
    question: '6. 会场分别在哪些城市？',
    answer: (
      <ul>
        <li>上海、北京、广州、成都、新加坡，上述地区进入决赛队伍超过五组时，该场地将开启线下会场。</li>
      </ul>
    ),
  },
  {
    question: '7. 什么时候可以开始编写代码？',
    answer: (
      <ul>
        <li>
          决赛现场
          coding。本次活动不允许偷跑哟，决赛现场评委会严格审查参赛选手的作品是否符合“第一行代码提交时间需在初赛结果公示后”这一规则。
        </li>
        <li>
          如果遇到学习资料中尚未解答的问题，可以加入 Hackathon 2022
          参赛群，群内将有导师不定期线上答疑，以及集中直播分享。
        </li>
      </ul>
    ),
  },
  {
    question: '8. 最佳校园奖参与评奖的人群是？',
    answer: (
      <ul>
        <li>团队成员需要全员皆为：在校本科生、硕士研究生、博士研究生。</li>
      </ul>
    ),
  },
  {
    question: '9. 报名参赛就可以获得本次获得的参赛大礼包吗？',
    answer: (
      <ul>
        <li>参赛开发者需要提交 RFC 后，RFC 通过初审，进入决赛就可以现场领取参赛大礼包哟～</li>
      </ul>
    ),
  },
];

const FAQ: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.List>
        {data.map((value) => (
          <Item value={value} />
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
