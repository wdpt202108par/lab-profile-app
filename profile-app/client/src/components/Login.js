import React, { Component } from 'react';
import axios from 'axios'
 
 
class Login extends Component {
 
  state = { username: '', password: '' }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        axios.post(`http://localhost:5005/api/auth/login`, { username, password})
      .then( () => {
          console.log("test consolelog", this.setState)
          this.props.getData();
          this.setState({username:"", password:""})
      })
      .catch( error => console.log(error) )
    }
    
    handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    }

 
  render() {
    return(
      <div>
          <div className="leftPanel">
            <h1>Login</h1>
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor='username'>Username</label>
                <input type="text" name="username" id='username' value={this.state.username} onChange={ e => this.handleChange(e)}></input>
                <label htmlFor='passsword'>Password</label>
                <input type="password" name="password" id='password' value={this.state.password} onChange={ e => this.handleChange(e)}></input>
                <button type="submit" value="Submit">Login</button>
            </form>
          </div>
          <div className="rightPanel">
            <h3>Hello!!</h3>
            <h4>Welcome back!</h4>
          </div>
      </div>
      
    )
  }
}
 
export default Login;