import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import HomePage from './pages/HomePage'
import { Menu, Container } from 'semantic-ui-react'
import LoginPage from './pages/LoginPage'
import { connect } from 'react-redux'
import { signOutAction } from './actions/env'
import AdminPage from './pages/AdminPage'
import BuyBookPage from './pages/BuyBookPage'

class App extends Component {
  render () {
    const { isAuthorized } = this.props

    return (
      <Container className='container'>
        <Menu>
          <Menu.Item name='home' as={Link} to='/' active />
          {isAuthorized && <Menu.Item name='admin' as={Link} to='/admin' />}
          <Menu.Menu position='right'>
            {isAuthorized
              ? <Menu.Item name='logout' onClick={this.props.signOut} />
              : <Menu.Item name='login' as={Link} to='/login' />
            }
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/book/:bookId/library/:libraryId' component={BuyBookPage} />
          {isAuthorized
            ? <Route path='/admin' component={AdminPage} />
            : <Route path='/login' component={LoginPage} />
          }
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: state.env.isAuthorized
})

const mapDispatchToProps = {
  signOut: signOutAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
