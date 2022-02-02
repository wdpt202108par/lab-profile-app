import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5005/api',
  withCredentials: true
});
export default service;

function signup(username, password, campus, course) {
  return service.post('/signup', {username, password, campus, course}).then(response => response.data)
}
export {signup}

function login(username, password) {
  return service.post('/login', {username, password}).then(response => response.data)
}
export {login}

function upload(file) {
  return service.put('/upload', {file}).then(response => response.data)
}
export {upload}

function edit(username, campus, course) {
  return service.put('/edit', {username, campus, course}).then(response => response.data)
}
export {edit}
 
function logout() {
  return service.post('/logout', {}).then(response => response.data)
}
export {logout}

function loggedin() {
  return service.get('/loggedin').then(response => response.data)
}
export {loggedin}