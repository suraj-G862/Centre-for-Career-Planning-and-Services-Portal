import React from 'react';
<<<<<<< HEAD
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind CSS is imported
import SignInForm from './components/SignInForm';
import Navbar from './components/Navbar';
import SavedApplications from './pages/Savedapplications';
import { Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<Sidebar/>}></Route>
    //   <Route path='/saved-applications' element={<SavedApplications/>}></Route>
    // </Routes>
    <div>
      <SavedApplications/>
      {/* <Navbar/>
     <SignInForm />
      <Footer /> */}
    </div>
=======
import './index.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPasswordPage from './pages/ResetPasswordPage';
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
        <Route path='/' element={authUser ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
        {!authUser && <Route path='/reset-password/:resetToken' element={<ResetPasswordPage />} />}
      </Routes>
      <Toaster />
    </>
>>>>>>> 5464502 (added verification during signup and forgot password and reset password features)
  );
}

export default App;
