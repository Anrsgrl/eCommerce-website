import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Cart from './pages/cart/Cart';
import CheckOut from './pages/checkout/CheckOut';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Home from './pages/home/Home';
import OrderTracking from './pages/order/OrderTracking';
import Product from './pages/product/Product';
import React from 'react';
import Shop from './pages/shop/Shop';
import TestPage from './pages/TestPage/TestPage';
import Whishlist from './pages/wishlist/Whishlist';

function App() {
  return (
    <>
      <Header />
      <HeaderMenu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orderTracking" element={<OrderTracking />} />
          <Route path="/wishlist" element={<Whishlist />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
