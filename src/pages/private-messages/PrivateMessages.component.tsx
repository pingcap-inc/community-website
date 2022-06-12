import { AsktugPrivateMessage, AsktugUser } from '~/api/asktug';
import { List } from 'antd';
import { Link as RawLink } from '@tidb-community/ui';
import styled from 'styled-components';
import { colors } from '@pingcap-inc/tidb-community-ui';
import { askTugDomain } from '~/api/asktug';
import { cdn } from '~/utils';

interface PrivateMessagesProp {
  messages: (AsktugPrivateMessage & { users: AsktugUser[] })[];
}

const Link = styled(RawLink)`
  font-size: 16px;
`;

const PlaceHolder = styled.div`
  // center a placeholder image
  background-image: url('${cdn.getImageUrl('/images/list-placeholder.svg')}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 120px;
  //margin-top: 4rem;
  width: 100%;
`;

export function ListPlaceholder({ text }: { text: string }) {
  return (
    <div
      style={{
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
        height: 600,
        background: '#F7F8F9',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <PlaceHolder />
        <div style={{ fontSize: 16, color: colors.F2, marginTop: '1rem' }}>{text}</div>
      </div>
    </div>
  );
}

const PrivateMessages = ({ messages }: PrivateMessagesProp) => {
  if (!messages || messages.length === 0) return <ListPlaceholder text={'还没有私信哦'} />;

  return (
    <List
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={messages}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<Link href={`${askTugDomain}/t/topic/${item.id}`}>{item.fancy_title}</Link>}
            description={item.users.reduce((acc, user) => acc + user.username + ' ', '')}
          />
          <div style={{ color: '#8C8C8C' }}>{new Date(item.last_posted_at).toLocaleDateString('zh-Hans-CN')}</div>
        </List.Item>
      )}
    />
  );
};

export default PrivateMessages;
