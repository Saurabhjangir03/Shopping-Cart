import { Navbar } from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster, toast } from "react-hot-toast";
import { useSelector} from "react-redux";
import React, { useState } from 'react'


const App = () => {
  const {cart} = useSelector((state)  => state);
  // const [count,setcount]  = useState(cart.length);
  const count = cart.length;
  

  return (
    <div className="w-full">
      <Navbar count={count} />
      <Routes>
      <Route path="/"  element= {<Home count={count} />}/>
      <Route path="/cart"  element= {<Cart count={count}  />}/>
      </Routes>
       <Toaster 
        position="top-center" 
        reverseOrder={false} 
      />
    </div>
  )
};
export default App;
