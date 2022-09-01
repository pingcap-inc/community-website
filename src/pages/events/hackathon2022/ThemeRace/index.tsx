import * as React from 'react';

import * as Styled from './index.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [
  {
    color: '#F67200',
    name: '应用组',
    body: '本次 Hackathon 主题为「Possibility at Scale」，打破传统技术边界，突破固有思维局限，用 TiDB 释放创新的更多可能性。',
  },
  {
    color: '#00CF71',
    name: 'TiDB 产品组',
    body: '本次 Hackathon 主题为「Possibility at Scale」，打破传统技术边界，突破固有思维局限，用 TiDB 释放创新的更多可能性。',
  },
];

const ThemeRace: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value) => (
        <Styled.ThemeRaceListItem key={value.name}>
          <Styled.ThemeRaceListItemContainer $color={value.color}>
            <Styled.ThemeRaceListItemName $color={value.color}>{value.name}</Styled.ThemeRaceListItemName>
            <Styled.ThemeRaceListItemBody>{value.body}</Styled.ThemeRaceListItemBody>
          </Styled.ThemeRaceListItemContainer>
        </Styled.ThemeRaceListItem>
      ))}
    </Styled.Container>
  );
};

export default ThemeRace;
