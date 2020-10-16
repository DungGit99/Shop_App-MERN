import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';

export default function (Component, option, adminRoute = null) {
  function Authentication(props){
    let user = useSelector(state => state.user );
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(auth()).then(res => { 
        console.log(res)
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push('/login')
          }
        } else {
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push('/')
          } else {
            if (option === false) {
              props.history.push('/')
            }
          }
        }
      })
    }, [])
    return <Component/>
  }
  return Authentication;
}