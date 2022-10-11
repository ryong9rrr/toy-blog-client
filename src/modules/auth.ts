import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialRegisterState = {
  username: '',
  password: '',
  passwordConfirm: '',
}

const initialLoginState = {
  username: '',
  password: '',
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

export const registerActions = registerSlice.actions
export const loginActions = loginSlice.actions
