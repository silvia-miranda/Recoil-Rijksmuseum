import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login.jsx';
import Profile from './Profile.jsx';
import Search from './Search.jsx';
import Navbar from './Navbar.jsx';



const App = () => {

console.log('this is the app')
  return (
    <div className="root">
      {/* <Router>  */}
        <Navbar />
      
      
        {/* <Switch>
          <Route path="/search" component={Search}  /> 
          <Route exact path="/" component={Login}  />
          <Route path="/profile" component={Profile}  />
        
        </Switch>
      </Router> */}
    </div>
  )
}

export default App;