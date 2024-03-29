import React from 'react'
import './login.css'
import loginpng from '../Images/login_img.png'
function Login({toggleSignin}) {
    return (
        <div className=''>

            <div className='row'>
                <div className='login-left col-4 bg-primary p-4 align-items-center'>
                    <h3>Login</h3>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                    <div className='login-img p-0'>
                        <img src={loginpng} />
                    </div>

                </div>
                <div className='col-8'>
                    <div className='login-right w-75 m-auto mt-5'>
                        <input className='login-input' placeholder='Enter Email / Mobile Number' />
                        <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                        <button className='request-btn '>REQUEST OTP</button>
                        <div className='create-account text-center text-primary' onClick={()=>toggleSignin()}>
                            New to Flipkart? Create an account
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login