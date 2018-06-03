import React from 'react'
import { Button, Dropdown, Form } from 'semantic-ui-react'
import uuid from 'uuid/v1'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addBookAction } from '../../../actions/books'
import { history } from '../../../services'

const serializeForSelect = (data) => data.map(item => ({ text: item.name, value: item.id }))


class CreateBook extends React.Component {
  state = { name: '', author: '', year: '', isbn: '', image: '', libraries: [{ value: '', status: 'free', booking: null }] }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, author, year, isbn, image, libraries } = this.state
    this.props.addBook({ id: uuid(), name, author, year, isbn, image, libraries })
    this.setState({ name: '', author: '', year: '', isbn: '', image: '', libraries: [{ value: '', status: 'free', booking: null }] })
    history.goBack()
  }

  handleSelect = (idx) => (e, { value }) => {
    const array = [...this.state.libraries]
    array[idx] = {...array[idx], value }
    this.setState({ libraries: array })
  }

  addLibrary = () => this.setState(prevState => ({ libraries: [...prevState.libraries, { value: '', status: 'free', booking: null }] }));

  render () {
    const { name, author, year, isbn, image, libraries } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Button as={Link} to='/admin/books'>Back</Button>
        <h2>Add new book</h2>
        <Form.Group>
          <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Input placeholder='Author' name='author' value={author} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Input placeholder='Year of publish' name='year' value={year} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Input placeholder='ISBN' name='isbn' value={isbn} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Input placeholder='Image(url)' name='image' value={image} onChange={this.handleChange} />
        </Form.Group>

          {libraries.map((library, idx) => (
            <Form.Group key={idx}>
            <Dropdown
              key={idx}
              placeholder='Select Library'
              name={`libraries[${idx}]`}
              fluid
              selection
              options={serializeForSelect(this.props.items)}
              onChange={this.handleSelect(idx)}
            />
            </Form.Group>
          ))}
        <span onClick={this.addLibrary}>Add more Library</span>
        <Form.Group>
          <Form.Button content='Add new book' />
        </Form.Group>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  items: state.libraries.resources,
})

const mapDispatchToProps = {
  addBook: addBookAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook)
