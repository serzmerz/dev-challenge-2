import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import 'semantic-ui-css/semantic.min.css'
import HomePage from './pages/HomePage/index'
import LoginPage from './pages/LoginPage/index'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    )
  }
}

export default App
