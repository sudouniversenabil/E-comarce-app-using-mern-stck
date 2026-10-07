import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../admin_assets/assets'

const Siderbar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2  '>
            <div className='flex flex-col gap-4 py6 pl-[20%] text-15px'>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-2xl  " to="/add">
                    <img className='w-5 h-5' src={assets.add_icon} alt="" />
                    <p className='hidden md:block'>add Items</p>

                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-2xl  " to="/add">
                    <img className='w-5 h-5' src={assets.order_icon} alt="" />
                    <p className='hidden md:block'>List Items</p>

                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-2xl  " to="/add">
                    <img className='w-5 h-5' src={assets.order_icon} alt="" />
                    <p className='hidden md:block'>order</p>

                </NavLink>
            </div>
        </div>
    )
}

export default Siderbar
