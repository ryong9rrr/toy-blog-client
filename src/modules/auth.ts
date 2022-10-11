import { createAction, handleActions } from 'redux-actions'

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION' as const

export const sampleAction = createAction(SAMPLE_ACTION)

// eslint-disable-next-line
type AuthState = {}

const initialState: AuthState = {}

const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
)

export default auth
