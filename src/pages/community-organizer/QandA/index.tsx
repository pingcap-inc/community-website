import * as React from 'react';

import * as Styled from './index.styled';
import Container from '~/components/Container';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {};
}

const data = {
  content: [
    {
      Q: '我想组织一场地区活动，但还没有找到合适的讲师怎么办？',
      A: (
        <>
          <p>欢迎来 asktug 论坛（asktug.com）发帖，社区也会在各社群渠道协助推广寻找宝藏讲师~</p>
          <p>帖子可参考：https://asktug.com/t/topic/662777（武汉嘉宾招募帖）</p>
        </>
      ),
    },
    {
      Q: '地区组织活动欢迎什么样的技术分享？（话题审核的标准）',
      A: (
        <>
          <p>总结“欢迎实践/原理类分享；拒接带货广告”，能帮助大家避坑，“涨姿势”的宝藏干货最欢迎👏🏻</p>
        </>
      ),
    },
    {
      Q: '社区给予地区组织多少资源来筹备活动，社区是否有运营可以给予支持？',
      A: (
        <>
          <p>
            首先，社区运营一定是非常可靠的站在组织者身边的！针对报名人数，社区会给予对应报名人数的资源支持，包括场地、零售茶歇、活动物料准备等在内的物资支持。（参考：如报名人数在20人以上则给予2000-5000元不等的物资支持）。
          </p>
        </>
      ),
    },
    {
      Q: '我想组织一场地区活动，但还没有找到合适的讲师怎么办？',
      A: (
        <>
          <p>活动筹备中，临时遇到疫情影响，或者讲师没法来了怎么办？</p>
        </>
      ),
    },
    {
      Q: '如果临时遇到疫情管控，建议与报名的小伙伴以及分享嘉宾沟通是否需要延期，一起延期日期可以通过投票的方式选择。',
      A: (
        <>
          <p>不知道我所在的区域有没有地区组织者，如何找到组织？</p>
        </>
      ),
    },
  ],
};

const QandA: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Container>
        <Styled.Title>Q&A</Styled.Title>
        <Styled.Content size={54} direction={'vertical'}>
          {data.content.map((value) => (
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
