// @ts-ignore
import Layout from './layout';
import PrivateMessages from './PrivateMessages.component';
import { usePrivateMessages } from '~/pages/private-messages/hooks';

export default function Page() {
  const messages = usePrivateMessages(false);
  return <PrivateMessages messages={messages} />;
}

Page.Layout = Layout;
