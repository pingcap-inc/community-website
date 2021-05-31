export const getCaptcha = () => {
  /* global grecaptcha */
  const recaptchaKey = process.env.RE_CAPTCHA_SITE_KEY;

  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(recaptchaKey, { action: 'submit' }).then(resolve).catch(reject);
    });
  });
};
