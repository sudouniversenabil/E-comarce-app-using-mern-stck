import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-600 '>
            <div className=' w-full sm:1/2 flex items-center justify-center py-10 sm:py-0'>


                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-3 min-h-0.5 md:w-11 bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>Our Bestsallers</p>
                    </div>
                    <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    {/* i cant not khnow what is leading-relaxed */}
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold'>Shop now</p>
                        <p className='w-3 min-h-0.5 md:w-11  bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* hero riht side */}
            <img src={assets.hero_img} className='w-full sm-w-1/2' alt="" />
        </div>
    )
}

export default Hero