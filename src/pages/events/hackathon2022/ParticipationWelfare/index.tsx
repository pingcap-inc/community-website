import * as React from 'react';

import * as Styled from './index.styled';
import Icon0 from './icon-0.svg';
import Icon1 from './icon-1.svg';
import Icon2 from './icon-2.svg';
import Icon3 from './icon-3.svg';
import Icon4 from './icon-4.svg';
import Icon5 from './icon-5.svg';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [
  { icon: <Icon0 />, text: '专业导师赛前辅导' },
  { icon: <Icon1 />, text: '参赛者证书' },
  { icon: <Icon2 />, text: '参赛者专属周边' },
  { icon: <Icon3 />, text: '获奖队伍 PingCAP & TiDB 官网专题推广' },
  { icon: <Icon4 />, text: '个人 & 团队品牌宣传' },
  { icon: <Icon5 />, text: '专题采访' },
];

const ParticipationWelfare: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
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
