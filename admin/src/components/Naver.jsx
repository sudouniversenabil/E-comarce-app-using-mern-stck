import React from 'react'
import { assets } from '../../admin_assets/assets'
const Naver = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-5x justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'> Logout</button>
    </div>
  )
}

export default Naver
