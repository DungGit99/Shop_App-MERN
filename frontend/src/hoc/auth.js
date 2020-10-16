import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../actions/user';

export default function (Component, option, adminRoute = null) {
  function Authentication(props){
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then(res => { 
        console.log(res);
      })
    }, [])
    return <Component/>
  }
  return Authentication;
}