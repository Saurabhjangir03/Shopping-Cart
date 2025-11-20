import React, { useState } from 'react'
import ecomzy from "../logo.png"
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useSelector} from "react-redux";




export const Navbar = ({count ,setcount}) => {
  // const [count,setcount]  = useState(cart.length);
  const {cart}  =  useSelector((state)  => state);

  return (
    <div className='bg-slate-900  w-full  h-20 flex justify-center items-center'>
    <div className='flex  w-full max-w-6xl  mx-auto justify-between items-center '>
     <NavLink to="/"><img src={ecomzy} alt='ecomy'  width={180} height={180}/></NavLink>  
      
       <div className='flex  gap-9  text-white relative'>
      <NavLink to="/"><p className=''>Home</p></NavLink> 
       <NavLink to="/cart"> <FaCartShopping className='text-2xl hover:text-green-500 transition-all duration-300' /></NavLink>
       {
        cart.length >0 && <div className='absolute -top-2  -right-1 h-[18px] w-[18px] rounded-full bg-green-700 text-white flex  justify-center items-center text-xs'>{count}</div>
       }
      </div>
    </div>
    </div>
  )
}
