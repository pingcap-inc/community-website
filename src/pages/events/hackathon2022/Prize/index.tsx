import * as React from 'react';

import * as Styled from './index.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Prize: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Description>
        各赛道 <span style={{ color: '#00CF71' }}>Top 6</span> 均可获得现金奖项
      </Styled.Description>
      <Styled.SpecialPrizeTitle>特别奖项</Styled.SpecialPrizeTitle>
      <Styled.SpecialPrizeDescription>仅应用组</Styled.SpecialPrizeDescription>
    </Styled.Container>
  );
};

export default Prize;
