import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { Cartitem } from '../components/Cartitem'

export const Cart = ({count,setcount}) => {
  const {cart} = useSelector((state)  => state)
  const naviagte = useNavigate();
  const [totalamount,settotalamount]  = useState(0);

  useEffect(()  => {
  settotalamount(cart.reduce((acc,curr)  => {
    return  acc+curr.price} ,0))
  },[cart])                                                                                           

  function shophandler(params) {
    naviagte("/");
  }
  return (
    <div className='w-full'>{
            cart.length >0  ? (
              <div className='w-10/12 flex gap-8 mx-auto justify-center  flex-wrap mt-[20px]'>
               <div className='w-[50%]'>
                {
                  cart.map((item) => {
                    return <Cartitem item={item} count={count} setcount={setcount}/>
                  })
                }
              </div>
          {/* right section  */}
              <div className='flex flex-col w-[40%] mt-[55px] gap-5'>
                <div className='flex flex-col'>
              <h2 className='font-semibold text-2xl text-green-600'>YOUR CART</h2>
              <h1 className='font-semibold uppercase text-green-600 text-[50px]'>Summary</h1>
               <p className='text-xl text-gray-700 capitalize '>Total items:<span>{cart.length}</span></p>
                </div>
                <div className='flex flex-col gap-3'>
                  <p className=' text-xl text-gray-700 capitalize'>Total amount:<span className='font-bold text-xl text-black'>${totalamount}</span></p>
                  <button className=' text-white text-xl  font-bold border-2 capitalize w-full py-3 rounded-lg border-green-600 bg-green-700 hover:bg-white hover:text-green-600 transition-all ease-in-out duration-500'>checkout now</button>
                </div>
              </div>

              </div>
            ) :
    (
        <div className=' h-screen flex flex-col justify-center items-center gap-3'>
          <h2 className='font-bold text-2xl text-gray-700'>Your cart is empty!</h2>
          <button onClick={shophandler} className='font-semibold border bg-green-600 text-white py-3
          px-[35px] rounded-md   '>SHOP NOW</button>
        </div>
      
    )
    }</div>
  )
}
