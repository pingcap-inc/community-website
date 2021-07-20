import * as Yup from 'yup';

import { getDropdownValidator, getTextareaValidator } from '~/pages/contact-us/commonForm/commonForm.fields';
import { getTidbReleaseOptions } from '~/pages/contact-us/utils';

export const getFields = ({ lang, t, tidbReleases }) => {
  const dropdownValidator = getDropdownValidator({ lang });
  const textareaValidator = getTextareaValidator({ lang, t, limit: 100 });
  const inputValidator = Yup.string().required(lang.required);

  return {
    tidbNodeNum: {
      name: 'tidb_node_num',
      min: 0,
      placeholder: lang.pleaseEnter,
      validator: inputValidator,
    },
    tikvNodeNum: {
      name: 'tikv_node_num',
      min: 0,
      placeholder: lang.pleaseEnter,
      validator: inputValidator,
    },
    tiflashNodeNum: {
      name: 'tiflash_node_num',
      min: 0,
      placeholder: lang.pleaseEnter,
      validator: inputValidator,
    },
    occupationRateOfTidb: {
      name: 'occupation_rate_of_tidb',
      min: 0,
      max: 100,
      formatter: (value) => value && `${value}%`,
      parser: (value) => value.replace('%', ''),
      placeholder: lang.pleaseEnter,
      validator: inputValidator,
    },
    tidbVersion: {
      name: 'tidb_version',
      placeholder: lang.pleaseSelect,
      mode: 'multiple',
      options: getTidbReleaseOptions(tidbReleases),
      validator: dropdownValidator,
    },
    keyScene: {
      name: 'key_scene',
      placeholder: lang.pleaseEnter,
      validator: textareaValidator,
    },
    currentArchitecture: {
      name: 'current_scenarios_and_architecture',
      placeholder: lang.pleaseEnter,
      validator: textareaValidator,
    },
    painPoints: {
      name: 'pain_points',
      placeholder: lang.pleaseEnter,
      validator: textareaValidator,
    },
    challenge: {
      name: 'technical_debt',
      placeholder: lang.pleaseEnter,
      validator: textareaValidator,
    },
    expectedBenefits: {
      name: 'expect_benefits_from_tidb',
      placeholder: lang.pleaseEnter,
      validator: textareaValidator,
    },
    pocDate: {
      name: 'launch_or_poc_date',
      placeholder: lang.pleaseEnter,
      validator: textareaValidator,
    },
    estimate: {
      name: 'person_resource',
      min: 0,
      placeholder: lang.pleaseEnter,
      validator: inputValidator,
    },
    tidbUsage: {
      name: 'tidb_usage',
      options: [
        {
          label: 'HTAP',
          value: 'htap',
        },
        {
          label: 'OLAP',
          value: 'olap',
        },
        {
          label: 'OLAP Scale',
          value: 'olap_scale',
        },
        {
          label: 'RawKV',
          value: 'rawkv',
        },
      ],
      validator: Yup.array().required(lang.required).min(1, lang.required),
    },
  };
};
