import * as React from 'react';

import * as Styled from './SectionTitle.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
}

const SectionTitle: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, icon, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {icon && <Styled.Icon>{icon}</Styled.Icon>}
      <Styled.Text>{children}</Styled.Text>
    </Styled.Container>
  );
};

export default SectionTitle;
