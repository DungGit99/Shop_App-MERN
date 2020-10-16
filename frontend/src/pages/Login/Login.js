import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Login.css'
import { login } from '../../actions/user';

const Login = (props) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState({
    email : '',
    password : ''
  })
  
  const onChange = e => {
    setValue({
        ...value,
        [e.target.name] : e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault()
    dispatch(login(value)).then(res => {
      if (res.payload.loginSuccess) {
        props.history.push('/')
      } else {
        alert(res.payload.message)
      }
    })
  }

  return (
    <div className="login">
      <form className="loginForm" onSubmit={onSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={value.email} onChange={onChange} />
        <label>Password</label>
        <input type="password" name="password" value={value.password} onChange={onChange} />
        <br />
        <button type="submit">Login</button>
      </form>
  </div>
  );
};

export default withRouter(Login);