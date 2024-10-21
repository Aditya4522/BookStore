import React from 'react'

export default function Card({data}) {

  return (
    <>
    <div>
    <div className="card bg-base-100 w-92 p-5   shadow-xl mt-4 mb-3 mx-2 hover:scale-90 duration-200 cursor-pointer">
  <figure className='h-48'>
  <img
  src={data.image}
  alt="Shoes"  className=''/>

  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {data.titile}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{data.descrption}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{data.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 duration-300 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
