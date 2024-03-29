import React from 'react'
import loginpng from '../Images/login_img.png'
import './sign.css'

function Signin({toggleLogin}) {
    return (
        <div>
            <div className=''>
                <div className='row'>
                    <div className='login-left col-4 bg-primary p-4 align-items-center'>
                        <h3>Looks like you're new here!</h3>
                        <p>Sign up with your mobile number to get started</p>
                        <div className='login-img p-0'>
                            <img src={loginpng} />
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='login-right w-75 m-auto mt-5'>
                            <input className='login-input' placeholder='Enter Mobile Number' />
                            <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                            <button className='request-btn '>CONTINUE</button>
                            <div className='create-sign text-center text-primary' onClick={()=>toggleLogin()}>
                                Existing user? Log in
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin