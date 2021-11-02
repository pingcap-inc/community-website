import { api } from '@tidb-community/datasource';
import { utils } from '@tidb-community/common';

const formUtils = utils.form;

export const wrapFormikSubmitFunction = (func) => formUtils.wrapFormikSubmitFunction(func, api.events.dispatchApiError);

export const fetchOrganizationOptions = (word) =>
  api.orgs.searchCompany({ word }).then((result) =>
    result.data.map(({ name }) => ({
      label: name,
      value: name,
    }))
  );
