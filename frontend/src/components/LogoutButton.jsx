import React from 'react'
import useLogout from '../api/useLogout';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { loading, logout } = useLogout()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div className='w-full text-center'>
      <button 
        onClick={handleLogout}
        className='w-full rounded-lg text-lg font-lato text-white bg-[#ff7e67] py-3 px-8
                  hover:bg-[#ff5031] transition-colors duration-300 ease-in-out
                  disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={loading}
      >
        {!loading ? (
          'Logout'
        ) : (
          <span className='loading loading-spinner'></span>
        )}
      </button>
    </div>
  )
}

export default LogoutButton