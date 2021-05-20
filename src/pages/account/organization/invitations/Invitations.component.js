import React, { useContext, useEffect, useState } from 'react';
import { Button, Empty, List, message, Popconfirm } from 'antd';
import { api } from '@tidb-community/datasource';
import { useRouter } from 'next/router';
import { utils } from '@tidb-community/ui';

import * as Styled from './invitations.styled';
import PageLoader from 'components/pageLoader';
import { MeContext, NavContext } from 'context';
import { emptyText, okText, cancelText } from './invitations.data';

const Invitations = () => {
  const router = useRouter();
  const { meData, mutateMe, isMeValidating } = useContext(MeContext);
  const { login } = useContext(NavContext);
  const [operating, setOperating] = useState(false);

  useEffect(() => {
    if (meData?.org && !operating) {
      router.replace(`/orgs/${meData.org.slug}/home`);
    }
  });

  if (!meData) {
    if (isMeValidating) {
      return <PageLoader />;
    } else {
      login();
      return null;
    }
  }

  if (meData.org) {
    return <PageLoader />;
  }

  if (!(meData.org_invitations && meData.org_invitations.length)) {
    return (
      <PageLoader>
        <Empty>{emptyText}</Empty>
      </PageLoader>
    );
  }

  const responseInvitation = (id, action) => async () => {
    try {
      setOperating(true);
      await api.orgs.invitations.responseInvitation({ id, action });
      await mutateMe();
    } catch (e) {
      message.error(utils.errors.getErrorMessage(e), 5);
    } finally {
      setOperating(false);
    }
  };

  return (
    <Styled.Background>
      <Styled.Container>
        <List
          bordered
          dataSource={meData.org_invitations}
          renderItem={(invitation) => (
            <List.Item
              key={invitation.id}
              actions={
                invitation.valid
                  ? [
                      <Popconfirm
                        title={`确认加入"${invitation.org_name}"团队？`}
                        onConfirm={responseInvitation(invitation.id, 'accept')}
                        okText={okText}
                        cancelText={cancelText}
                        disabled={operating}
                      >
                        <Button type="link" size="small">
                          同意
                        </Button>
                      </Popconfirm>,
                      <Popconfirm
                        title={`确认拒绝加入"${invitation.org_company}"？`}
                        onConfirm={responseInvitation(invitation.id, 'refuse')}
                        okText={okText}
                        cancelText={cancelText}
                        disabled={operating}
                      >
                        <Button type="link" size="small">
                          拒绝
                        </Button>
                      </Popconfirm>,
                    ]
                  : [
                      <Button size="small" type="text" disabled>
                        失效
                      </Button>,
                    ]
              }
            >
              <Styled.TextContent>
                【团队邀请】
                <span>{invitation.inviter_username}</span>
                &nbsp; 邀请您加入 &nbsp;
                {invitation.org_name}
                &nbsp; 团队（所属企业：
                {invitation.org_company}
                ），共同享受丰富的社区权益。
              </Styled.TextContent>
            </List.Item>
          )}
        />
      </Styled.Container>
    </Styled.Background>
  );
};

export default Invitations;
