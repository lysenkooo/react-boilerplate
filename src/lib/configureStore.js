import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducer from '../reducers'


const history = createBrowserHistory()
const initialState = {}

const store = createStore(
  createRootReducer(history),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  ),
)

export { store, history }
