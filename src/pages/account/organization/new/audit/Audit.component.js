import React from 'react';
import { Steps } from 'antd';

import { AUDIT_STATUS, IMAGES, TEXTS } from './audit.constants';
import * as Styled from './audit.styled';

const Audit = ({ status, rejectReason, onClickResetForm, onClickOrgHome }) => {
  return (
    <Styled.Page>
      <Styled.Container>
        <Steps current={status === AUDIT_STATUS.PENDING ? 1 : 2}>
          <Steps.Step title="填写资料" />
          <Steps.Step title="提交审核" />
          <Steps.Step title="完成审核" />
        </Steps>
        <Styled.Image {...IMAGES[status]} />
        <Styled.Hint>{TEXTS[status || -1](rejectReason)}</Styled.Hint>
        <Styled.ButtonContainer>
          {status === AUDIT_STATUS.PASS && (
            <Styled.Button type="primary" onClick={onClickOrgHome}>
              进入企业主页
            </Styled.Button>
          )}
          {status === AUDIT_STATUS.DENY && (
            <Styled.Button type="primary" onClick={onClickResetForm}>
              重新认证
            </Styled.Button>
          )}
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.Page>
  );
};

export default Audit;
