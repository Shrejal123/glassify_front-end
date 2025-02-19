import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Cart from '../customer/components/Cart/Cart.jsx'
import HomePage from '../customer/pages/Homepage/Homepage.jsx'
import Navigation from '../customer/components/Navigation.jsx'
import Footer from '../customer/components/Footer/Footer.jsx'
import Product from '../customer/components/Product/Product.jsx'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails.jsx'
import Checkout from '../customer/components/Checkout/Checkout.jsx'
import Order from '../customer/components/Order/Order.jsx'
import OrderDetails from '../customer/components/Order/OrderDetails.jsx'
import { About } from '../About/About.jsx'
import Contact from '../contact/Contact.jsx'

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
