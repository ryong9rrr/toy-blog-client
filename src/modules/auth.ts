import { createReducer, deprecated, ActionType, createAsyncAction } from 'typesafe-actions'
const { createStandardAction } = deprecated
import produce from 'immer'
import { createRequestActionTypes } from '~/lib/createRequestSaga'
import { register, login } from '~/lib/api/auth'
import { AxiosError } from 'axios'

export const CHANGE_FIELD = 'auth/CHANGE_FIELD'
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER')
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN')

type AuthState = {
  register: {
    username: string
    password: string
    passwordConfirm: string
  }
  login: {
    username: string
    password: string
    passwordConfirm?: string
  }
}
type AuthMode = 'register' | 'login'
type FieldName = 'username' | 'password' | 'passwordConfirm'
const changeField = createStandardAction(CHANGE_FIELD)<{ form: AuthMode; key: FieldName; value: string }>()
const initializeForm = createStandardAction(INITIALIZE_FORM)<AuthMode>()
const registerAsync = createAsyncAction(REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE)<
  string,
  ReturnType<typeof register>,
  AxiosError
>()
const loginAsync = createAsyncAction(LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE)<
  string,
  ReturnType<typeof login>,
  AxiosError
>()
export const authActions = { changeField, initializeForm }
export const authAsyncActions = { registerAsync, loginAsync }
export type AuthAction = ActionType<typeof authActions>
export type AuthAsyncAction = ActionType<typeof authAsyncActions>

const initialAuthState: AuthState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
}
const auth = createReducer<AuthState, AuthAction>(initialAuthState, {
  [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    produce(state, (draft) => {
      draft[form][key] = value
    }),
  [INITIALIZE_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initialAuthState[form],
  }),
})

export default auth
