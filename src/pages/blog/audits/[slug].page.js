import BlogPage from '~/pages/blog/[slug]/index.page';
import { getI18nProps } from '~/utils/i18n.utils';
import { getPageQuery } from '~/utils/pagination.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);
  const { page, size } = getPageQuery(ctx.query);
  return {
    props: {
      ...i18nProps,
      page,
      size,
    },
  };
};

export default BlogPage
