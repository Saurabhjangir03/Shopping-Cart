import React from 'react'
import { MdDelete } from "react-icons/md";
import { remove } from '../Redux/Slices/Cartslice';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';


export const Cartitem = ({item,count,setcount}) => {
  const dispatch = useDispatch();

  function removehandler(params) {
    dispatch(remove(item.id)) 
    toast.error("item removed from cart")
  }
  return (
    <div className='flex justify-center gap-[80px]  w-full p-[30px] '>
<div className='h-[170px]  mt-7'>
  <img  src={item.image}  className='h-full  object-contain' alt='888'/>
</div>
<div className='flex flex-col gap-8 ' >
    <h2 className='text-xl text-gray-800 font-semibold'>{item.title}</h2>
    <p className='text-gray-700'>{item.description}</p>
    <div  className='flex justify-between'>
        <p className='font-bold text-green-600 text-lg'>${item.price}</p>
    
     <div className='w-[40px] h-[40px] rounded-full bg-red-200 flex justify-center items-center cursor-pointer'>
      <button 
    onClick={removehandler}
    ><MdDelete className='text-red-800'/></button>
     </div>
    </div>

</div>


    </div>
  )
}
