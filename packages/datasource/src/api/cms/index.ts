import axios, { AxiosInstance } from 'axios';

export interface IStrapiRequestParamsPagination {
  _start: number;
  _limit: number;
}

export interface IStrapiParamsCommon extends IStrapiRequestParamsPagination {
  _sort?: string;
  _publicationState?: string;
}

export function getStrapiPaginationParams(page = 1, size = 10): IStrapiRequestParamsPagination {
  return { _start: (page - 1) * size, _limit: size };
}

export async function getInstanceOnServer(baseURL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL): Promise<AxiosInstance> {
  const token = await getStrapiTokenFromGlobal();

  const instance = axios.create({ baseURL });
  instance.interceptors.request.use((config) => {
    //config.headers.Authorization = `Bearer ${authResponse.data.token}`;
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    return config;
  });

  instance.interceptors.request.use(
    (config) => {
      //console.log('[strapi on server] request config: ', config);
      return config;
    },
    (error) => {
      console.error('[strapi on server] request error config: ', error);
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      //console.log('[strapi on server] response config: ', response);
      return response;
    },
    (error) => {
      console.error('[strapi on server] response error config: ', error);
      return Promise.reject(error);
    }
  );

  return instance;
}

/**
 * getInstanceOnClient()
 * used to get a strapi proxy axios instance on client
 * may use it in the future
 */
/*export async function getInstanceOnClient(
  baseURL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? '') + '/next-api/cms'
): Promise<AxiosInstance> {
  const instance = axios.create({ baseURL });
  instance.interceptors.response.use(({ data }) => data);

  instance.interceptors.request.use(
    (config) => {
      //console.log('[strapi on server] request config: ', config);
      return config;
    },
    (error) => {
      console.error('[strapi on server] request error config: ', error);
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      //console.log('[strapi on server] response config: ', response);
      return response;
    },
    (error) => {
      console.error('[strapi on server] response error config: ', error);
      return Promise.reject(error);
    }
  );

  return instance;
}*/

async function getStrapiToken(
  baseURL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL,
  email = process.env.NEXT_PUBLIC_STRAPI_EMAIL,
  password = process.env.NEXT_PUBLIC_STRAPI_PASSWORD
): Promise<string> {
  const instance = axios.create({ baseURL });
  const authResponse = await instance.post('/admin/login', { email, password });
  const { token } = authResponse.data.data;
  return token;
}

export interface IStrapiToken {
  token: string;
  refreshAt: number;
}

async function getStrapiTokenFromGlobal(expireSecond = 60 * 60 * 24 * 1000): Promise<string> {
  //@ts-ignore
  const { strapiToken } = global;
  if (strapiToken) {
    const { token, refreshAt } = strapiToken;
    const isExpire = new Date().getTime() - refreshAt > expireSecond;
    if (token && !isExpire) {
      //eslint-disable-next-line no-console
      console.debug('strapi token cache hint!');
      return token;
    }
  }
  //eslint-disable-next-line no-console
  console.debug('strapi token cache NOT hint!');
  const token = await getStrapiToken();
  global.strapiToken.token = token;
  global.strapiToken.refreshAt = new Date().getTime();
  return token;
}
