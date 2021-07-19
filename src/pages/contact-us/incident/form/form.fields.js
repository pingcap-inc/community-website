import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

import { getTidbReleaseOptions } from '~/pages/contact-us/utils';

const { buildSchema, buildInitialValues } = utils.form;

export const getFields = ({ lang, t, tidbReleases }) => {
  const { type: typeLang, priority: priorityLang } = lang;

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
      validator: Yup.mixed().required(lang.required),
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
    },
    tidbVersion: {
      name: 'tidb_version',
      placeholder: lang.pleaseSelect,
      options: getTidbReleaseOptions(tidbReleases),
    },
  };
};

export const getSchema = (fields) => buildSchema(fields);

export const getInitialValues = (fields) => buildInitialValues(fields);
