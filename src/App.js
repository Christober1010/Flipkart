import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Components/Navbar';
import Slides from './Components/Slides';
import SampleProducts from './Components/SampleProducts';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import Products from './Components/Products';
import Cart from './Components/Cart';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './Context/Context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CheckOut from './Components/CheckOut';
// node_modules/owl.carousel/dist/assets/owl.theme.default.css

function App() {
  const [cartData, setCartData] = useState([])

  const fetchCartData = () => {
    axios.get('https://660513e12ca9478ea17f38c6.mockapi.io/cart').then((resp) => {
      setCartData(resp.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchCartData()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider value={cartData}>
          <Navbar cartData={cartData}></Navbar>
          <Slides></Slides>

          <Routes>
            <Route path='/' element={<SampleProducts></SampleProducts>}></Route>
            <Route path='/products' element={<Products setCartData={setCartData} cartData={cartData}></Products>}></Route>
            <Route path='/cart' element={<Cart fetchCartData={fetchCartData}></Cart>}></Route>
            <Route path='/checkout' element={<CheckOut fetchCartData={fetchCartData}/>}></Route>
          </Routes>

          <Toaster></Toaster>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
