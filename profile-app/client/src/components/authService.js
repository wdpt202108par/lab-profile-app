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