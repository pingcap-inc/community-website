import Cookie from 'js-cookie';

/**
 * Creates an axios request inject the captcha token automatically.
 *
 * Will not inject when:
 *  - request body is not object
 *  - request body has no false-value key
 *
 * @example
 *    Axios.interceptors.request.use(createCaptchaInterceptor('re_token_v3', utils.getCaptcha))
 *
 *    // directly call
 *    Axios.post('/foo/bar', { 're_captcha_v3': undefined })
 *
 *    // wrapped function
 *    function postFooBar ({ re_captcha_v3 }) {
 *      return axios.post('/foo/bar', { re_captcha_v3 })
 *    }
 *    postFooBar({})
 *
 * @param {string} key The key of captcha token of the request body
 * @param {function(): Promise<string> | string} getCaptcha an sync or async function for getting captcha token
 * @return {function(AxiosRequestConfig): Promise<AxiosRequestConfig>}
 */
export const createCaptchaInterceptor = (key, getCaptcha) => {
  return async (config) => {
    if (typeof config?.data === 'object' && key in config.data && !config.data.key) {
      config.data.re_token_v3 = await getCaptcha();
    }
    return Promise.resolve(config);
  };
};

/**
 * Copy value from cookie to http header
 *
 * @param {string} cookieKey
 * @param {string} httpHeaderKey
 * @return {function(AxiosRequestConfig): AxiosRequestConfig}
 */
export const createCookieCopyInterceptor = (cookieKey, httpHeaderKey) => {
  return (config) => {
    const cookieValue = Cookie.get(cookieKey);
    if (typeof cookieValue === 'string') {
      config.headers = config.headers || {};
      config.headers[httpHeaderKey] = cookieValue;
    }
    return config;
  };
};
