import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router';

const HeroSection = () => {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='w-[70rem] max-w-full min-h-[30rem] grid grid-cols-1 md:grid-cols-2'>

                    {/* IMAGE PART */}
                    <div className='flex justify-center items-center order-1 md:order-2 p-4 image-box'>
                        <img
                            src='/images/world.png.jpg'
                            alt='world beauty'
                            className='w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] object-contain'
                        />
                    </div>

                    {/* TEXT PART */}
                    <div className='flex justify-center flex-col gap-6 items-center order-2 md:order-1 p-6 text-center md:text-left'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                            Explore the World, One Country at a Time
                        </h1>
                        <p className='text-white text-sm sm:text-base '>
                            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                        </p>

                        <div className=' md:w-full'>
                            <NavLink to='/country'>
                                <button className='cursor-pointer mt-4 border-2 w-[10rem] border-white bg-black text-white font-medium px-6 py-3 rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-300'>
                                    Start Exploring <FaArrowRightLong className='text-lg' />
                                </button>
                            </NavLink>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection
