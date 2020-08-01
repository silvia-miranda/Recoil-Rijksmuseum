import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { username } from '../atoms.js';
import {
  atom,
  selector,
  useRecoilValue,
} from 'recoil';
import Search from './Search.jsx'
import Profile from './Profile.jsx'
import Login from './Login.jsx'

const Navbar = (props) => {
  const userAtom = useRecoilValue(username);
  return (
  <Router>
    <header className='navbar'>
      <div id='link-container'>
        <Link to="/search" className='navbaritem'>Search</Link>
        {/* <Link to="/profile"><div className='navbaritem'>Profile</div></Link> */}
        <Link to="/login"><div className='navbaritem'>Login</div></Link>
        <Link to="/profile"><div className='navbaritem'>Hi, {userAtom}</div></Link>
      </div>
      <Switch>
        <Route component= {Search} path="/search" />
        <Route component={Profile} path="/profile" />
        <Route component={Login} path="/login" /> 
      </Switch>
    </header>
  </Router>
)};

export default Navbar;