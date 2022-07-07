import React from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  /*
    1. connect to server with username/passowrd
    2. store the token that gets passed on successful login
    3. output an error when we have an unsuccessful login <TODO></TODO>
  */

  login = e => {
    e.preventDefault();
    // login to server
    axiosWithAuth().post("https://backrecipes.herokuapp.com/api/auth/login", this.state.credentials)
      .then(res => {
        console.log('bk: Login.js: login: res: ', res)
        localStorage.setItem('token', res.config.data)
        this.props.history.push('/protected')
      })
      .catch(err => {
        console.error(err.response)
      })
  };

  render() {
    return (
      <div>LOGIN
        <form onSubmit={this.login}>
          <label htmlFor='username'>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;