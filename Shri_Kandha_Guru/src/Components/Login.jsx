import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const [Login, SetLogin] = useState({
        email : '',
        password : '',
    });

    const handleChange = (e)=>{
        SetLogin({
            ...Login,
            [e.target.name] : [e.target.value]
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='flex h-[90.7vh] items-center justify-center'>
      <form onSubmit={handleSubmit} className='p-8 rounded-lg h-fit bg-teal-700 flex flex-col gap-5'>
        <h2 className='text-white text-3xl font-semibold text-center'>Login</h2>
        <div>
            <label for='email' className='block w-20' >Email</label>
            <input type='email' onChange={handleChange} value={Login.email} className='py-1 px-2 focus-visible:outline-none bg-teal-700 border-b-2 border-black text-white' name='email' id='email'/>
        </div>
        <div>
            <label for='password' className='block w-20' >Password</label>
            <input type='password' onChange={handleChange} value={Login.password} className='py-1 px-2 focus-visible:outline-none bg-teal-700 border-b-2 border-black text-white' name='password' id='password'/>
        </div>
        <div className='text-center'>
            <button className='text-center rounded-md bg-white px-6 py-1' >Submit</button>
        </div>
        <div className='text-center text-sm'>
            New User? <Link to='/register' className='text-blue-200 underline'>Click Here to Register...</Link>
        </div>
      </form>
    </div>
  )
}
