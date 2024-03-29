import React, { useContext } from 'react'
import './checkout.css'
import userContext from '../Context/Context'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function CheckOut({ fetchCartData }) {
    const navigate = useNavigate()
    const cartList = useContext(userContext)

    const totalAmount = cartList.reduce((prev, curr) => prev + Number(curr.offerprice), 0)

    const placeOrder = () => {
        cartList.map((item) => {
            axios.delete(`https://660513e12ca9478ea17f38c6.mockapi.io/cart/${item.id}`).then((res) => {
                fetchCartData()
            }).catch((err) => {
                console.log(err)
            })
        })
      
        toast.success("Your Order Placed Successfully")
        navigate('/')
    }

    return (
        <div>
            <div className='container '>
                <div className='row mt-5 '>

                    <div className='col-8 cart-left rounded bg-dark text-light p-3'>
                        <div className='container w-75 m-auto '>
                            <h5>CARD DETAILS</h5>
                            <div className='row'>
                                <div className='col-12'>
                                    <div class="mb-3">
                                        <label class="form-label">Name</label>
                                        <input type="text" class="form-control" placeholder='Enter Your Name as in Card' />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div class="mb-3">
                                        <label class="form-label">Card Number</label>
                                        <input type="number" class="form-control" placeholder='1234 5678 9012 3456' maxLength={16} />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Expiry Date</label>
                                        <input type="date" class="form-control" placeholder='MM/YYYY' />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label class="form-label">CCV</label>
                                        <input type="number" class="form-control" maxLength={3} />
                                    </div>
                                </div>
                                <button
                                    className='btn btn-success mt-5 w-50 m-auto mb-3 fw-bolder'
                                    onClick={() => placeOrder()}
                                >Pay ${totalAmount - 10}
                                </button>
                            </div>

                        </div>


                    </div>

                    <div className='col-3 cart-right p-2 rounded'>

                        <ul class="list-group mt-4">
                            <li class="list-group-item"><h6 className='text-secondary text-uppercase'>Price Details</h6></li>
                            <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Items</h6> <h6>{cartList.length}</h6></div></li>
                            <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Price</h6> <h6>$ {totalAmount}</h6></div></li>
                            <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Discount</h6> <h6>-$10</h6></div></li>
                            <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Delivery Charges</h6> <h6 ><span className='text-decoration-line-through'>$40</span> <span className='text-success'>FREE</span></h6></div></li>
                            <li class="list-group-item"><div className='d-flex justify-content-between'><h5>Total Amount</h5> <h5>{totalAmount - 10}</h5></div></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut