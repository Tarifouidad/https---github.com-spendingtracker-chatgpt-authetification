import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        username: email, 
        password: password,
      });
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Registration failed', error.response.data);
    }
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center md:w-1/2 px-8 md:px-12">
      <div className="w-1/2 p-4">
          <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>
          <form className="flex flex-col gap-4">
          <div className="relative flex items-center mt-10">
            <i
              className="fas fa-envelope absolute left-3 text-gray-500"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            ></i>
            <input
              className="p-2 pl-10  rounded-xl border w-full"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative flex items-center">
            <i className="fas fa-user-alt absolute left-3 text-gray-500"></i>
            <input
              className="p-2 pl-10 rounded-xl border w-full"
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="relative flex items-center">
            <i className="fas fa-lock absolute left-3 text-gray-500"></i>
            <input
              className="p-2 pl-10 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

            <button
              className="bg-[#0070f3] rounded-xl text-white py-2 hover:scale-105 duration-300 mt-10"
              type="button"
              onClick={handleSignup}
            >
              Sign Up
            </button>  
             <button
                className="bg-[#0070f3] rounded-xl text-white py-2 hover:scale-105 duration-300"
                type="button"
                onClick={handleLoginClick}
              >
                Login
            </button>         
          </form>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
        <img className="rounded-3xl ml-5" src="/login.png" alt="Signup" style={{ width: '2400px', height: '450px' }}/>
      </div>   
      </div>
    </section>
  );
};

export default SignupForm;
