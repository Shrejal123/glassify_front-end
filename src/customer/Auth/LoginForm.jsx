// import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';


const LoginForm = () => {
  const dispatch=useDispatch();
  const navigate= useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        const userData={
           
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(login(userData))
        console.log("userData",userData)
    }
  return (
    <div className="flex items-center justify-center">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
    >
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            autoComplete="password"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          Login
        </button>
      </div>
   
    <div >
        <div className='flex items-center justify-center mt-1'>
        <p>If you don't have an account ? </p>
        <Button  onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
        </div>
    </div>
    </form>
  </div>
  )
}

export default LoginForm
