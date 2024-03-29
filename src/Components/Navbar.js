import React, { useState } from 'react'
import './navbar.css'
import { Modal, ModalBody } from 'reactstrap'
import Login from './Login'
import Signin from './Signin'
import { Link, useNavigate } from 'react-router-dom'


function Navbar({ cartData }) {
    const navigate = useNavigate()


    const [islogin, setIslogin] = useState(false)
    const [issignin, setIssignin] = useState(false)

    const toggleSignin = (() => {
        setIssignin(true)
        setIslogin(false)
    })

    const toggleLogin = (() => {
        setIslogin(true)
        setIssignin(false)
    })

    return (
        <div>
            <div className='na bg-primary text-light d-flex p-3 align-items-center'>
                <h1>Flipkart</h1>
                <div className='nav-items d-flex align-items-center'>
                    <Link to={'/'}><a class="nav text-light" href="#">Home</a></Link>
                    <a class="nav-link" href="/products">Products</a>
                </div>
                <div className='login-btn'>
                    <button className='btn btn-warning' onClick={() => (setIslogin(!islogin))}><i className='fa fa-user'></i> Log in</button>
                </div>
                <div className='cart-btn align-items-center'>
                    <button className='btn btn-warning' onClick={() => navigate('/cart')}>
                        <i className='fa fa-shopping-cart'></i>
                        <span className='bg-dark text-warning m-3 rounded px-2 fw-bolder'>{cartData.length}</span>
                    </button>
                </div>
            </div>
            
            <Modal isOpen={islogin} toggle={() => setIslogin(!islogin)} centered size='lg'>
                <ModalBody className='p-0'>
                    <Login toggleSignin={toggleSignin}></Login>
                </ModalBody>
            </Modal>
            <Modal isOpen={issignin} toggle={() => (setIssignin(!issignin))} centered size='lg'>
                <ModalBody className='p-0'>
                    <Signin toggleLogin={toggleLogin}></Signin>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Navbar