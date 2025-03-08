import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../api/useSignup.js';

function Signup() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    });
    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    const showPassword = () => {
        let passwordField = document.getElementById("password");
        let confirmPasswordField = document.getElementById("confirmPassword");
        let type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;
        confirmPasswordField.type = type;
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
                <img src="/images/CCPS.png" className='mx-auto' alt="CCPS Logo" />
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={inputs.role} onChange={(e) => setInputs({ ...inputs, role: e.target.value })}>
                            <option value="">Select Role</option>
                            <option value="student">Student</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="admin">Admin</option>
                            <option value="alumni">Alumni</option>
                        </select>
                    </div>

                    <div className="flex items-center mb-4">
                        <input type="checkbox" onClick={showPassword} className="w-4 h-4" />
                        <label className="ml-2 text-sm text-gray-700">Show Password</label>
                    </div>

                    <div className="flex text-sm">
                        <span>Already have an account?</span>
                        <Link to="/login" className="text-blue-500 hover:underline ml-2">Login</Link>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-4" disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
