import { createSlice } from '@reduxjs/toolkit';

import { redux } from '~/utils';

export const initialState = {
  filters: {},
  current: 1,
  pageSize: 8,
};

export default createSlice({
  name: 'events',
  initialState,

  reducers: {
    ...redux.createSetters(['filters', 'current', 'pageSize']),
  },
});
