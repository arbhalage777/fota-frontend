import React from 'react'
import fevlogo from '../../../assets/fevlogo.png'
import { Link } from 'react-router-dom'
const SignUpForm = ({ user, setUser, handleSubmit,loading }) => {
  return (
    <>
      <div className="w-1/2 p-8">
        <img src={fevlogo} alt="fev logo" className="w-32" />
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
          <form onSubmit={handleSubmit}>
            <label className='block mb-2 text-sm font-medium text-gray-700'> Name</label>
            <input className='w-full p-2 border border-gray-300 rounded mb-4' placeholder='Enter Name' type='text' value={user?.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />
            <label className='block mb-2 text-sm font-medium text-gray-700'> Email</label>
            <input className='w-full p-2 border border-gray-300 rounded mb-4' placeholder='Enter Email' type='email' value={user?.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
            <label className='block mb-2 text-sm font-medium text-gray-700' > Password</label>
            <input className='w-full p-2 border border-gray-300 rounded mb-4' placeholder='Enter Password' type='password' value={user?.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
            <label className='block mb-2 text-sm font-medium text-gray-700'> Confirm Password</label>
            <input className='w-full p-2 border border-gray-300 rounded mb-4' placeholder='Enter Confirm Password' type='password'
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              required />
            <button type="submit" disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >{loading ? "Signing Up..." : "Sign Up"}</button>
          </form>
          <p className="text-center text-xs mt-4 text-gray-600">Already have an account <Link className="text-blue-500 font-bold" to="/">Sign In</Link></p>
        </div>
      </div>

    </>
  )
}

export default SignUpForm