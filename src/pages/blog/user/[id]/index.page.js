import * as React from 'react';

export const getServerSideProps = (ctx) => {
  const { id: userId } = ctx.params;
  return {
    redirect: {
      permanent: false,
      destination: `/blog/user/${userId}/posts`,
    },
  };
};

export default function UserIndexPage({}) {
  return <></>;
}
