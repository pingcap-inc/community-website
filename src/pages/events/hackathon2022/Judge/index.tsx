import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';

import * as Styled from './index.styled';
import { IJudgeItem } from '../data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IJudgeItem[];
}

const Judge: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value, index) => (
        <Styled.Column key={index}>
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
            <Image {...value.avatar} alt={value.name} />
          </Styled.Avatar>
          <Styled.Name>{value.name}</Styled.Name>
          <Styled.Title>{value.title}</Styled.Title>
        </Styled.Profile>
      )}
    </Styled.Item>
  );
}
