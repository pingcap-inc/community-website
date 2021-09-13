import { createSlice } from '@reduxjs/toolkit';

import { redux } from '~/utils';

const initialState = {
  categoryFilter: null,
};

export default createSlice({
  name: 'activities',
  initialState,

  reducers: {
    ...redux.createSetters(['categoryFilter']),
  },
});
