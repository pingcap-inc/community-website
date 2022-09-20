import * as React from 'react';

import * as Styled from './index.styled';
import DateIconSVG from './date.svg';
import Anchor from '~/components/Anchor';
import {
  signUpFormUrl,
  joinGroupFormUrl,
  RfcSubmitFormUrl,
  pptTemplateUrl,
  guideUrl,
  scoreRule,
  replayUrl,
  ideaUrl,
  RfcTemplateUrl,
} from '../data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const CompetitionProcess: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Step $active={true}>STEP 1</Styled.Step>
            <Styled.Title>报名</Styled.Title>
            <Styled.Date>
              <DateIconSVG /> 即日起 - 10 月 17 日
            </Styled.Date>
            <Styled.Paragraph>
              只要你对某个赛道感兴趣，热爱创造、勇于探索，都可以报名参加，点击
              <Anchor href={guideUrl}>参赛指南</Anchor>
            </Styled.Paragraph>
          </Styled.Start>
          <Styled.End>
            <Styled.Button href={signUpFormUrl}>立即报名</Styled.Button>
            <Styled.ButtonPrimary href={joinGroupFormUrl}>完成组队</Styled.ButtonPrimary>
          </Styled.End>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Step $active={true}>PLUS 环节</Styled.Step>
            <Styled.Title>非正式会谈 —— 创意脑暴会</Styled.Title>
            <Styled.Date>
              <DateIconSVG /> 日期：9 月 17 日 10:30-12:00（GTM+8）
            </Styled.Date>
            <Styled.Paragraph>特邀东旭以及资深架构师们在线脑暴，超多创意 idea，给你超丰富项目灵感</Styled.Paragraph>
            <Styled.Date style={{ marginTop: 34, marginBottom: 0 }}>贡献项目创意：9 月 17 日 - 9 月 28 日</Styled.Date>
            <Styled.Paragraph style={{ marginTop: 12 }}>
              如果你有一些实现灵感，无需报名，也非常欢迎分享天马行空的创意
            </Styled.Paragraph>
          </Styled.Start>
          <Styled.End>
            <Styled.Button href={replayUrl}>查看回放</Styled.Button>
            <Styled.Button href={ideaUrl}>我有想法</Styled.Button>
          </Styled.End>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Step $active={true}>STEP 2</Styled.Step>
            <Styled.Title>提交项目 RFC</Styled.Title>
            <Styled.Date>
              <DateIconSVG /> 报名后 - 10 月 17 日
            </Styled.Date>
            <Styled.Paragraph>
              提交团队项目想法以及具体实现方案，这将是你通往决赛的入场券，点击查看{' '}
              <Anchor href={RfcTemplateUrl}>RFC 模板</Anchor>
            </Styled.Paragraph>
          </Styled.Start>
          <Styled.End>
            <Styled.Button href={RfcSubmitFormUrl}>提交 RFC</Styled.Button>
          </Styled.End>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Step $active={false}>STEP 3</Styled.Step>
            <Styled.Title>初赛结果公示</Styled.Title>
            <Styled.Date>
              <DateIconSVG /> 日期：10 月 19 日
            </Styled.Date>
            <Styled.Paragraph>公布入围决赛名单，各赛道前 30 组进入决赛</Styled.Paragraph>
          </Styled.Start>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Step $active={false}>STEP 4</Styled.Step>
            <Styled.Title>决赛现场 Coding</Styled.Title>
            <Styled.Date>
              <DateIconSVG /> 日期：10 月 22 日 - 10 月 23 日
            </Styled.Date>
            <Styled.Paragraph>
              现场 coding，实现你的创意想法。北京、上海、广州、成都、新加坡任选一处决赛参赛点，还可以走进 PingCAP Office
              感受 P 社文化
            </Styled.Paragraph>
            <Styled.Paragraph>
              本次活动不允许偷跑哟，详见<Anchor href={scoreRule}>评分规则</Anchor>
            </Styled.Paragraph>
          </Styled.Start>
        </Styled.Item>
      </Styled.Column>

      <Styled.Column>
        <Styled.Item>
          <Styled.Start>
            <Styled.Step $active={false}>STEP 5</Styled.Step>
            <Styled.Title>决赛答辩+颁奖</Styled.Title>
            <Styled.Date>
              <DateIconSVG /> 日期：10 月 23 日
            </Styled.Date>
            <Styled.Paragraph>决赛现场如火如荼，20+ 奖项等你拿！</Styled.Paragraph>
          </Styled.Start>
          <Styled.End>
            <Styled.Button href={pptTemplateUrl}>下载答辩 PPT 模板</Styled.Button>
          </Styled.End>
        </Styled.Item>
      </Styled.Column>
    </Styled.Container>
  );
};

export default CompetitionProcess;
