import * as React from 'react';

import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';
import { signUpFormUrl, joinGroupFormUrl, RfcSubmitFormUrl, pptTemplateUrl } from '../data';

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
              <Styled.Date>截止日期：10 月 17 日</Styled.Date>
              <Styled.Paragraph>只要你对编程、开发感兴趣，都可以报名参加，点击查看参赛指南</Styled.Paragraph>
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
              <Styled.Title>线上创意脑暴会</Styled.Title>
              <Styled.Date>日期：9 月 17 日</Styled.Date>
              <Styled.Paragraph>这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一</Styled.Paragraph>
              <Styled.Date>提交项目想法：9 月 17 日 - 9 月 28 日（待定）</Styled.Date>
            </Styled.Start>
          </Styled.Item>
          <StepLine color={'#00CF71'}>PLUS 环节</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>

      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>提交项目想法</Styled.Title>
              <Styled.Date>截止日期：10 月 17 日</Styled.Date>
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
              <Styled.Title>决赛现场 coding</Styled.Title>
              <Styled.Date>日期：10 月 22 日 - 10 月 23 日</Styled.Date>
              <Styled.Paragraph>
                现场 coding，实现你的创意想法。北京、上海、广州、成都、新加坡任选一处决赛参赛点，还可以走进 PingCAP Office
                感受 P 社文化
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
              <Anchor href={pptTemplateUrl}>下载答辩 PPT 模板 （待上线）</Anchor>
            </Styled.End>
          </Styled.Item>
          <StepLine showRight={false}>STEP 5</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>
    </Styled.Container>
  );
};

export default CompetitionProcess;

function StepLine(props: {children: string, showLeft?: boolean, color?: string, showRight?: boolean}) {
  const showLeft: boolean = props.showLeft ?? true
  const color: string = props.color ?? '#82C1ED'
  const showRight: boolean = props.showRight ?? true
  return (
    <Styled.Step>
      <Styled.StepText $color={color}>
        {props.children}
      </Styled.StepText>
      <Styled.StepLine>
        <Styled.StepLineItem $show={showLeft} style={{transform: `scaleX(${showLeft ? '1.25' : '0'}) translateX(${showLeft ? '-16px' : '0'})`}} />
        <Styled.StepPoint $color={color} />
        <Styled.StepLineItem $show={showRight} style={{transform: `scaleX(${showRight ? '1.25' : '0'}) translateX(${showRight ? '16px' : '0'})`}} />
      </Styled.StepLine>
    </Styled.Step>
  )
}
