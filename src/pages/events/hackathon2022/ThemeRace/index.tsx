import * as React from 'react';

import * as Styled from './index.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [
  {
    color: '#F67200',
    name: '应用组',
    body: '以体现 TiDB 产品价值为主，基于 TiDB 之上实现代码开源的产品、工具、应用等均可。部署方式上，更推荐基于 Cloud 构建 TiDB 相关应用。',
  },
  {
    color: '#00CF71',
    name: 'TiDB 产品组',
    body: '为 TiDB 内核产品以及 TiCDC、TiDB Lightning、TiUP 等周边工具的性能、稳定性、易用性或功能等各方面做出提升。',
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
