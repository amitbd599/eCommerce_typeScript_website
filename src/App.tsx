import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Clinte__Site/Page/About";
import Account from "./Clinte__Site/Page/Account";
import Cart from "./Clinte__Site/Page/Cart";
import Checkout from "./Clinte__Site/Page/Checkout";
import ComingSoon from "./Clinte__Site/Page/ComingSoon";
import Contact from "./Clinte__Site/Page/Contact";
import Error from "./Clinte__Site/Page/Error";
import Faq from "./Clinte__Site/Page/Faq";
import Home from "./Clinte__Site/Page/Home";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faqs" element={<Faq />}></Route>
          <Route path="/coming-soon" element={<ComingSoon />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
