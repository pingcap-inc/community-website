import { createContext, useContext, useMemo, useState } from 'react';
import { createFactory } from '@634750802/a-editor';

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
  const [value, setValue] = useState([{ type: 'paragraph', children: [{ text: '' }] }]);

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
    value,
    setValue,
  };
}

export default EditContext;
