import React from 'react';
import './index.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPasswordPage from './pages/ResetPasswordPage';
import Savedapplications from './pages/Savedapplications';
import { Routes, Route, Navigate } from 'react-router-dom';
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
        <Route path='/' element={authUser ? <Savedapplications /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
        {!authUser && <Route path='/reset-password/:resetToken' element={<ResetPasswordPage />} />}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
