import React from 'react'
import { Route, Switch } from 'react-router'
import SessionList from './SessionList/index.js'
import SessionInfo from './SessionInfo/index.js'

const SessionsController = (props) => {
  return <Switch>
    <Route exact path={`${props.match.url}`} component={SessionList}/>
    <Route path={`${props.match.url}/:id`} component={SessionInfo}/>
  </Switch>
}

export default SessionsController
