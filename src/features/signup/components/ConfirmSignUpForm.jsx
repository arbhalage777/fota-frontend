import React from 'react'
import fevlogo from "../../../assets/fevlogo.png"

const ConfirmSignUpForm = ({ otp, setOtp, handleSubmit }) => {
    return (
        <>
            <div className="w-1/2 p-8">
                <img src={fevlogo} alt="fev logo" className="w-32" />
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
                    <form onSubmit={handleSubmit}>
                        <label className='block mb-2 text-sm font-medium text-gray-700'> OTP</label>
                        <input className='w-full p-2 border border-gray-300 rounded mb-4' placeholder='Enter OTP' type='text' required onChange={(e) => setOtp(e.target.value)} />
                        <button type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            {/* {loading ? "Signing Up..." : "Sign Up"} */}
                            Confirm Signup
                        </button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default ConfirmSignUpForm 