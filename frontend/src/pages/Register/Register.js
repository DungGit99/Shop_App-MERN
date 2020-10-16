import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register } from '../../actions/user';

const Register = (props) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState({
    email : '',
    name: '',
    password : '',
    confirmPassword: ''
  })

  const onChange = e => {
    setValue({
      ...value,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    if(value.password !== value.confirmPassword) {
      return alert('Password không trùng khớp')
    }
    dispatch(register(value)).then(res => {
      if(res) {
        props.history.push("/login")
      }else {
        alert("Đăng kí thất bại")
      }
      
    })
  }

  return (
    <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmit}>
              <label>Email</label>
              <input type="email" name="email" value={value.email} onChange={onChange} />
              <label>Name</label>
              <input type="text" name="name"  value={value.name} onChange={onChange} />
              <label>Password</label>
              <input type="password" name="password"  value={value.password} onChange={onChange} />
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword"  value={value.confirmPassword} onChange={onChange} />
              <br />
              <button type="submit"> Đăng kí </button>
          </form>
        </div>
  );
};

export default withRouter(Register);