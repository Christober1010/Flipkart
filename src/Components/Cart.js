import React, { useContext } from 'react'
import './cart.css'
import userContext from '../Context/Context'
import { addDays, format } from 'date-fns'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Cart({ fetchCartData }) {
    const cartList = useContext(userContext)
    // console.log(cartList)

    const navigate=useNavigate()

    const totalAmount = cartList.reduce((prev, curr) => prev + Number(curr.offerprice), 0)

    const removeitem = (id) => {
        axios.delete(`https://660513e12ca9478ea17f38c6.mockapi.io/cart/${id}`).then((res) => {
            toast.success("Item Removed")
            fetchCartData()
        })
    }


    return (
        <>
            <div className='container'>
                <div className='row mt-5'>

                    <div className='col-8 cart-left rounded'>

                        <ul class="list-group mt-4">
                            {
                                cartList && cartList.map((item) => {
                                    return <li class="list-group-item">
                                        <div className='d-flex justify-content-between'>
                                            <div className='row'>
                                                <div className='col-2'>
                                                    <div className='mx-2'><img src={item.image} className='cart-img' /></div>
                                                </div>
                                                <div className='col-8'>
                                                    <div className='mx-2'>
                                                        <h5>{item.productname}</h5>
                                                        <p>{item.description}</p>
                                                        <div>Price $ <b>{item.offerprice}</b></div>
                                                    </div>
                                                    <button className='btn btn-danger btn-sm mt-3 mx-3' onClick={() => removeitem(item.id)}>Remove</button>
                                                </div>
                                                <div className='col-2'>
                                                    <div className='mx-2'>
                                                        <div>
                                                            Delivery by {format(new Date(addDays(new Date(), 5)), 'dd-MMM-yyyy')}
                                                        </div>

                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }

                        </ul>
                        
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
                        <div className='text-center p-2' onClick={()=>navigate('/checkout')}>
                            <button className='btn btn-success mt-5 w-75 m-auto mb-3 fw-bolder'>Pay {totalAmount - 10}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart