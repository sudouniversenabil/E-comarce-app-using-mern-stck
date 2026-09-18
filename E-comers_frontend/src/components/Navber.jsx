import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'
function Navber() {
  const [visiable, setVisiable] = useState(false)
  const { setShowSearch, getCArtitems } = useContext(ShopContext)
  return (

    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to={"/"}> <img src={assets.logo} className='w-36' alt="" /></Link>
      <ul className='hidden sm:flex gap-7 text-sm text-gray-700 '>
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={"/collection"} className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
          <Link to={'/login'}><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">

            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-blue-700 rounded '>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Oder</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className='realtive'>
          <img src={assets.cart_icon} className='w-5' alt="" />
          <p className='w-4 aspect-square bg-black text-white text-[10px] rounded-2xl' >{getCArtitems()}</p>
        </Link>
      </div>
      {/* side bar mane for small screen */}
      {/* i cant understadn this line  */}
      <img onClick={() => setVisiable(true)} src={assets.menu_icon} className='w-8 cursor-pointer sm:hidden  ' alt="" />
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visiable ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-700 '>
          <div onClick={() => setVisiable(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisiable(false)} className=" py-2 pl-6 border" to="/">Home</NavLink>
          <NavLink onClick={() => setVisiable(false)} className=" py-2 pl-6 border" to="/about">About</NavLink>
          <NavLink onClick={() => setVisiable(false)} className=" py-2 pl-6 border" to="/collection">Collection</NavLink>
          <NavLink onClick={() => setVisiable(false)} className=" py-2 pl-6 border" to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navber
