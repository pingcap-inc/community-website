import * as React from 'react';

import * as Styled from './Verification.styled';
import CompanyVerification from '~/pages/my/company/cards/CompanyVerification';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Verification: React.FC<IProps> = (props) => {
  //function Verification.component(props: IProps) {
  const { children, className, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Description>享受更多社区专属权益，你还可以：</Styled.Description>
      <Styled.List>
        <CompanyVerification />
      </Styled.List>
    </Styled.Container>
  );
};

export default Verification;
