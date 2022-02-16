import { AsktugPrivateMessage, AsktugUser, PrivateMessages } from '~/api/asktug';
import { useContext, useMemo } from 'react';
import { MeContext } from '~/context';
import useSWR from 'swr';
import { fetcher } from '~/api';
import * as R from 'ramda';

export const usePrivateMessages = (sent: boolean): (AsktugPrivateMessage & { users: AsktugUser[] })[] => {
  const { meData } = useContext(MeContext);
  const { data } = useSWR<PrivateMessages>(
    meData?.username ? ['asktug.getPrivateMessages' + (sent ? 'Sent' : ''), { username: meData?.username }] : null,
    { fetcher }
  );
  return useMemo(() => {
    let messages = undefined;
    if (data) {
      const userLookup = R.indexBy(R.prop('id'))(data.users);
      messages = R.map(
        (x) => ({ users: R.map((i) => userLookup[i.user_id] ?? 'unknown', x.posters), ...x }),
        data.topic_list.topics
      );
    }
    return messages;
  }, [data]);
};
