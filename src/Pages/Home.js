import React, { useEffect, useState } from 'react'
import { API_URL } from '../data';
import { Spinner } from '../components/Spinner';
import { Product } from '../components/Product';

export const Home = ({count,setcount}) => {
  const url = API_URL;
  const [loading,setloading] = useState(false);
  const [posts,setposts] = useState([]);
  async function fetchproduts(params) {

      setloading(true)
       const res = await fetch(url);
       const data = await res.json();
       setposts(data);
      setloading(false);

  }
  useEffect(() =>{
   fetchproduts();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[] )
  return (
    <div className='w-full'>
     <div>
      {
        loading ? (<Spinner/>)  : (
          <div className='flex w-10/12 flex-wrap mx-auto mt-[40px] mb-[20px] gap-[44px] '>
            {
              posts.map((post) => {
                return <Product post={post}  count={count} />
              })
            }
          </div>
        )
      }
     </div>
    </div>
  )
}
