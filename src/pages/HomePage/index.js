import React from 'react'
import { Button, Input, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

class HomePage extends React.Component {
  state = { search: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  getFilteredBooks = () => {
    const { books } = this.props
    const { search } = this.state
    if (search) {
      const lowerStr = search.toLowerCase()
      const filteredBooks = books.filter(book => !!(
        ~book.name.toLowerCase().indexOf(lowerStr) ||
        ~book.author.toLowerCase().indexOf(lowerStr) ||
        ~book.isbn.toLowerCase().indexOf(lowerStr)
      ))
      return filteredBooks.map(book => this.renderItem(book))
    }
    return 'Please, enter your search query'
  }

  renderItem = (item) => (
    <Item.Group key={item.id} relaxed>
      <Item>
        <Item.Image src={item.image} />
        <Item.Content verticalAlign='middle'>
          <Item.Header>{item.name}</Item.Header>
          <Item.Description>Author: {item.author}, Year of publish: {item.year}, ISBN: {item.isbn}</Item.Description>
          <Item.Group>
            {item.libraries.map(library => {
              const findLibrary = this.props.libraries.find(item => item.id === library.value)
              return (
                <Item key={findLibrary.id}>
                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      {findLibrary.name}
                      , status: {library.status}
                      {' '}
                      {library.status === 'booking' && `, available ${moment(library.booking).fromNow()}`}
                    </Item.Header>
                    <Button as={Link} to={`/book/${item.id}/library/${library.value}`} floated='right'>
                      Book it
                    </Button>
                  </Item.Content>
                </Item>
              )
            })}
          </Item.Group>
        </Item.Content>
      </Item>
    </Item.Group>
  )

  render () {
    return (
      <div>
        <Input
          name='search'
          fluid
          icon='search'
          placeholder='Enter title, author, isbn'
          onChange={this.handleChange}
        />
        {this.getFilteredBooks()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.resources,
  libraries: state.libraries.resources
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
