import React from 'react'
import styles from './styles.css'
import classNames from 'classnames/bind'
import { Form } from 'semantic-ui-react'

let cx = classNames.bind(styles)

class LoginPage extends React.Component {
  state = { username: '', password: '', submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { username, password } = this.state
  }

  render () {
    const { username, password } = this.state

    return (
      <div className={cx('wrapper')}>
        <Form>
          <Form.Group>
          <Form.Field>
            <label>Username</label>
            <Form.input placeholder='Username' name="username" value={username} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.input placeholder='Password' name="password" value={password} onChange={this.handleChange} />
          </Form.Field>
          <Form.Button type='submit'>Submit</Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default LoginPage
