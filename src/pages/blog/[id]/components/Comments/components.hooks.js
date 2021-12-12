import { useCallback, useEffect, useState } from 'react';
import { api } from '@tidb-community/datasource';

export const useComments = (blogId, page) => {
  const [tick, setTick] = useState(0);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    setLoading(true);
    api.blog.posts.post
      .comments(blogId, page)
      .then(({ content, page }) => {
        setComments(content);
        setTotalComments(page.totalElements);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [blogId, page, tick]);

  const reload = useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);

  return { loading, comments, totalComments, reload };
};
