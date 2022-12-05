import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/about/About'
import Cart from '../pages/cart/Cart'
import CheckOut from '../pages/checkout/CheckOut'
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'
import OrderTracking from '../pages/order/OrderTracking'
import Product from '../pages/product/Product'
import Shop from '../pages/shop/Shop'
import Whishlist from '../pages/wishlist/Whishlist'

const MyRouter=()=>{
    return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop'element={<Shop/>} />
        <Route path='/product:id'element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/orderTracking' element={<OrderTracking/>}/>
        <Route path='/wishlist' element={<Whishlist/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>

      </Routes>
       
    )
}

export default MyRouter
