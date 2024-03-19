import { configureStore } from '@reduxjs/toolkit'
import { eventSlice } from '../../features/events/eventSlice'
import { modalSlice } from '../common/modals/modalsSlice'
import { authSlice } from '../../features/auth/authSlice'


export const store = configureStore({
  reducer: {
    events: eventSlice.reducer,
    modals: modalSlice.reducer,
    auth: authSlice.reducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
