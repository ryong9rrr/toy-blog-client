import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialLoginState = {
  username: '',
  password: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginState,
  reducers: {
    changeField: (state, action: PayloadAction<{ key: keyof typeof initialLoginState; value: string }>) => {
      state[action.payload.key] = action.payload.value
    },
    initializeForm: (state) => {
      state = { ...initialLoginState }
    },
  },
})

export const loginActions = loginSlice.actions
