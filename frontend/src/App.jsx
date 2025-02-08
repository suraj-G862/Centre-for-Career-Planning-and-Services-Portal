import React from 'react';
import './index.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import {Toaster} from 'react-hot-toast' 

function App() {
  const {authUser} = useAuthContext();
  return (
    <>
      <Routes>
        <Route path='/' element={ authUser ? <Dashboard/> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup/>}/>
      </Routes>
      <Toaster/> 
    </>
  );
}

export default App;
