import * as React from 'react';
import { useState } from 'react';

import * as Styled from './index.styled';
import AvatarImage from './avatar.png';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
];

const Judge: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value) => (
        <Styled.Column>
          <JudgeItem value={value} />
        </Styled.Column>
      ))}
    </Styled.Container>
  );
};

export default Judge;

function JudgeItem({ value }) {
  const [showOverLayer, setShowOverLayer] = useState(false);
  return (
    <Styled.Item onMouseOver={() => setShowOverLayer(true)} onMouseOut={() => setShowOverLayer(false)}>
      {showOverLayer ? (
        <Styled.OverLayer>
          <Styled.OverLayerName>{value.name}</Styled.OverLayerName>
          <Styled.OverLayerTitle>{value.title}</Styled.OverLayerTitle>
          <Styled.OverLayerQuotation>{value.quotation}</Styled.OverLayerQuotation>
        </Styled.OverLayer>
        ) : (
        <Styled.Profile>
          <Styled.Avatar>
            <img {...value.avatar} alt={value.name} />
          </Styled.Avatar>
          <Styled.Name>{value.name}</Styled.Name>
          <Styled.Title>{value.title}</Styled.Title>
        </Styled.Profile>
      )}
    </Styled.Item>
  );
}
