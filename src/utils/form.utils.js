import { api } from '@tidb-community/datasource';
import { utils } from '@tidb-community/common';

const formUtils = utils.form;

export const wrapFormikSubmitFunction = (func) => formUtils.wrapFormikSubmitFunction(func, api.events.dispatchApiError);

export const getRecaptchaToken = () => formUtils.getRecaptchaToken(process.env.NEXT_PUBLIC_RECAPTCHA_KEY);
