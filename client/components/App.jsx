import React from 'react';
import {
  RecoilRoot,
  atom,
  selector
} from 'recoil';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Profile from './Profile.jsx';
import Search from './Search.jsx';



function App () {


  return (
    <RecoilRoot>
      <Register />
      {/* <Login />
      <Profile /> */}
      {/* Whatever other shit we need right here!  */}
    </RecoilRoot>
  )
}

export default App;