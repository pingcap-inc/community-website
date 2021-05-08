import React, { useContext } from 'react';
import { Button, Empty, List, message, Popconfirm } from 'antd';

import { api } from '@tidb-community/datasource';
import { utils } from '@tidb-community/ui';
import { MeContext } from 'context';
import { emptyText, okText, cancelText } from './invitations.data';
import * as Styled from './invitations.styled';

const Invitations = () => {
  const { meData, reload } = useContext(MeContext);

  if (!meData) {
    return <></>;
  }

  if (!(meData.org_invites && meData.org_invites.length)) {
    return <Empty>{emptyText}</Empty>;
  }

  const responseInvite = (id, action) => async () => {
    try {
      await api.orgs.invites.responseInvite({ id, action });
      reload();
    } catch (e) {
      message.error(utils.errors.getErrorMessage(e), 5);
    }
  };

  return (
    <Styled.Container>
      <List
        dataSource={meData.org_invites}
        renderItem={invitation => (
          <List.Item
            key={invitation.id}
            actions={
              invitation.valid ? [
                <Popconfirm
                  title={`确认加入"${invitation.org_company}"？`}
                  onConfirm={responseInvite(invitation.id, 'accept')}
                  okText={okText}
                  cancelText={cancelText}
                >
                <Button
                  type='link'
                  size='small'
                >
                  同意
                </Button>
              </Popconfirm>,
                <Popconfirm
                  title={`确认拒绝加入"${invitation.org_company}"？`}
                  onConfirm={responseInvite(invitation.id, 'refuse')}
                  okText={okText}
                  cancelText={cancelText}
                >
                <Button
                  type='link'
                  size='small'
                >
                  拒绝
                </Button>
              </Popconfirm>,
              ] : [<Button size='small' type='text' disabled>已失效</Button>]
            }
          >
            {invitation.inviter_username}
            邀请您加入
            {invitation.org_company}
            。
          </List.Item>
        )}
      />

    </Styled.Container>
  );
};

export default Invitations;
