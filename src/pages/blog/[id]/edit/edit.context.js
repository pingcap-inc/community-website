import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { createFactory } from '@634750802/a-editor';
import { api } from '@tidb-community/datasource';
import { useRouter } from 'next/router';

const EditContext = createContext({
  title: '',
  origin: false,
  category: undefined,
  tags: [],
  content: [],
  setTitle: () => {},
  setOrigin: () => {},
  setCategory: () => {},
  setTags: () => {},
  setContent: () => {},
});

EditContext.displayName = 'EditContext';

export function useEditContext() {
  return useContext(EditContext);
}

export function useEditContextProvider() {
  const factory = useMemo(() => createFactory(), []);
  const [title, setTitle] = useState('');
  const [origin, setOrigin] = useState(false);
  const [category, setCategory] = useState(undefined);
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState([{ type: 'paragraph', children: [{ text: '' }] }]);

  return {
    factory,
    title,
    setTitle,
    origin,
    setOrigin,
    category,
    setCategory,
    tags,
    setTags,
    content,
    setContent,
  };
}

export function useEditMethods() {
  const router = useRouter();
  const editContext = useEditContext();

  const {
    query: { id },
  } = router;

  const save = useCallback(async () => {
    const { title, origin, category, tags, content } = editContext;
    const body = {
      title,
      origin: typeof origin === 'string' ? 'REPOST' : 'ORIGIN',
      sourceURL: typeof origin === 'string' ? origin : undefined,
      content: JSON.stringify(content),
      category: category?.id,
      tags: tags.map((tag) => tag.id),
      coverImageURL: undefined, // TODO
    };
    if (id === 'new') {
      const res = await api.blog.posts.create(body);
      await router.push({ query: { '[id]': res.id } });
      return res;
    } else {
      return api.blog.posts.post.update(Number(id), body);
    }
  }, [id, router, editContext]);

  const saveAndPublish = useCallback(async () => {
    const { id } = await save();
    await api.blog.posts.post.publish(id);
  }, [save]);

  return {
    save,
    saveAndPublish,
  };
}

export default EditContext;
