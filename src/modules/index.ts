import { configureStore } from '@reduxjs/toolkit'
import { registerSlice, loginSlice } from './auth'

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    login: loginSlice.reducer,
  },
  devTools: true, // redux-toolkit에 익스텐션이 자동으로 설치되서 따로 설치해주지 않아도 된다.
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
