import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';

const LandingPage = (props) => {

  const onLogout = () => {
    axios.get('/api/logout').then(res => {
      if (res.data.success) {
        props.history.push('/')
      } else {
        alert('Error')
      }
    })
  }
  return (
    <div>
      Trang Chủ
      <button onClick={onLogout}>Đăng xuất</button>
    </div>
  );
};

export default withRouter(LandingPage);