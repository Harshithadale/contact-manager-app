import './App.css';
import React, { useState } from 'react'
import Header from './Header';
import AddContact from './AddContact';
import InitialDisplay from './InitialDisplay'
function App() {
  return (
    <div className="App">
      <Header/>
      <InitialDisplay/>
    </div>
  );
}

export default App;
