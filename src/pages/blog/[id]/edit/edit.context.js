import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { createFactory } from '@pingcap-inc/tidb-community-editor';
import { api } from '@tidb-community/datasource';
import { useRouter } from 'next/router';
import { message } from 'antd';
import Axios from 'axios';

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
  const [coverImageURL, setCoverImageURL] = useState(undefined);
  const [origin, setOrigin] = useState(false);
  const [category, setCategory] = useState(undefined);
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState([{ type: 'paragraph', children: [{ text: '' }] }]);
  const [blogInfo, setBlogInfo] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const uploadCoverImage = useCallback(async (file) => {
    const { downloadURL, uploadURL } = await api.blog.common.upload(file.name, file.type);
    await Axios.put(uploadURL, file, {
      headers: {
        'content-type': file.type,
        'x-oss-object-acl': 'public-read',
      },
    });
    setCoverImageURL(downloadURL);
  }, []);

  const reload = useCallback((id) => {
    if (id === 'new') {
      setTitle('');
      setOrigin(false);
      setCategory(undefined);
      setContent([{ type: 'paragraph', children: [{ text: '' }] }]);
      setTags([]);
      setBlogInfo(undefined);
      setCoverImageURL(undefined);
      setStatus('DRAFT');
      return Promise.resolve();
    } else {
      setLoading(true);
      return api.blog.posts.post
        .info(Number(id))
        .then((info) => {
          setTitle(info.title);
          setOrigin(info.origin === 'ORIGINAL' ? false : info.sourceURL);
          setTags(info.tags);
          setCategory(info.category);
          setContent(JSON.parse(info.content));
          setBlogInfo(info);
          setCoverImageURL(info.coverImageURL);
          setStatus(info.status);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return {
    factory,
    reload,
    loading,
    blogInfo,
    title,
    setTitle,
    coverImageURL,
    setCoverImageURL,
    uploadCoverImage,
    origin,
    setOrigin,
    category,
    setCategory,
    tags,
    setTags,
    content,
    setContent,
    status,
  };
}

export function useEditMethods() {
  const router = useRouter();
  const editContext = useEditContext();
  const [operating, setOperating] = useState(false);

  const {
    query: { id },
  } = router;

  const save = useCallback(async () => {
    try {
      const { title, coverImageURL, origin, category, tags, content, state } = editContext;
      const body = {
        title,
        origin: typeof origin === 'string' ? 'REPOST' : 'ORIGINAL',
        sourceURL: typeof origin === 'string' ? origin : null,
        content: JSON.stringify(content),
        category: category?.id ?? null,
        tags: tags.map((tag) => tag.id),
        coverImageURL: coverImageURL,
      };
      if (id === 'new') {
        const res = await api.blog.posts.create(body);
        await router.push(`/blog/${res.id}`);
        return res;
      } else {
        switch (state) {
          case 'PUBLISHED': {
            await api.blog.posts.post.cancelPublish(Number(id));
            break;
          }
          case 'DRAFT':
          case 'PENDING': {
            await api.blog.posts.post.cancelSubmit(Number(id));
            break;
          }
          default:
            break;
        }
        await api.blog.posts.post.update(Number(id), body);
        await router.push(`/blog/${id}`);
        return { id: Number(id) };
      }
    } catch (e) {
      message.error('保存失败：' + String(e?.message ?? e));
      throw e;
    } finally {
      setOperating(false);
    }
  }, [id, router, editContext]);

  const saveAndSubmit = useCallback(async () => {
    const { id } = await save();
    const { state } = editContext;
    try {
      switch (state) {
        case 'PUBLISHED': {
          await api.blog.posts.post.cancelPublish(Number(id));
          break;
        }
        case 'DRAFT':
        case 'PENDING': {
          await api.blog.posts.post.cancelSubmit(Number(id));
          break;
        }
        default:
          break;
      }
      await api.blog.posts.post.submit(id);
    } catch (e) {
      message.error('提交失败：' + String(e?.message ?? e));
      throw e;
    } finally {
      setOperating(false);
    }
  }, [save, editContext]);

  return {
    save,
    saveAndSubmit,
    operating,
  };
}

export default EditContext;
