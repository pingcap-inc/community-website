import { utils } from '@tidb-community/common';

export const getCaptcha = () => {
  const recaptchaKey = import.meta.env.VITE_RE_CAPTCHA_SITE_KEY;
  return utils.form.getCaptchaToken(recaptchaKey);
};
