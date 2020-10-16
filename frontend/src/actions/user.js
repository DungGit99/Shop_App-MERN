import axios from 'axios';
import { LOGIN, REGISTER, AUTH_USER, LOGOUT } from './types';

export function login(data) {
  const user = axios.post('/api/login', data).then(res => res.data);
  return {
    type: LOGIN,
    payload: user
  }
}
export function register(data) {
  const user = axios.post('/api/register', data).then(res => res.data);
  return {
    type: REGISTER,
    payload: user
  }
}
export function logout() {
  const user = axios.get('/api/logout').then(res => res.data);
  return {
    type: LOGOUT,
    payload: user
  }
}
export function auth() {
  const request = axios.get('/api/users/auth').then(res => res.data)
  return {
    type: AUTH_USER,
    payload: request
  }
}