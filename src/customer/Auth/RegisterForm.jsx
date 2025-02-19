// import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Button} from '@mui/material'
import { getUser, register } from '../../State/Auth/Action';
// import { store } from '../../State/store';
import { useDispatch, useSelector } from 'react-redux';



const RegisterForm = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)

  // useEffect(()=>{
  //   if(jwt){
  //          dispatch(getUser(jwt))
  //   }
  // },[jwt,auth.jwt])

  useEffect(() => {
    if (jwt && !auth.jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch, auth.jwt]);
  

    const handleSubmit=(event)=>{
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(register(userData))
        console.log("userData",userData)
    }
  return (
    <div className="flex items-center justify-center">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
    >
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
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
          Register
        </button>
      </div>  
    <div >
        <div className='flex items-center justify-center mt-1'>
        <p>If you have already have an account ?</p>
        <Button  onClick={()=>navigate("/login")} className='ml-5' size='small'>Login</Button>
        </div>
    </div>
    </form>
  </div>
  )
}

export default RegisterForm
