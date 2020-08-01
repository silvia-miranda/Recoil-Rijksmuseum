import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import { username as userAtom } from '../atoms.js';
import Search from './Search.jsx'
import Profile from './Profile.jsx'
import Login from './Login.jsx'

const Navbar = (props) => {
  //const userAtom = useRecoilValue(username);
  return (
  <Router>
    <header className='navbar'>
      <div id='link-container'>
        <Link to="/search"><div className='navbaritem'>Search</div></Link>
        <Link to="/profile"><div className='navbaritem'>Profile</div></Link>
        <Link to="/login"><div className='navbaritem'>Login</div></Link>
        <Link to="/profile"><div className='navbaritem'>Hi, user</div></Link>
      </div>
      {/* <Switch>
        <Route component= {Search} path="/search" />
        <Route component={Profile} path="/profile" />
        <Route component={Login} path="/login" /> 
      </Switch> */}
    </header>
  </Router>
)};

export default Navbar;