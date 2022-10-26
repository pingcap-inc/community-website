import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import * as Styled from './index.styled';
import GitHubSVG from './github.svg';
import PlaySVG from './play.svg';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    picture: StaticImageData;
    name: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
  }[];
}

const WinnerTeam: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value, index) => (
        <Styled.Column key={index}>
          <TeamItem value={value} />
        </Styled.Column>
      ))}
    </Styled.Container>
  );
};

export default WinnerTeam;

function TeamItem({ value }) {
  const [showOverLayer, setShowOverLayer] = useState(false);
  return (
    <Styled.Item onMouseOver={() => setShowOverLayer(true)} onMouseOut={() => setShowOverLayer(false)}>
      {showOverLayer ? (
        <Styled.OverLayer>{value.description}</Styled.OverLayer>
      ) : (
        <Styled.Card>
          <Styled.Picture>
            <Image {...value.picture} alt={value.name} />
          </Styled.Picture>
          <Styled.Name>{value.name}</Styled.Name>
          <Styled.Bonus>{value.bonus}</Styled.Bonus>
        </Styled.Card>
      )}
      <Styled.Action>
        <Styled.ActionGitHub>
          <GitHubSVG />
        </Styled.ActionGitHub>
        <Styled.ActionPlay>
          <PlaySVG />
        </Styled.ActionPlay>
      </Styled.Action>
    </Styled.Item>
  );
}
