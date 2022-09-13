import * as React from 'react';

import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';
import {
  signUpFormUrl,
  joinGroupFormUrl,
  RfcSubmitFormUrl,
  pptTemplateUrl,
  guideUrl,
  scoreRule,
  liveUrl,
  ideaUrl,
} from '../data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const CompetitionProcess: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>报名</Styled.Title>
              <Styled.Date>即日起 - 10 月 17 日</Styled.Date>
              <Styled.Paragraph>
                只要你对某个赛道感兴趣，热爱创造、勇于探索，都可以报名参加，点击
                <Anchor href={guideUrl}>参赛指南</Anchor>
              </Styled.Paragraph>
            </Styled.Start>
            <Styled.End>
              <Anchor href={signUpFormUrl}>立即报名</Anchor>
              <Anchor href={joinGroupFormUrl}>完成组队</Anchor>
            </Styled.End>
          </Styled.Item>
          <StepLine showLeft={false}>STEP 1</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>

      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>PLUS 环节 ：非正式会谈 —— 创意脑暴会</Styled.Title>
              <Styled.Date>日期：9 月 17 日 10:30-12:00（GTM+8）</Styled.Date>
              <Styled.Paragraph>特邀东旭以及资深架构师们在线脑暴，超多创意 idea，给你超丰富项目灵感</Styled.Paragraph>
              <Styled.Date style={{ marginTop: 34, marginBottom: 0 }}>
                贡献项目创意：9 月 17 日 - 9 月 28 日
              </Styled.Date>
              <Styled.Paragraph style={{ marginTop: 12 }}>
                如果你有一些实现灵感，无需报名，也非常欢迎分享天马行空的创意
              </Styled.Paragraph>
            </Styled.Start>
            <Styled.End>
              {/*TODO: links*/}
              <Anchor href={liveUrl}>预约直播</Anchor>
              <Anchor href={ideaUrl}>我有想法</Anchor>
            </Styled.End>
          </Styled.Item>
          <StepLine color={'#00CF71'}>PLUS 环节</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>

      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>提交项目 RFC</Styled.Title>
              <Styled.Date>报名后 - 10 月 17 日</Styled.Date>
              <Styled.Paragraph>
                提交团队项目想法以及具体实现方案，这将是你通往决赛的入场券，点击查看 RFC 模板
              </Styled.Paragraph>
            </Styled.Start>
            <Styled.End>
              <Anchor href={RfcSubmitFormUrl}>提交 RFC</Anchor>
            </Styled.End>
          </Styled.Item>
          <StepLine>STEP 2</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>

      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>初赛结果公示</Styled.Title>
              <Styled.Date>日期：10 月 19 日</Styled.Date>
              <Styled.Paragraph>公布入围决赛名单，各赛道前 30 组进入决赛</Styled.Paragraph>
            </Styled.Start>
          </Styled.Item>
          <StepLine>STEP 3</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>

      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>决赛现场 Coding</Styled.Title>
              <Styled.Date>日期：10 月 22 日 - 10 月 23 日</Styled.Date>
              <Styled.Paragraph>
                现场 coding，实现你的创意想法。北京、上海、广州、成都、新加坡任选一处决赛参赛点，还可以走进 PingCAP
                Office 感受 P 社文化
              </Styled.Paragraph>
              <Styled.Paragraph>
                本次活动不允许偷跑哟，详见<Anchor href={scoreRule}>评分规则</Anchor>
              </Styled.Paragraph>
            </Styled.Start>
          </Styled.Item>
          <StepLine>STEP 4</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>

      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>决赛答辩+颁奖</Styled.Title>
              <Styled.Date>日期：10 月 23 日</Styled.Date>
              <Styled.Paragraph>决赛现场如火如荼，20+ 奖项等你拿！</Styled.Paragraph>
            </Styled.Start>
            <Styled.End>
              <Anchor href={pptTemplateUrl}>下载答辩 PPT 模板</Anchor>
            </Styled.End>
          </Styled.Item>
          <StepLine showRight={false}>STEP 5</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>
    </Styled.Container>
  );
};

export default CompetitionProcess;

function StepLine(props: { children: string; showLeft?: boolean; color?: string; showRight?: boolean }) {
  const showLeft: boolean = props.showLeft ?? true;
  const color: string = props.color ?? '#82C1ED';
  const showRight: boolean = props.showRight ?? true;
  return (
    <Styled.Step>
      <Styled.StepText $color={color}>{props.children}</Styled.StepText>
      <Styled.StepLine>
        <Styled.StepLineItem
          $show={
            showLeft
          } /*style={{transform: `scaleX(${showLeft ? '1.25' : '0'}) translateX(${showLeft ? '-16px' : '0'})`}}*/
        />
        <Styled.StepPoint $color={color} />
        <Styled.StepLineItem
          $show={
            showRight
          } /*style={{transform: `scaleX(${showRight ? '1.25' : '0'}) translateX(${showRight ? '16px' : '0'})`}}*/
        />
      </Styled.StepLine>
    </Styled.Step>
  );
}
