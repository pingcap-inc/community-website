import { createSlice } from '@reduxjs/toolkit';

import { redux } from '~/utils';

const initialState = {
  filters: {},
};

export default createSlice({
  name: 'activities',
  initialState,

  reducers: {
    ...redux.createSetters(['filters']),
  },
});
