import { useCallback, useEffect } from 'react';

const API_ERROR_EVENT = '@tidb-community/datasource:API_ERROR';

export const dispatchApiError = (detail) => {
  if (process.browser) {
    const e = new CustomEvent(API_ERROR_EVENT, {
      detail,
    });
    window.dispatchEvent(e);
  } else {
    console.error(`API error: ${detail}`);
  }
};

export const useApiErrorListener = (listener, ...rest) => {
  const _listener = useCallback(listener, [listener]);

  useEffect(() => {
    const listenerWrapper = ({ detail }) => _listener(detail);
    const args = [API_ERROR_EVENT, listenerWrapper, ...rest];
    window.addEventListener.apply(null, args);
    return () => {
      window.removeEventListener.apply(null, args);
    };
  }, [_listener, rest]);
};
