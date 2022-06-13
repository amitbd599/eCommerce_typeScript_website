import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Clinte__Site/Page/About";
import Account from "./Clinte__Site/Page/Account";
import Home from "./Clinte__Site/Page/Home";
const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
