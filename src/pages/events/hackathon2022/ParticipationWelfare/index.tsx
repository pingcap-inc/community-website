import * as React from 'react';

import * as Styled from './index.styled';
import { IParticipationWelfareItem } from '../data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IParticipationWelfareItem[];
}

const ParticipationWelfare: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value) => (
        <Styled.Item key={value.text}>
          <Styled.Icon>{value.icon}</Styled.Icon>
          <Styled.Text>{value.text}</Styled.Text>
        </Styled.Item>
      ))}
    </Styled.Container>
  );
};

export default ParticipationWelfare;
