import React from 'react'
import { Link } from 'react-router-dom'
import Login from "./Login";



export default function Siginup() {
  return (
        <>
        <div className=" flex h-screen justify-center items-center  ">
        <div id="my_modal_3" className='' >
  <div className="modal-box w-[400px] ">
    <form method="dialog">
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Sigin up</h3>
    <br /><br />
    <div className='space-y-2 '>
    <span>Name</span>
    <br />
    <input type="text" placeholder='Enter your fullName' className='w-64 border-[2px] rounded-md' />
    <br /> 
    <span>Email</span>
    <br />
    <input type="text" placeholder='Enter your email' className='w-64 border-[2px] rounded-md' />
    <br />
    <br />
    <span className='mt-5'>password</span><br />
    <input type="password" placeholder='Enter your password' className='w-64 border-[2px] rounded-md' />
    </div>
    <br />
   
    <div className='flex justify-between mt-5'> 
        <button className='bg-black text-white hover:bg-green-700 duration-200 p-2 rounded-md px-3' >Sigin up</button>
        <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
        </div>
        <br />

       </div>
      </div>
        </div>
        </>
  )
}

