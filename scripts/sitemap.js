#!/usr/bin/env node

const axios = require('axios');

module.exports = async function getAllBlogs() {
  // retrieveEnvVars()
  const url = `${process.env.NEXT_PUBLIC_BLOG_URL}/api/posts/latest`;
  console.log({ url });
  const { data } = await axios.get(url, {
    params: { size: 1000 },
    withCredentials: true,
    headers: {
      accept: 'application/json',
    },
  });
  // console.log({data})
  const result = data.content.map((value) => ({
    loc: `${process.env.NEXT_PUBLIC_BLOG_URL}/${value.slug}`,
    lastmod: value.lastModifiedAt,
  }));
  console.log({ result });
  return result;
};
