import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { username, backgroundColor, textColor } from '../atoms.js';
import {
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Search from './Search.jsx'
import Profile from './Profile.jsx'
import Login from './Login.jsx'

const Navbar = (props) => {
  const userAtom = useRecoilValue(username);
  const [color, setColor] = useRecoilState(backgroundColor);
  const [text ,setTextColor]=useRecoilState(textColor);

  return (
  <Router>
    <header className='navbar'>
      <div id='link-container' >
        <div id='left-container'>
          <Link to="/login"><div className='navbaritem'>Login</div></Link>
          <Link to="/search" className='navbaritem'>Search</Link>
        </div>
        <div id='right-container'>
          <Link to="/profile"><div className='navbaritem'>Hi, {userAtom}</div></Link>
          <button className='navbaritem' id='darkButton' onClick={()=>{setColor('grey');setTextColor('white')}}>Dark Mode</button>
        </div>
      </div>  
      <h1><img width='400px' src='https://cdn.worldvectorlogo.com/logos/rijksmuseum.svg'/></h1> 
      <Switch>
        <Route component= {Search} path="/search" />
        <Route component={Profile} path="/profile" />
        <Route component={Login} path="/login" /> 
      </Switch>
    </header>
  </Router>
)};

export default Navbar;



