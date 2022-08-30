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
      <Styled.Avatar style={{ opacity: !showOverLayer ? 1 : 0 }}>
        <img {...value.avatar} alt={value.name} />
      </Styled.Avatar>
      <Styled.Name style={{ opacity: !showOverLayer ? 1 : 0 }}>{value.name}</Styled.Name>
      <Styled.Title style={{ opacity: !showOverLayer ? 1 : 0 }}>{value.title}</Styled.Title>
      <Styled.OverLayer style={{ opacity: showOverLayer ? 1 : 0, display: showOverLayer ? 'block' : 'none' }}>
        <Styled.OverLayerName>{value.name}</Styled.OverLayerName>
        <Styled.OverLayerTitle>{value.title}</Styled.OverLayerTitle>
        <Styled.OverLayerQuotation>{value.quotation}</Styled.OverLayerQuotation>
      </Styled.OverLayer>
    </Styled.Item>
  );
}
