import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import  useLogin  from '../api/useLogin.js';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading, login} = useLogin();
  const handleSubmit = async (e) => {
      e.preventDefault();
      await login(email,password);
  }
  return (
    <div className="flex">
      <h1 className="text-3xl font-semibold text-center">Login CCPS
            </h1>
            <form onSubmit={handleSubmit} className='p-10 mt-0'>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>Email</span>
                    </label>
                    <input type="text" placeholder="Enter email" className="w-full input input-bordered h-10" 
                      value={email} onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                        value={password} onChange={(e)=>setPassword(e.target.value)} id='password' 
                    />
                   {/* <div className='flex'>
                        <input type="checkbox" onClick={()=>showPassword()} className='w-4 h-4 mt-3'/>
                        <span className='mt-2.5 ml-1 text-sm'>Show Password</span>
                   </div> */}
                </div>
                <div className=' inline-block mr-2'> Don't have an account? </div>
                <Link to="/signup" className=' text-blue-400 hover:underline hover:text-blue-600 mt-2 inline-block'>
                     Sign up
                </Link>
                <div>
                    <button className="btn  btn-block btn-sm mt-2 bg-blue-400 hover:bg-blue-600 text-white"
                        disabled={loading}
                    >
                        {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>
            </form>
    </div> 
  );
};

export default Login;
