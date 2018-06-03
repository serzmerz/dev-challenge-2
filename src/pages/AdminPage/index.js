import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import ListLibraries from './Liraries/List'
import ListBooks from './Books/List'
import { withRouter } from 'react-router'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import CreateLibrary from './Liraries/CreateLibrary'
import CreateBook from './Books/CreateBook'
import ExportData from './ExportData'

class AdminPage extends React.Component {
  state = { activeItem: 'libraries' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item as={Link} to='/admin/libraries' name='libraries' active={activeItem === 'libraries'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/admin/books' name='books' active={activeItem === 'books'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/admin/exports' name='exports' active={activeItem === 'exports'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Switch>
            <Route exact path='/admin/libraries' component={ListLibraries} />
            <Route path='/admin/libraries/create' component={CreateLibrary} />
            <Route exact path='/admin/books' component={ListBooks} />
            <Route path='/admin/books/create' component={CreateBook} />
            <Route path='/admin/exports' component={ExportData} />
            <Redirect from='/admin' to='/admin/libraries' />
          </Switch>
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(AdminPage)
