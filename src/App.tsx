import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Clinte__Site/Page/About";
import Account from "./Clinte__Site/Page/Account";
import Blog from "./Clinte__Site/Page/Blog";
import Cart from "./Clinte__Site/Page/Cart";
import Checkout from "./Clinte__Site/Page/Checkout";
import ComingSoon from "./Clinte__Site/Page/ComingSoon";
import Contact from "./Clinte__Site/Page/Contact";
import Error from "./Clinte__Site/Page/Error";
import Faq from "./Clinte__Site/Page/Faq";
import Home from "./Clinte__Site/Page/Home";
import Login__Register from "./Clinte__Site/Page/Login__Register";
import Product from "./Clinte__Site/Page/Product";
import Single__Blog from "./Clinte__Site/Page/Single__Blog";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faqs" element={<Faq />}></Route>
          <Route path="/coming-soon" element={<ComingSoon />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/single-blog" element={<Single__Blog />}></Route>
          <Route path="/product" element={<Product />}></Route>

          <Route path="/checkout" element={<Checkout />}></Route>

          <Route path="/account" element={<Account />}></Route>
          <Route path="/login-register" element={<Login__Register />}></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
