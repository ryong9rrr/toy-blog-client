import { createSlice } from '@reduxjs/toolkit'

const initialLoadingState = {
  loading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialLoadingState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    finishLoading: (state) => {
      state.loading = false
    },
  },
})

export const loadingActions = loadingSlice.actions
