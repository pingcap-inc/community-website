import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-contact-us'])(ctx);

  const isEnabled = process.env.NEXT_PUBLIC_FT_CONTACT_US;
  if (!isEnabled) {
    return {
      notFound: true,
    };
  }

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
