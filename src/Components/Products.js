import axios from 'axios'
import React, { useEffect, useState } from 'react'
import pic from '../Images/login_img.png'
import './products.css'
import toast from 'react-hot-toast'




function Products({ setCartData, cartData }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = () => {
    axios.get("https://65f15271da8c6584131d6662.mockapi.io/resource").then((resp) => {
      // console.log(resp.data)
      setLoading(false)
      setData(resp.data)
    }).catch((err) => {
      console.log(err)
    })
  }


  useEffect(() => {
    getData()
  }, [])

  const handleAddtocart = (data) => {
    // console.log(data)
    axios.post("https://660513e12ca9478ea17f38c6.mockapi.io/cart", data).then((res) => {
      toast.success("Added to cart")
      setCartData([...cartData, data])
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      {loading ? <div className='text-center'>Loading</div>
        :
        <div className='container'>
          <div className='row'>
            {
              data.map((item) => {

                return <div className='col-3'>

                  <div class="card mt-5 bg-dark text-light" style={{ width: "18rem" }}>
                    <img src={item.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{item.productname}</h5>
                      <span className={Number(item.rating) > 3 ? "badge text-bg-success p-2" : "badge text-bg-warning p-2"}>{item.rating} <i className='fa fa-star'></i></span>
                      <p class="card-text"><span className='fs-4 fw-bold'>${item.price}</span> <span className='text-decoration-line-through'>${item.offerprice}</span></p>

                      <div>
                        <p class="card-text">{item.description}</p>
                      </div>
                      <div className='d-flex'>
                        <button className='add-btn' onClick={() => handleAddtocart(item)}>Add to cart</button>
                        <button className='buy-btn'>buy now</button>
                      </div>
                    </div>
                  </div>
                </div>

              })
            }



          </div>
        </div>
      }

    </div>
  )
}

export default Products