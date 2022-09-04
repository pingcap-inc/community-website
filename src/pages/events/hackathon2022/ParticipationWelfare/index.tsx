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
  { icon: <Icon1 />, text: '技术同好现场交流' },
  { icon: <Icon2 />, text: '评委大咖深度点评' },
  { icon: <Icon3 />, text: '万元丰厚现金奖励' },
  { icon: <Icon4 />, text: '参赛专属周边礼包' },
  { icon: <Icon5 />, text: '优秀项目多重曝光' },
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
