import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Item, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ListBooks extends React.Component {
  renderItem = (item) => (
    <Item.Group relaxed key={item.id}>
      <Item>
        <Item.Image src={item.image} />
        <Item.Content verticalAlign='middle'>
          <Item.Header>{item.name}</Item.Header>
          <Item.Description>Author: {item.author}, Year of publish: {item.year}, ISBN: {item.isbn}</Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  )

  render () {
    const { items } = this.props;

    return (
      <Fragment>
        {items.map(item => this.renderItem(item))}
        <Button as={Link} to='/admin/books/create'>Create Book</Button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.books.resources
})

export default connect(mapStateToProps)(ListBooks)
