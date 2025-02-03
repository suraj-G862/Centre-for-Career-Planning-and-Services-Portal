import React from 'react'
import useLogout from '../api/useLogout';

const LogoutButton = () => {
  const {loading, logout} = useLogout()
  return (
    <div className='w-full text-lg font-lato text-white bg-[#05F2DB] py-3 hover:bg-[#05F2C7]'>
      {!loading ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <span className='loading loading-spinner'></span>
      )
    }
    </div>
  )
}

export default LogoutButton