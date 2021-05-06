import { AxiosResponse } from 'axios';

interface ApiErrorListener {
  ({ detail }: { detail: AxiosResponse }): void;
}

export const useApiErrorListener: (listener: ApiErrorListener, ...rest: any[]) => void;
