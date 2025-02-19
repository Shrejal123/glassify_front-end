import { useState } from 'react'
import './App.css'
// import Navigation from './customer/components/Navigation'

// import Footer from './customer/components/Footer/Footer'
// import Product from './customer/components/Product/Product'
// import ProductDetails from './customer/components/ProductDetails/ProductDetails'
// import Cart from './customer/components/Cart/Cart'
// import Checkout from './customer/components/Checkout/Checkout'
// import DeliveryAddress from './customer/components/Checkout/DeliveryAddress'
// import Order from './customer/components/Order/Order'
// import OrderDetails from './customer/components/Order/OrderDetails'
import { Route } from 'react-router-dom'
import CustomerRouter from './Routers/CustomerRouter'
import { Routes } from 'react-router-dom'
// import Homepage from '../../customer/pages/HomePage/Homepage'


function App() {
 

  return (
    <div className='shreju'>

      <Routes>
        <Route path='/*' element={<CustomerRouter/>}></Route>
      </Routes>
     
   
       
      {/* <Homepage/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <DeliveryAddress/> */}
      {/* <OrderDetails/> */}
   
   
    </div>
  )
}

export default App
