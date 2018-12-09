import { createReducer } from 'redux-act'
import { initStart, initSuccess, initFailure, loginStart, loginSuccess, loginFailure } from '../actions/user'


const initialState = {
  isFetching: false,
  error: null,
  token: null,
  email: null
}

const user = createReducer({
  [initStart]: (state) => ({ ...initialState, isFetching: true }),
  [initSuccess]: (state, response) => ({ ...state, isFetching: false, token: response.data.token, email: response.data.user.email }),
  [initFailure]: (state, error) => ({ ...state, isFetching: false, error: error.response.data.error }),

  [loginStart]: (state) => ({ ...initialState, isFetching: true }),
  [loginSuccess]: (state, response) => ({ ...state, isFetching: false, token: response.data.token, email: response.data.user.email }),
  [loginFailure]: (state, error) => ({ ...state, isFetching: false, error: error.response.data.error })
}, initialState)

export default user
