import React from 'react';
// import Navbar from './component/Navbar/Navbar/Navbar'
import AdminSystem from './Pages/AdminSystem/AdminSystem'
import './App.css'
import { BrowserRouter as Router,Route } from 'react-router-dom'

import Home from './Pages/Home/Home'


function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/Admin' component={ AdminSystem }/>
      </Router>
    </div>
  );
}

export default App;
