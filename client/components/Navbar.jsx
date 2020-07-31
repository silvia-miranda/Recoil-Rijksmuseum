import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './Search.jsx'
import Profile from './Profile.jsx'
import Login from './Login.jsx'

const Navbar = (props) => (
  <Router>
    <header className='navbar'>
      <div id='link-container'>
        <Link to="/Search"><div className='navbaritem'>Search</div></Link>
        <Link to="/Profile"><div className='navbaritem'>Profile</div></Link>
        <Link to="/Login"><div className='navbaritem'>Login</div></Link>
      </div>
      <Switch>
        <Route component= {Search} path="/search" />
        <Route component={Profile} path="/profile" />
        <Route component={Login} path="/login" /> 
      </Switch>
    </header>
  </Router>
);

export default Navbar;