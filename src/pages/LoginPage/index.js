import React from 'react'
import styles from './styles.css'
import classNames from 'classnames/bind'
import { Form } from 'semantic-ui-react'
import { history } from '../../services'
import { signInAction } from '../../actions/env'
import { connect } from 'react-redux'

const cx = classNames.bind(styles)

class LoginPage extends React.Component {
  state = { username: '', password: '', submittedName: '', submittedEmail: '', error: null }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    console.log(this.state)
    const { username, password } = this.state;
    if(username === 'admin' && password ==='1234') {
      this.props.signIn({ username, password });
      history.push('/admin')
    }
  }

  render () {
    const { username, password } = this.state

    return (
      <div className={cx('wrapper')}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input label='Username' placeholder='Username' name="username" value={username} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Input label='Password' placeholder='Password' name="password" value={password} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  signIn: signInAction,
}

export default connect(null, mapDispatchToProps)(LoginPage)
