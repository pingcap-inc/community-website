import * as yup from 'yup';
import React, { useState } from 'react';
import { message } from 'antd';

import { api } from '@tidb-community/datasource';

import * as Styled from './subscription.styled';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

const schema = yup.object().shape({
  email: yup.string().email(),
});

const Subscription = () => {
  const [email, setEmail] = useState('');
  const { isSmallScreen } = useIsSmallScreen();

  // validate and subscribe
  const subscribeEmail = () => {
    schema.isValid({ email }).then(async (valid) => {
      if (!legalConfirmation) {
        message.warn('请确认隐私条款');
      } else if (valid) {
        try {
          await api.subscribe.addEmail(email);
          message.success('订阅成功');
        } catch (e) {
          // when API call returns an error
          message.error(e.response.data.detail);
        }
      } else {
        // when yup validation fails
        message.error('请输入合法的邮件地址');
      }
    });
  };

  const checkLegal = () => setLegalConfirmation(!legalConfirmation);

  const [legalConfirmation, setLegalConfirmation] = useState(false);

  return (
    <Styled.Container>
      <Styled.TwoColumns
        isSmallScreen={isSmallScreen}
        leftPanel={
          <>
            <Styled.Slogan>
              TiDB 及其生态项目由来自全球各地的 1400+ 位贡献者共同建设与维护，由此查看
              <Styled.Link href={'https://contributor.tidb.io/people/contributor'}>贡献者列表</Styled.Link>
            </Styled.Slogan>
            <Anchor href={'https://pingcap.com/zh/privacy-policy'}>
              <Styled.ActionButton>隐私政策</Styled.ActionButton>
            </Anchor>
          </>
        }
        rightPanel={
          <>
            <Styled.Slogan>订阅 TiDB 社区的最新资讯</Styled.Slogan>
            <Styled.EmailInput
              $submitDisabled={!legalConfirmation}
              enterButton={'提交'}
              onChange={(e) => setEmail(e.target.value)}
              onSubmit={subscribeEmail}
              placeholder={'电子邮箱地址'}
            />
            <Styled.TermCaption>
              <Styled.LegalCheckbox checked={legalConfirmation} onChange={checkLegal} />
              本人已阅读并同意 TiDB Community 的
              <Styled.Link href={'https://pingcap.com/zh/privacy-policy'}>隐私政策</Styled.Link>
            </Styled.TermCaption>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Subscription;
