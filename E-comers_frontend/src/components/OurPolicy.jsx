import React from 'react'
import { assets } from '../assets/assets'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />

            <p className='font-semibold'>Easy Exchage  </p>
            <p className='text-gray-700'>balaballab</p>
        </div>
                <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />

            <p className='font-semibold'>7 daya retue polu</p>
            <p className='text-gray-700'>we provide free </p>
        </div>

    </div>
  )
}

export default OurPolicy