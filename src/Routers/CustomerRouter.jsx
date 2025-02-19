import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Cart from '../customer/components/Cart/Cart'
import HomePage from '../customer/pages/Homepage/Homepage'
import Navigation from '../customer/components/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import { About } from '../About/About'
import Contact from '../contact/Contact'

const CustomerRouter = () => {
  return (
    <div>
     <div>
  <Navigation/>
       </div>
         <Routes>
         <Route path = '/login' element={<HomePage/>}></Route>
         <Route path = '/register' element={<HomePage/>}></Route>
          <Route path = '/about' element={<About/>}></Route>
          <Route path = '/contact' element={<Contact/>}></Route>

             <Route path = '/' element={<HomePage/>}></Route>
             <Route path = '/cart' element={<Cart/>}></Route>
             <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
             <Route path = '/product/:productId' element={<ProductDetails/>}></Route>
             <Route path = '/checkout' element={<Checkout/>}></Route>
             <Route path = '/account/order' element={<Order/>}></Route>
             <Route path = '/account/order/:orderId' element={<OrderDetails/>}></Route>
        </Routes>
       <div>
        <Footer/>
      </div>
     </div>
  )
}

export default CustomerRouter
