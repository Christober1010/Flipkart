import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './sampleproducts.css'

import OwlCarousel from 'react-owl-carousel';
import { useNavigate } from 'react-router-dom';

function SampleProducts() {

    const [data,setData]=useState([])
    const[isloading,setIsloading]=useState(true)

    const fetch=()=>{
        axios.get("https://65f15271da8c6584131d6662.mockapi.io/E-Commerce").then((resp)=>{
            // console.log(resp.data)
            setIsloading(false)
            setData(resp.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        fetch()
    },[])
    const navigate=useNavigate()
    // console.log(data);
    return (
        <>
        {
            isloading?<div className='text-center'>Loading...</div>:<div className='container'>
            <h4>Best Sellers</h4>
            <div className='product-box'>
                <OwlCarousel className='owl-theme margin={10} nav'>
                {   
                    data.map((item)=>{
                        return <div class="product-card" style={{ width: "18rem" }}>
                        <div class="product-body text-center" onClick={()=>navigate('/products')}>
                            <img src={item.img}/>
                            <b>{item.name}</b>
                            <h6>Price $ {item.price}</h6>                        
                        </div>
                    </div>
                    })
                }
                </OwlCarousel>
                
                
            </div>
        </div>
        }
         
        </>
       
    )
}

export default SampleProducts