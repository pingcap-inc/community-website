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
    <Styled.Container>
      <List
        dataSource={meData.org_invitations}
        renderItem={(invitation) => (
          <List.Item
            key={invitation.id}
            actions={
              invitation.valid
                ? [
                    <Popconfirm
                      title={`确认加入"${invitation.org_company}"？`}
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
            【团队邀请】
            <span>{invitation.inviter_username}</span>
            邀请您加入
            <a href={`/orgs/${invitation.org_name}/members`} target="_blank" rel="noreferrer">
              {invitation.org_name}
            </a>
            团队（所属企业：
            {invitation.org_company}
            ），共同享受丰富的
            <a href="/" target="_blank" rel="noreferrer">
              企业利益
            </a>
            。
          </List.Item>
        )}
      />
    </Styled.Container>
  );
};

export default Invitations;
