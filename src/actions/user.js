import { createAction } from 'redux-act'
import { getToken, setToken, removeToken, initUser, loginUser } from '../lib/api'

export const initStart = createAction()
export const initSuccess = createAction()
export const initFailure = createAction()

export const init = () => {
  return dispatch => {
    if (!getToken()) {
      return
    }

    dispatch(initStart())

    initUser()
      .then(response => {
        setToken(response.data.token)

        dispatch(initSuccess(response))
      })
      .catch(error => {
        dispatch(initFailure(error))
      })
  }
}

export const loginStart = createAction()
export const loginSuccess = createAction()
export const loginFailure = createAction()

export const login = (email, password) => {
  return dispatch => {
    removeToken()

    dispatch(loginStart())

    const payload = {
      email: email,
      password: password
    }

    loginUser(payload)
      .then(response => {
        setToken(response.data.token)

        dispatch(loginSuccess(response))
      })
      .catch(error => {
        dispatch(loginFailure(error))
      })
  }
}
