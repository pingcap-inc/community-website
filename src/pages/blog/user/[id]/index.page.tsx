import * as React from 'react';
import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "querystring";

interface IProps {
}

interface IQuery extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<IProps, IQuery>  = (ctx) => {
  const { id: userId } = ctx.params;
  return {
    redirect: {
      permanent: false,
      destination: `/blog/user/${userId}/posts`,
    },
  };
};

export const getStaticPaths: GetStaticPaths<IQuery> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export default function BlogUserIndexPage(): JSX.Element {
  return <></>;
}
