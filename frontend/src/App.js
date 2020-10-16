import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Auth from './hoc/auth';
import Navbar from './components/Navbar/Navbar';
import UploadProduct from './pages/UploadProduct/UploadProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path='/' component={Auth(LandingPage,null)} />
          <Route exact path='/login' component={Auth(Login, false)} />
          <Route exact path='/register' component={Auth(Register, false)} />
          <Route exact path='/product/upload' component={Auth(UploadProduct,true)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
