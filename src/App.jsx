import React, { useRef, useState } from 'react'
import './App.css'

import AppLayout from './components/Layout/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
// import Country from './pages/Country'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/Layout/CountryDetails'
import { lazy,Suspense } from 'react'


const CountryList =lazy(()=>import('./pages/Country'))
const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
       {
    path:'/',
    element:<Home/>
  }
  ,
   {
    path:'about',
    element:<About/>
  },
    {
    path:'country',
    element:<Suspense fallback={<h2 className='text-3xl text-center '>Loading Countries...</h2>}>
  <CountryList />
</Suspense>

  },
  {
        path:'country/:id',
    element:<CountryDetails/>
  },

    {
    path:'contact',
    element:<Contact/>
  },
    ]
  },
 
])
const App = () => {

  
  return <RouterProvider router={router}></RouterProvider>
}

export default App
