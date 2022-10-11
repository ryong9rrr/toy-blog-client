import { combineReducers } from 'redux'
import auth from './auth'
import loading from './loading'

const rootReducer = combineReducers({
  auth,
  loading,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
