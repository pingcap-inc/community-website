import { useEffect, useState } from 'react';
import { api } from '@tidb-community/datasource';

export const useTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const { content } = await api.blog.getTags({ page: 1, size: 100 });
      setTags(content);
    };
    fetchAll();
  }, []);

  return tags;
};

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const { content } = await api.blog.getCategories({ page: 1, size: 100 });
      setCategories(content);
    };
    fetchAll();
  }, []);

  return categories;
};
