// @ts-ignore
import Layout from './layout';
import PrivateMessages from './PrivateMessages.component';
import { usePrivateMessages } from '~/pages/private-messages/hooks';
import { getI18nProps } from '~/utils/i18n.utils';

export const getStaticProps = async () => {
  const i18nProps = await getI18nProps(['common'])();

  return {
    props: {
      ...i18nProps,
    },
  };
};

export default function Page() {
  const messages = usePrivateMessages(true);
  return <PrivateMessages messages={messages} />;
}

Page.Layout = Layout;
