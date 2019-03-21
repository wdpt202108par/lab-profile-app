// components/auth/auth-service.js

import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true
    });
    this.service = service;
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  signup = (username, password) => {
    return this.service.post('/signup', {
      username,
      password
    })
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout', {})
    .then(response => response.data)
  }

  edit = (username, campus, course) => {
    return this.service.post('/edit', {
      username,
      campus,
      course
    })
    .then(response => response.data)
  }

  upload = (formdata) => {
    return this.service.post('/upload', formdata)
    .then(response => response.data)
  }
}

export default AuthService;