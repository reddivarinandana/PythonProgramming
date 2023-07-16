import React from 'react';
// import { Routes, Route } from 'react-router'
import Homepage from '../HomePage/homepage';
import NavBar from '../NavBar/navbar';
function Routes() {
  return (
    <div className="App">
        <NavBar />
        <Homepage/>
    </div>
  );
}

export default Routes;
