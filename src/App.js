import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar.js'
import Homepage from './container/homepage/homepage.js'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <div style={{'marginTop': '44px', 'paddingTop': '14px'}}>
        <Route path='/' exact component={Homepage}></Route>
      </div>
    </div>
  );
}

export default App;
