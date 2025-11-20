import {toast}  from "react-hot-toast"
import {useDispatch, useSelector} from "react-redux";
import {add,remove} from "../Redux/Slices/Cartslice"


export const Product = ({post,count,setcount}) => {
        const title = `${post.title.substring(0,15)}...`
        const description = `${post.description.substring(0,150)}...`
        const {cart}  = useSelector((state)  =>  state);
        const dispatch = useDispatch();
        function removefromcart(params) {
           dispatch(remove(post.id))
           toast.error("Item removed from cart!")
           
        }
        function addtocart(params) {
          dispatch(add(post))
          toast.success("Item added to cart!")
          
        }
return (
<div className=" group flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[22%] rounded-2xl shadow-lg  transition-all ease-in-out duration-500  border-black  p-6 gap-3 hover:scale-[1.18] hover:shadow-2xl">
<p className="font-semibold text-lg mx-auto">{title}</p>
<div className="h-[50px]">
<p className="text-[9px] h-full text-gray-500 mx-auto">{description}</p>
</div>
<div className="h-[170px] flex items-center justify-center">
<img src={post.image}  className="mx-auto object-contain h-full w-full"  alt="img"/>
</div>
<div className="flex justify-between mt-2 ">
    <p className="text-green-600 font-semibold">${post.price}</p>
    
      {       
      
        cart.some((p) => {
          return p.id == post.id
        }) ? (<button
      className="uppercase text-xs  py-1 px-3 font-semibold border-2 rounded-full border-gray-600 text-gray-600 "
        onClick={removefromcart}
        >Remove item</button>) :
         (<button
         className="uppercase text-xs py-1 px-3 font-semibold border-2 rounded-full border-gray-600 text-gray-600 transition-all duration-400 group-hover:bg-gray-600 group-hover:text-white "
         onClick={addtocart}
         >Add to cart</button>)
      }
    
</div>
</div>
  )
}
