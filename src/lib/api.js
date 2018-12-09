import axios from 'axios'
import Cookies from 'js-cookie'


const apiBase = process.env.REACT_APP_API_BASE || '/api/v1'

const client = axios.create({
  headers: {
    common: {
      Authorization: Cookies.get('token')
    }
  }
})

export const getToken = () => {
  return Cookies.get('token')
}

export const setToken = (token) => {
  Cookies.set('token', token)
  client.defaults.headers.common['Authorization'] = token
}

export const removeToken = (token) => {
  Cookies.remove('token')
  client.defaults.headers.common['Authorization'] = null
}

export const initUser = () => client.get(apiBase + '/auth')
export const loginUser = (payload) => client.post(apiBase + '/auth', payload)

export const fetchSessionList = () => client.get(apiBase + '/sessions')
export const fetchSession = (id) => client.get(apiBase + `/sessions/${id}`)
export const createSession = (params) => client.post(apiBase + '/sessions')
export const updateSession = (id) => client.update(apiBase + `/sessions/${id}`)
export const destroySession = (id) => client.delete(apiBase + `/sessions/${id}`)
