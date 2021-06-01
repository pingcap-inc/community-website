import { message } from 'antd';
import { getErrorMessage } from '@tidb-community/common/utils/errors';

// TODO: add sentry?
export const handleError = (error) => message.error(getErrorMessage(error), 5);
