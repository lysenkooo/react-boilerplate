import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './lib/configureStore'
import * as serviceWorker from './lib/serviceWorker'
import App from './components/App'
import DashboardController from './components/DashboardController'
import SessionsController from './components/SessionsController'


const RoutedApp = withRouter(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RoutedApp>
        <Switch>
          <Route exact path="/" component={DashboardController} />
          <Route path="/dashboard" component={DashboardController} />
          <Route path="/sessions" component={SessionsController} />
        </Switch>
      </RoutedApp>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
