import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-contact-us'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

export const getTidbReleaseOptions = (releases = []) =>
  releases.map(({ prefix: label, children }) => ({
    label,
    options: children.map((value) => ({
      value,
      label: value,
    })),
  }));
