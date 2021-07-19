import * as Yup from 'yup';

export const getFields = ({ lang, t, tidbReleases }) => {
  const { type: typeLang } = lang;

  const dropdownValidator = Yup.mixed().required(lang.required);

  const textareaValidator = Yup.string()
    .max(500, ({ max }) => t('errors.limit', { max }))
    .required(lang.required);

  return {
    type: {
      name: 'cooperation_type',
      placeholder: lang.pleaseSelect,
      options: [
        {
          value: 'technology',
          label: typeLang.technology,
        },
        {
          value: 'community',
          label: typeLang.community,
        },
        {
          value: 'other',
          label: typeLang.other,
        },
      ],
      validator: dropdownValidator,
    },

    detail: {
      name: 'detail',
      placeholder: lang.detail.placeholder,
      rows: 8,
      validator: textareaValidator,
    },
  };
};
