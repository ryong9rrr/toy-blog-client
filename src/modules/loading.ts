import { createReducer, deprecated, ActionType } from 'typesafe-actions'
const { createStandardAction } = deprecated

export const START_LOADING = 'loading/START_LOADING'
export const FINISH_LOADING = 'loading/FINISH_LOADING'

type LoadingState = {
  [key: string]: boolean
}
const startLoading = createStandardAction(START_LOADING)<string>()
const finishLoading = createStandardAction(FINISH_LOADING)<string>()
export const loadingActions = { startLoading, finishLoading }
export type LoadingAction = ActionType<typeof loadingActions>

const initialLoadingState: LoadingState = {}
const loading = createReducer<LoadingState, LoadingAction>(initialLoadingState, {
  [START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
})

export default loading

// import { Action } from 'redux'

// export interface LoadingState {
//   [key: string]: boolean
// }

// const getLoadingMatches = (actionType: string) => /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType)

// const isLoadingReducer = (state: LoadingState = {}, action: Action) => {
//   const matches = getLoadingMatches(action.type)

//   if (!matches) {
//     return state
//   }

//   const [, requestName, requestStatus] = matches
//   return {
//     ...state,
//     [requestName]: requestStatus === 'REQUEST',
//   }
// }

// export default isLoadingReducer

// import { createSlice } from '@reduxjs/toolkit'

// const initialLoadingState = {
//   loading: false,
// }

// export const loadingSlice = createSlice({
//   name: 'loading',
//   initialState: initialLoadingState,
//   reducers: {
//     startLoading: (state) => {
//       state.loading = true
//     },
//     finishLoading: (state) => {
//       state.loading = false
//     },
//   },
// })

// export const loadingActions = loadingSlice.actions
