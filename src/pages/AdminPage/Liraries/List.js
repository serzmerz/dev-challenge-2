import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Item, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ListLibraries extends React.Component {
  renderItem = (item) => (
    <Item.Group relaxed key={item.id}>
      <Item>
        <Item.Content verticalAlign='middle'>
          <Item.Header>{item.name}</Item.Header>
          <Item.Description>{item.address}</Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  )

  render () {
    const { items } = this.props

    return (
      <Fragment>
        {items.map(item => this.renderItem(item))}
        <Button as={Link} to='/admin/libraries/create'>Create Library</Button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.libraries.resources
})

export default connect(mapStateToProps)(ListLibraries)
