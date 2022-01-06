import * as React from 'react';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    redirect: {
      destination: 'profile/answer',
      permanent: true,
    },
  }
}

export default function ProfilePage() {
  return (
    <></>
  )
}
