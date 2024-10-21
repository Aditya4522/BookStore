import React from 'react'

import list from '../../public/listing.json'
import Card from './Card'
import { Link } from 'react-router-dom'
export default function Course() {
  return (
   <>
        <div className=' mt-20 max-w-screen-2xl container mx-auto md:px-20 px-4  justify-center text-center'>
            <h1 className='font-semibold text-[35px]'>We're delighted to have you <span className='text-pink-500'>Here :)</span> </h1>
        <p className='mt-4 font-medium text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
             eligendi. Animi necessitatibus molestiae adipisci ducimus voluptates 
             laboriosam blanditiis. Possimus, adipisci, voluptatibus exercitationem hic
              recusandae eaque ea iusto animi soluta suscipit illum provident libero nesciunt 
              cum optio cupiditate doloribus ullam,
             quas non laudantium dignissimos saepe placeat. Quas dolores culpa tempore voluptatem!</p>
             <Link to={'/'}>
             <button   className='bg-pink-500 rounded-md p-2 text-[15px]  my-6 border-[2px]'>
               back!
               </button>
             </Link>
             
        </div>
        <div className='grid mt-3 px-4 grid-cols-1 md:grid-cols-3'>
          
              {

               list.map((data,idx) => (
            <Card data={data} key={idx} />
                ))
              
              }
          
        </div>
   </>
  )
}
