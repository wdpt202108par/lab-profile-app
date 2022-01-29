import React, { Component } from 'react';
import axios from 'axios'
import {signup} from './authService';
 
 
class Signup extends Component {
 
  state = { username: '', password: '', campus:'', course:'' }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const campus = this.state.campus;
        const course = this.state.course;

        axios.post(`http://localhost:5005/api/auth/signup`, { username, password, campus, course})
        .then( () => {
            console.log(`Console.log`, this.props)
            //   this.props.getData();
            this.setState({username:"", password:"", campus:"", course:""})
        })
        .catch( error => console.log(error) )


        // signup(username, password,campus, course)
        //   .then(response => {
        //     this.setState({username: "", password: "", campus: "", course:""});
        //     // this.props.updateUser(response)
        //   })
        //   .catch(error => console.log(error))
      }
    
    handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    }

 
  render() {
    return(
      <div>
          <div className="leftPanel">
            <h1>Sign Up</h1>
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor='username'>Username</label>
                <input type="text" name="username" id='username' value={this.state.username} onChange={ e => this.handleChange(e)}></input>
                <label htmlFor='passsword'>Password</label>
                <input type="password" name="password" id='password' value={this.state.password} onChange={ e => this.handleChange(e)}></input>
                <label htmlFor='campus'>Campus</label>
                <input type="text" name="campus" id='campus' value={this.state.campus} onChange={ e => this.handleChange(e)}></input>
                <label htmlFor='course'>Course</label>
                <input type="text" name="course" id='course' value={this.state.course} onChange={ e => this.handleChange(e)}></input>
                <button type="submit" value="Submit">Create the Account</button>
            </form>
          </div>
          <div className="rightPanel">
            <h3>Hello!!</h3>
            <h4>Welcome to IronProfile!</h4>
            <p></p>
          </div>
      </div>
      
    )
  }
}
 
export default Signup;