import * as React from 'react';

import * as Styled from './Verification.styled';
import CompanyVerification from '~/pages/my/company/cards/CompanyVerification';
import useSWR from 'swr';
import { ECompanyVerifiedStatus, profile } from '~/api/me';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Verification: React.FC<IProps> = (props) => {
  //function Verification.component(props: IProps) {
  const { children, className, ...rest } = props;
  const { data } = useSWR('/api/profile', profile);
  const status: ECompanyVerifiedStatus = data?.data.company_verified_status;
  let descriptionNode: React.ReactNode;
  switch (status) {
    case ECompanyVerifiedStatus.verified: {
      descriptionNode = '如您的公司信息发生变化，可更新上方信息后，重新申请认证';
      break;
    }
    default: {
      descriptionNode = '想要获得更多社区权益，您还可以：';
      break;
    }
  }
  return (
    <Styled.Container {...rest}>
      <Styled.Description>{descriptionNode}</Styled.Description>
      <Styled.List>
        <CompanyVerification />
      </Styled.List>
    </Styled.Container>
  );
};

export default Verification;
