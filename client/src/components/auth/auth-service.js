import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5005/api',
  withCredentials: true
});

function signup(username, password, campus, course) {
  return service.post('/auth/signup', {username: username, password: password, campus:campus, course:course})
  .then(response => response.data)
  .catch(err => err)
}
export {signup}

function login(username, password) {
    return service.post('/auth/login', {username, password})
    .then(response => response.data)
    .catch(err => err)
}
export {login}

function edit(username, campus, course) {
    return service.post('/auth/edit', {username, campus, course})
    .then(response => response.data)
    .catch(err => err)
}
export {edit}

function logout() {
    return service.post('/auth/logout', {})
    .then(response => response.data)
    .catch(err => err)
}
export {logout}

function loggedin() {
    return service.get('/auth/loggedin')
    .then(response => response.data)
    .catch(err => err)
}
export {loggedin}

export default service;