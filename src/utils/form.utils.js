import { api } from '@tidb-community/datasource';
import { utils } from '@tidb-community/common';

export const wrapFormikSubmitFunction = (func) =>
  utils.form.wrapFormikSubmitFunction(func, api.events.dispatchApiError);

/* global grecaptcha */
export const getRecaptchaToken = () => {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(recaptchaKey, { action: 'submit' }).then(resolve).catch(reject);
    });
  });
};
