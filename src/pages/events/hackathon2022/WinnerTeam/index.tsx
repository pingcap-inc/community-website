import * as React from 'react';
import Image from 'next/image';
import { Space } from 'antd';
import { GithubFilled, PlayCircleFilled } from '@ant-design/icons';

import Anchor from '~/components/Anchor';

import * as Styled from './index.styled';
import { IWinnerTeamRace } from '../data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    application: IWinnerTeamRace;
    production: IWinnerTeamRace;
  };
}

const WinnerTeam: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.MyContainer {...rest}>
      <Styled.Section>
        <Styled.SectionTitle style={{ color: data.application.color }}>{data.application.name}</Styled.SectionTitle>
        <Styled.SectionBody>
          {data.application.items.map((value, index) => (
            <TeamItem key={index} value={value} color={data.application.color} />
          ))}
        </Styled.SectionBody>
      </Styled.Section>

      <Styled.Section style={{ marginTop: 48 }}>
        <Styled.SectionTitle style={{ color: data.production.color }}>{data.production.name}</Styled.SectionTitle>
        <Styled.SectionBody>
          {data.production.items.map((value, index) => (
            <TeamItem key={index} value={value} color={data.production.color} />
          ))}
        </Styled.SectionBody>
      </Styled.Section>
    </Styled.MyContainer>
  );
};

export default WinnerTeam;

function TeamItem({ value, color }) {
  //const [showOverLayer, setShowOverLayer] = useState(false);
  return (
    <Styled.Item>
      <Styled.Card>
        <Styled.Content>
          <div id={'basic'}>
            <Styled.Picture>
              <Image {...value.pictureImage} alt={value.name} />
              {/*<img {...value.pictureImage} alt={value.name} />*/}
            </Styled.Picture>
            <Styled.Name>{value.name}</Styled.Name>
            <Styled.Bonus>
              {value.prize}，{value.bonus}
            </Styled.Bonus>
          </div>
          <div id={'description'}>
            <Styled.Description>{value.description}</Styled.Description>
          </div>
        </Styled.Content>
        <Styled.Action $color={color}>
          <Space size={16}>
            <Anchor href={value.githubLink}>
              <Styled.ActionItem>
                <GithubFilled style={{ fontSize: 24 }} />
              </Styled.ActionItem>
            </Anchor>
            <Anchor href={value.playbackLink}>
              <Styled.ActionItem>
                <PlayCircleFilled style={{ fontSize: 24 }} />
              </Styled.ActionItem>
            </Anchor>
            <Anchor href={value.rfcLink}>
              <Styled.ActionItem>RFC</Styled.ActionItem>
            </Anchor>
          </Space>
        </Styled.Action>
      </Styled.Card>
    </Styled.Item>
  );
}
