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

export async function getInstanceOnServer(
  baseURL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL,
  email = process.env.NEXT_PUBLIC_STRAPI_EMAIL,
  password = process.env.NEXT_PUBLIC_STRAPI_PASSWORD
): Promise<AxiosInstance> {
  const instance = axios.create({ baseURL });
  const authResponse = await instance.post('/admin/login', { email, password });
  instance.interceptors.request.use((config) => {
    //config.headers.Authorization = `Bearer ${authResponse.data.token}`;
    config.headers = { ...config.headers, Authorization: `Bearer ${authResponse.data.data.token}` };
    return config;
  });

  instance.interceptors.request.use(
    function (config) {
      //console.log('[strapi on server] request config: ', config);
      return config;
    },
    (error) => {
      console.error('[strapi on server] request error config: ', error);
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    function (response) {
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

/*export async function getInstanceOnClient(
  baseURL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? '') + '/next-api/cms'
): Promise<AxiosInstance> {
  const instance = axios.create({ baseURL });
  instance.interceptors.response.use(({ data }) => data);

  instance.interceptors.request.use(
    function (config) {
      //console.log('[strapi on server] request config: ', config);
      return config;
    },
    (error) => {
      console.error('[strapi on server] request error config: ', error);
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    function (response) {
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
