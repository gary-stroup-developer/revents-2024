import { configureStore } from '@reduxjs/toolkit'
import { eventSlice } from '../../features/events/eventSlice'


export const store = configureStore({
  reducer: {
    events: eventSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch