
import React, { useContext } from 'react'
import Title from '../components/Title'
import { Cartotal } from '../components/Cartotal'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { ShopContext } from '../context/Shopcontext'

function PlaceOrder() {
  const [method, setMethod] = useState('Cod')
  const {navigate} = useContext(ShopContext)


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-120'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'delivery'} text2={'information'} />
        </div>

        <div className='flex gap-3'>
          <input
            type="text"
            placeholder='First name'
            className='border border-gray-300 rounded py-1.5 px-3 w-full'
          />

          <input
            type="text"
            placeholder='Last name'
            className='border border-gray-300 rounded py-1.5 px-3 w-full'
          />
        </div>
        <input
          type="email"
          placeholder='email addtess'
          className='border border-gray-300 rounded py-1.5 px-3 w-full'
        />
        <input
          type="text"
          placeholder='road map'
          className='border border-gray-300 rounded py-1.5 px-3 w-full' />
        <div className='flex gap-3'>
          <input
            type="text"
            placeholder='city name'
            className='border border-gray-300 rounded py-1.5 px-3 w-full'
          />

          <input
            type="text"
            placeholder='sate'
            className='border border-gray-300 rounded py-1.5 px-3 w-full'
          />
        </div>
        <div className='flex gap-3'>
          <input
            type="text"
            placeholder='country'
            className='border border-gray-300 rounded py-1.5 px-3 w-full'
          />

          <input
            type="number"
            placeholder='Zipcode'
            className='border border-gray-300 rounded py-1.5 px-3 w-full'
          />
        </div>
        <div className='flex gap-3'>

          <input
            type="number"
            placeholder='phone'
            className='border border-gray-300 rounded py-1.5 px-3 w-full'
          />
        </div>
      </div>
      {/* rigt side */}
      <div className='mt-8'>
        <div className='mt-6 min-w-80'>
          <Cartotal />

        </div>
        <div className='mt-12'>
          <Title text1={"payment"} text2={'method'} />
          {/* paymet method */}




          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  rounded-full ${method === 'stripe' ? "bg-green-500" : ""}`}>
              </p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod("razapay")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  rounded-full ${method === 'razapay' ? "bg-green-500" : ""}`}>
              </p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod("cod")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  rounded-full ${method === 'cod' ? "bg-green-500" : ""}`}>
              </p>
              <p className='text-gray-500 text-sm font-medium mx-4 '>CASh ON delivery</p>
            </div>
          </div>
          <div className='w-full text-end  mt-8 cursor-pointer'>

            <button onClick={()=>navigate('/oder')} className='bg-black text-white px-16 py-4 text-sm'>Place order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
