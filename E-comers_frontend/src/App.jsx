import "./index.css";

// Routers
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Oder from "./pages/Oder";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

// componestes
import Navber from "./components/Navber";
import Fotter from "./components/Fotter";


function App() {
  return (
    <div className="px-5  sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oder" element={<Oder />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
      <Fotter/>

    </div>
  )
}

export default App