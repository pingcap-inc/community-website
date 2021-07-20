import { getDropdownValidator, getTextareaValidator } from '~/pages/contact-us/commonForm/commonForm.fields';

export const getFields = ({ lang, t }) => {
  const { type: typeLang } = lang;
  const dropdownValidator = getDropdownValidator({ lang });
  const textareaValidator = getTextareaValidator({ lang, t, limit: 300 });

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
