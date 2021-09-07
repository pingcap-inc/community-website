import React from 'react';

export const getServerSideProps = async (ctx) => {
  const { env } = process;
  const isEnabled = env.NEXT_PUBLIC_FT_HOME;

  if (!isEnabled) {
    return {
      notFound: true,
    };
  }
};
