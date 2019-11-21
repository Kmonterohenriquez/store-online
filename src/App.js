import React from 'react';
import Navbar from './component/Navbar/Navbar/Navbar'
import AdminSystem from './component/Admin/AdminSystem/AdminSystem'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AdminSystem/>
      <div id='general-container'>

      </div>
    </div>
  );
}

export default App;
