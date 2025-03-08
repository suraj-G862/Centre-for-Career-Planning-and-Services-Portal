import React from 'react';
import './index.css';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import Referrals from './pages/Referrals';
import ResumeBuilder from './pages/ResumeBuilder';
import ResetPasswordPage from './pages/ResetPasswordPage';

import {Routes, Route, Navigate } from 'react-router-dom';

import { useAuthContext } from './context/AuthContext';
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext';
import ForgotPassword from './components/ForgotPassword';
import VerifyEmail from './components/VerifyEmail';

function App() {
  const { authUser } = useAuthContext();
  const {showForgotPassword, showVerifyEmail} = useAppContext();
  return (
    <>

      {showForgotPassword && <ForgotPassword />}
      {showVerifyEmail && <VerifyEmail />}
      
      <Routes>
        <Route path='/' element={ authUser ? <Dashboard/> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup/>}/>
        <Route path='/analytics' element={<AnalyticsDashboard/>}/>
        <Route path='/referals' element={<Referrals/>}/>
        <Route path='/resumebuilder' element={<ResumeBuilder/>} />
        {!authUser && <Route path='/reset-password/:resetToken' element={<ResetPasswordPage />} />}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
