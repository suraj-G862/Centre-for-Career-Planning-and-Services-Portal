import React, { useState } from 'react'
import useResetPassword from '../api/useResetPassword';
import { useParams } from 'react-router-dom';

function ResetPasswordPage() {

    const { resetToken } = useParams();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { loading, resetPassword } = useResetPassword();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await resetPassword(password, confirmPassword, resetToken);
    }

    const showPassword = () => {
        var x = document.getElementById("password");
        var y = document.getElementById("confirmPassword");
        if (x.type === "password") {
            x.type = "text";
            y.type = "text";
        } else {
            x.type = "password";
            y.type = "password";
        }
    }

    return (
        <div className="flex">
            <h1 className="text-3xl font-semibold text-center">Reset Password CCPS</h1>
            <form onSubmit={handleSubmit} className='p-10 mt-0'>
                <div>
                    <label className="label p-2">
                        <span className='text-base  label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                        value={password} onChange={(e) => setPassword(e.target.value)} id='password' />
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base  label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id='confirmPassword' />
                </div>
                <div className='flex'>
                    <input type="checkbox" onClick={() => showPassword()} className='w-4 h-4 mt-3' />
                    <span className='mt-2.5 ml-1 text-sm'>Show Password</span>
                </div>
                <div>
                    <button className="btn  btn-block btn-sm mt-2 bg-blue-400 hover:bg-blue-600 text-white" disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : 'Reset Password'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ResetPasswordPage