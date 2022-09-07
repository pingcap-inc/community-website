import * as React from 'react';

import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';
import { signUpFormUrl, joinGroupFormUrl, RfcSubmitFormUrl, pptTemplateUrl, guideUrl } from '../data';

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
              <Styled.Title>Register</Styled.Title>
              <Styled.Date>Sept 13, 2022 - Oct 17, 2022</Styled.Date>
              <Styled.Paragraph>If you love to create and explore, you can sign up to participate.</Styled.Paragraph>
              <Styled.Paragraph>
                Check the <Anchor href={guideUrl}>Hackathon guide</Anchor>.
              </Styled.Paragraph>
            </Styled.Start>
            <Styled.End>
              <Anchor href={signUpFormUrl}>Register now</Anchor>
              <Anchor href={joinGroupFormUrl}>Find teammates</Anchor>
            </Styled.End>
          </Styled.Item>
          <StepLine showLeft={false}>STEP 1</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>

      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>Submit a Request for Comments (RFC)</Styled.Title>
              <Styled.Date>Sept 13, 2022 - Oct 17, 2022</Styled.Date>
              <Styled.Paragraph>Submit your idea and specific implementation plans.</Styled.Paragraph>
              <Styled.Paragraph>
                Check the <Anchor href={'#'}>RFC template</Anchor>.
              </Styled.Paragraph>
            </Styled.Start>
            <Styled.End>
              <Anchor href={RfcSubmitFormUrl}>Submit an RFC</Anchor>
            </Styled.End>
          </Styled.Item>
          <StepLine>STEP 2</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>

      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>Check the pre-selection results</Styled.Title>
              <Styled.Date>Oct 19, 2022</Styled.Date>
              <Styled.Paragraph>We'll announce the teams that passed the pre-selection.</Styled.Paragraph>
            </Styled.Start>
          </Styled.Item>
          <StepLine>STEP 3</StepLine>
        </Styled.ItemWrap>
      </Styled.Column>

      <Styled.Column>
        <Styled.ItemWrap>
          <Styled.Item>
            <Styled.Start>
              <Styled.Title>Join the final</Styled.Title>
              <Styled.Date>Oct 22, 2022 - Oct 23, 2022</Styled.Date>
              <Styled.Paragraph>Join the on-site final at the PingCAP office in Singapore.</Styled.Paragraph>
            </Styled.Start>
            <Styled.End>
              <Anchor href={pptTemplateUrl}>Download the presentation slides template</Anchor>
            </Styled.End>
          </Styled.Item>
          <StepLine>STEP 4</StepLine>
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
