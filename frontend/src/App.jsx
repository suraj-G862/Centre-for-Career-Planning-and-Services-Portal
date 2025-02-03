import React from 'react';
import './index.css'; // Ensure Tailwind CSS is imported
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser} = useAuthContext();
  return (
    <>
      <Routes>
        <Route path='/' element={ authUser ? <Dashboard/> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
