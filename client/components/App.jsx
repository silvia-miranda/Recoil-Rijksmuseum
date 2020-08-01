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
      <Navbar />
      <h1>Rijksmuseum search</h1> 
      <Router> 
        <Switch>
          <Route exact path="/" component={Login}  />
          <Route exact path="/profile" component={Profile}  />
          <Route exact path="/search" component={Search}  /> 
        </Switch>
      </Router>
    </div>
  )
}

export default App;