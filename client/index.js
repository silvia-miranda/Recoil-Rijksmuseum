import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import App from './components/App.jsx';

ReactDOM.render (
  <RecoilRoot>
 
  <App />
 
  </RecoilRoot>, 
  document.getElementById('root')
);

//Rijksmuseum API
//API key JAzK4fC0
