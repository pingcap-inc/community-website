import { configureStore } from '@reduxjs/toolkit';

import eventsSlice from '~/pages/events/events.slice';

export const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
  },
});

export { eventsSlice };
