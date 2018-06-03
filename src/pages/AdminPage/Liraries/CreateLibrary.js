import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import uuid from 'uuid/v1'
import {history} from '../../../services'
import { connect } from 'react-redux'
import { addLibraryAction } from '../../../actions/libraries'
import { Link } from 'react-router-dom'

class CreateLibrary extends React.Component {
  state = { name: '', address: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, address } = this.state
    this.props.addLibrary({ id: uuid(), name, address })
    this.setState({ name: '', address: '' })
    history.goBack()
  }

  render () {
    const { name, address } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Button as={Link} to='/admin/library'>Back</Button>
        <h2>Add new library</h2>
        <Form.Group>
          <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
          <Form.Input placeholder='Address' name='address' value={address} onChange={this.handleChange} />
          <Form.Button content='Add new library' />
        </Form.Group>
      </Form>
    )
  }
}

const mapDispatchToProps = {
  addLibrary: addLibraryAction
}

export default connect(null, mapDispatchToProps)(CreateLibrary)
