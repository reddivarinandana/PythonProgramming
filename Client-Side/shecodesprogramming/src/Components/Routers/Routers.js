import React from 'react';
import Homepage from '../HomePage/homepage';
import NavBar from '../NavBar/navbar';
import { Route, Routes } from 'react-router';
import Course from '../CoursePage/Course';
import Topic from '../Topicdata/topic';

function Routers() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/home' element={<Homepage/>} />
          <Route path='/course' element={<Course />} />
          <Route path='/course' element={<Topic />} />
        </Routes>
    </div>
  );
}

export default Routers;
