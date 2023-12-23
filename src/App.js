import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
