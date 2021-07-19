import * as Yup from 'yup';

import { getTidbReleaseOptions } from '~/pages/contact-us/utils';

export const getFields = ({ lang, t, tidbReleases }) => {
  const { type: typeLang, priority: priorityLang } = lang;

  const dropdownValidator = Yup.mixed().required(lang.required);

  const textareaValidator = Yup.string()
    .max(500, ({ max }) => t('errors.limit', { max }))
    .required(lang.required);

  return {
    type: {
      name: 'emergency_type',
      placeholder: lang.pleaseSelect,
      options: [
        {
          value: 'online',
          label: typeLang.online,
        },
        {
          value: 'offline',
          label: typeLang.offline,
        },
      ],
      validator: dropdownValidator,
    },

    priority: {
      name: 'priority',
      placeholder: lang.pleaseSelect,
      options: [
        {
          value: 'p0',
          label: priorityLang.p0,
        },
        {
          value: 'p1',
          label: priorityLang.p1,
        },
        {
          value: 'p2_and_below',
          label: priorityLang.p2,
        },
      ],
      validator: dropdownValidator,
    },

    tidbVersion: {
      name: 'tidb_version',
      placeholder: lang.pleaseSelect,
      options: getTidbReleaseOptions(tidbReleases),
      validator: dropdownValidator,
    },

    summary: {
      name: 'summary',
      placeholder: lang.summary.placeholder,
      validator: textareaValidator,
    },

    background: {
      name: 'background',
      placeholder: lang.background.placeholder,
      validator: textareaValidator,
    },

    appearance: {
      name: 'appearance',
      placeholder: lang.appearance.placeholder,
      validator: textareaValidator,
    },

    problem: {
      name: 'problem',
      placeholder: lang.problem.placeholder,
      validator: textareaValidator,
    },

    affect: {
      name: 'affect',
      placeholder: lang.affect.placeholder,
      validator: textareaValidator,
    },
  };
};
