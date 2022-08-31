import * as React from 'react';

import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const CompetitionProcess: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Title>报名</Styled.Title>
            <Styled.Date>截止日期：10 月 17 日</Styled.Date>
            <Styled.Paragraph>只要你对编程、开发感兴趣，都可以报名参加，点击查看参赛指南</Styled.Paragraph>
          </Styled.Start>
          <Styled.End>
            <Styled.Link>
              <Anchor href={'#'}>立即报名</Anchor>
            </Styled.Link>
            <Styled.Link>
              <Anchor href={'#'}>完成组队</Anchor>
            </Styled.Link>
          </Styled.End>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Title>线上创意脑暴会</Styled.Title>
            <Styled.Date>日期：9 月 17 日</Styled.Date>
            <Styled.Paragraph>这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一</Styled.Paragraph>
            <Styled.Date>提交项目想法：9 月 17 日 - 9 月 28 日（待定）</Styled.Date>
          </Styled.Start>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Title>提交项目想法</Styled.Title>
            <Styled.Date>截止日期：10 月 17 日</Styled.Date>
            <Styled.Paragraph>
              提交团队项目想法以及具体实现方案，这将是你通往决赛的入场券，点击查看 RFC 模板
            </Styled.Paragraph>
          </Styled.Start>
          <Styled.End>
            <Styled.Link>
              <Anchor href={'#'}>提交 RFC</Anchor>
            </Styled.Link>
          </Styled.End>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Title>初赛结果公示</Styled.Title>
            <Styled.Date>日期：10 月 19 日</Styled.Date>
            <Styled.Paragraph>公布入围决赛名单，各赛道前 30 组进入决赛</Styled.Paragraph>
          </Styled.Start>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Title>决赛现场 coding</Styled.Title>
            <Styled.Date>日期：10 月 22 日 - 10 月 23 日</Styled.Date>
            <Styled.Paragraph>
              现场 coding，实现你的创意想法。北京、上海、广州、成都、新加坡任选一处决赛参赛点，还可以走进 PingCAP Office
              感受 P 社文化
            </Styled.Paragraph>
          </Styled.Start>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Title>决赛答辩+颁奖</Styled.Title>
            <Styled.Date>日期：10 月 23 日</Styled.Date>
            <Styled.Paragraph>决赛现场如火如荼，20+ 奖项等你拿！</Styled.Paragraph>
          </Styled.Start>
          <Styled.End>
            <Styled.Link>
              <Anchor href={'#'}>下载答辩 PPT 模板 （待上线）</Anchor>
            </Styled.Link>
          </Styled.End>
        </Styled.Item>
      </Styled.Column>
    </Styled.Container>
  );
};

export default CompetitionProcess;
