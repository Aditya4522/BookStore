import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to={'/course'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <br />
    <div className='space-y-2'>
    <span>Email</span>
    <br />
    <input type="text" placeholder='Enter your email' className='w-80 border-[2px] rounded-md' 
     {...register("email", { required: true })}/>
    <br />
    <br />
    <span className='mt-5'>password</span><br />
    <input type="password" placeholder='Enter your password' className='w-80 border-[2px] rounded-md'
     {...register("password", { required: true })}  />
    </div>
   
    <div className='flex justify-around mt-5'> 
        <button className='bg-pink-500 hover:bg-pink-700 duration-200 p-2 rounded-md px-3' >Login</button>
        <p>account already <Link to='/singup' className='text-blue-600 underline cursor-pointer'>sigin </Link ></p>
        </div>
   
  </div>
</dialog>
    </div>
    </>
  )
}
