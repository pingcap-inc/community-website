import BlogPage from '~/pages/blog/[slug]/index.page';
import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);
  return {
    props: {
      ...i18nProps,
    },
  };
};

export default function AuditsDetailPage() {
  return <BlogPage />;
}
