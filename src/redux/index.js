import { configureStore } from '@reduxjs/toolkit';

import activitiesSlice from '~/pages/activities/activities.slice';

export const store = configureStore({
  reducer: {
    activities: activitiesSlice.reducer,
  },
});

export { activitiesSlice };
