import * as React from 'react';
import type { StaticImageData } from 'next/image';
import { Space } from 'antd';
import { GithubFilled, PlayCircleFilled } from '@ant-design/icons';

import Anchor from '~/components/Anchor';

import * as Styled from './index.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    application: {
      name: string;
      color: string;
      items: {
        picture: StaticImageData;
        name: React.ReactNode;
        title: React.ReactNode;
        description: React.ReactNode;
      }[];
    };
    production: {
      name: string;
      color: string;
      items: {
        picture: StaticImageData;
        name: React.ReactNode;
        title: React.ReactNode;
        description: React.ReactNode;
      }[];
    };
  };
}

const WinnerTeam: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Section>
        <Styled.SectionTitle style={{ color: data.application.color }}>{data.application.name}</Styled.SectionTitle>
        <Styled.SectionBody>
          {data.application.items.map((value, index) => (
            <Styled.Column key={index}>
              <TeamItem value={value} color={data.application.color} />
            </Styled.Column>
          ))}
        </Styled.SectionBody>
      </Styled.Section>

      <Styled.Section style={{ marginTop: 48 }}>
        <Styled.SectionTitle style={{ color: data.production.color }}>{data.production.name}</Styled.SectionTitle>
        <Styled.SectionBody>
          {data.production.items.map((value, index) => (
            <Styled.Column key={index}>
              <TeamItem value={value} color={data.production.color} />
            </Styled.Column>
          ))}
        </Styled.SectionBody>
      </Styled.Section>
    </Styled.Container>
  );
};

export default WinnerTeam;

function TeamItem({ value, color }) {
  //const [showOverLayer, setShowOverLayer] = useState(false);
  return (
    <Styled.Item>
      <Styled.Card>
        <Styled.Picture>{/*<Image {...value.picture} alt={value.name} />*/}</Styled.Picture>
        <Styled.Name>{value.name}</Styled.Name>
        <Styled.Bonus>{value.bonus}</Styled.Bonus>
      </Styled.Card>
      <Styled.Action $color={color}>
        <Space size={16}>
          <Anchor href={'#'}>
            <Styled.ActionItem>
              <GithubFilled style={{ fontSize: 24 }} />
            </Styled.ActionItem>
          </Anchor>
          <Anchor href={'#'}>
            <Styled.ActionItem>
              <PlayCircleFilled style={{ fontSize: 24 }} />
            </Styled.ActionItem>
          </Anchor>
          <Anchor href={'#'}>
            <Styled.ActionItem>RFC</Styled.ActionItem>
          </Anchor>
        </Space>
      </Styled.Action>
    </Styled.Item>
  );
}
