import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialRegisterState = {
  username: '',
  password: '',
  passwordConfirm: '',
}

export const registerSlice = createSlice({
  name: 'register',
  initialState: initialRegisterState,
  reducers: {
    changeField: (state, action: PayloadAction<{ key: keyof typeof initialRegisterState; value: string }>) => {
      state[action.payload.key] = action.payload.value
    },
    initializeForm: (state) => {
      state = { ...initialRegisterState }
    },
  },
})

export const registerActions = registerSlice.actions
