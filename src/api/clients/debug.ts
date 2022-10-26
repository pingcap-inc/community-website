import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

function isAxiosError(error: unknown): error is AxiosError {
  return error && typeof error === 'object' && 'config' in error && 'response' in error;
}

export function debugRequestInterceptor(response: AxiosResponse): AxiosResponse {
  // eslint-disable-next-line no-console
  console.debug('[axios:debug:success]', response.status, response.config.method, response.request.path);
  return response;
}

export function debugErrorResponseInterceptor(error: unknown) {
  if (!error) {
    throw error;
  }
  if (isAxiosError(error)) {
    console.error('[axios:debug:error]', error.response.status, error.config.method, error.response.request.path);
  }
  throw error;
}

export function applyDebugInterceptor(client: AxiosInstance) {
  if (process.env.NODE_ENV === 'development' || process.env.AXIOS_DEBUG === 'true') {
    client.interceptors.response.use(debugRequestInterceptor, debugErrorResponseInterceptor);
  }
}
