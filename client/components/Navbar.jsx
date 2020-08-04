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
      <div id='link-container'>
        <Link to="/search" className='navbaritem'>Search</Link>
        <Link to="/login"><div className='navbaritem'>Login</div></Link>
        <Link to="/profile"><div className='navbaritem'>Hi, {userAtom}</div></Link>
        <button className='navbaritem' id='darkButton' style={{background:color,color:text}}onClick={()=>{setColor('black');setTextColor('red')}}>Dark Mode</button>

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



function App() {
  const [color,setColor]=useState('red');
  const [textColor,setTextColor]=useState('white');
  return (
    <div className="App">
      <button style={{background:color,color:textColor}} className='btn btn-primary' onClick={()=>{setColor("black");setTextColor('red')}}>Click here</button>
    </div>
  );
}