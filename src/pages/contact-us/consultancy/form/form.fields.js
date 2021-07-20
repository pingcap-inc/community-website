import * as Yup from 'yup';

import { getDropdownValidator, getTextareaValidator } from '~/pages/contact-us/commonForm/commonForm.fields';
import { getTidbReleaseOptions } from '~/pages/contact-us/utils';

export const getFields = ({ lang, t, tidbReleases }) => {
  const dropdownValidator = getDropdownValidator({ lang });
  const textareaValidator = getTextareaValidator({ lang, t, limit: 100 });

  return {
    tidbNodeNum: {
      name: 'tidb_node_num',
      min: 0,
      placeholder: lang.pleaseEnter,
      validator: Yup.string().required(lang.required),
    },
    tikvNodeNum: {
      name: 'tikv_node_num',
      min: 0,
      placeholder: lang.pleaseEnter,
      validator: Yup.string().required(lang.required),
    },
    tiflashNodeNum: {
      name: 'tiflash_node_num',
      min: 0,
      placeholder: lang.pleaseEnter,
      validator: Yup.string().required(lang.required),
    },
    occupationRateOfTidb: {
      name: 'occupation_rate_of_tidb',
      min: 0,
      max: 100,
      formatter: (value) => value && `${value}%`,
      parser: (value) => value.replace('%', ''),
      placeholder: lang.pleaseEnter,
      validator: Yup.string().required(lang.required),
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
  };
};
