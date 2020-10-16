import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Auth(LandingPage,null)} />
        <Route exact path='/login' component={Auth(Login, false)} />
        <Route exact path='/register' component={Auth(Register, false)} />
      </Switch>
    </Router>
  );
}

export default App;
