import React, { useContext } from 'react';
import { Button, Empty, List, message, Popconfirm } from 'antd';

import { api } from '@tidb-community/datasource';
import { utils } from '@tidb-community/ui';
import { MeContext } from 'context';
import { emptyText, okText, cancelText } from './invitations.data';
import * as Styled from './invitations.styled';

const Invitations = () => {
  const { meData, mutateMe } = useContext(MeContext);

  if (!meData) {
    return <></>;
  }

  if (!(meData.org_invitations && meData.org_invitations.length)) {
    return <Empty>{emptyText}</Empty>;
  }

  const responseInvitation = (id, action) => async () => {
    try {
      await api.orgs.invitations.responseInvitation({ id, action });
      mutateMe();
    } catch (e) {
      message.error(utils.errors.getErrorMessage(e), 5);
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
                <Button type="link" href={`/orgs/${invitation.org_slug}/members`} target="_blank">
                  {invitation.org_name}
                </Button>
                &nbsp; 团队（所属企业：
                {invitation.org_company}
                ），共同享受丰富的 &nbsp;
                <Button type="link" href="/" target="_blank">
                  企业利益
                </Button>
                &nbsp; 。
              </Styled.TextContent>
            </List.Item>
          )}
        />
      </Styled.Container>
    </Styled.Background>
  );
};

export default Invitations;
