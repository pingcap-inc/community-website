import * as React from 'react';

import * as Styled from './index.styled';
import { IThemeRace } from '../data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IThemeRace[];
}

const ThemeRace: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
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
