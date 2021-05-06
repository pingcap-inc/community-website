import React from 'react';
import { Steps } from 'antd';

import { AUDIT_STATUS_PENDING, AUDIT_STATUS_DONE, AUDIT_STATUS_ERROR, imageWidths, texts } from './audit.constants';
import * as Styled from './audit.styled';

const Audit = ({ status, rejectReason }) => {
  const imageUrl = `/images/account/organization-audit-${status}.png`;

  return (
    <Styled.Page>
      <Styled.Container>
        <Steps current={status === AUDIT_STATUS_PENDING ? 1 : 2}>
          <Steps.Step title="填写资料" />
          <Steps.Step title="提交审核" />
          <Steps.Step title="完成审核" />
        </Steps>
        <Styled.Image src={imageUrl} alt={`audit-status-${status}.png`} $width={imageWidths[status]} />
        <Styled.Hint>{texts[status](rejectReason)}</Styled.Hint>
        <Styled.ButtonContainer>
          {status === AUDIT_STATUS_DONE && <Styled.Button type="primary">进入企业主页</Styled.Button>}
          {status === AUDIT_STATUS_ERROR && <Styled.Button type="primary">重新认证</Styled.Button>}
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.Page>
  );
};

export default Audit;
