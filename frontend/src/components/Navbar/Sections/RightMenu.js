import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import Axios from 'axios';


function RightMenu(props) {
  const user = useSelector(state => state.user)

  const onLogout = () => {
    Axios.get('/api/logout').then(res => {
      if (res.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    })
  }
  
  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/login">Signin</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/register">Signup</Link>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="history">
          <Link to="/history">History</Link>
        </Menu.Item>
        <Menu.Item key="upload">
          <Link to="/product/upload">Upload</Link>
        </Menu.Item>
        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
            <Badge>
              <Link to="/user/cart" style={{ marginRight: -22 , color:'#667777'}}>
                <ShoppingCartOutlined style={{ fontSize: '30px' }} />
              </Link>
            </Badge>
        </Menu.Item>
        <Menu.Item key="logout">
            <a onClick={onLogout}>Logout</a>
        </Menu.Item>
     </Menu>
    )
  }
}

export default withRouter(RightMenu);