import React from 'react'
import { NavLink, useRouteError } from 'react-router'

const ErrorPage = () => {

    const error=useRouteError();
  return (
    <div className=' absolute top-40  w-full  flex flex-col justify-center items-center '>
      <h1 className='text-3xl font-bold'>Oops! Error Occurred</h1>
      <h1 className='text-2xl'>{error.data}</h1>
      <NavLink to='/' ><button className='bg-gray-400 p-3.5 rounded-2xl w-[10rem] h-9 cursor-pointer'>Go to home</button></NavLink>
    </div>
  )
}

export default ErrorPage
