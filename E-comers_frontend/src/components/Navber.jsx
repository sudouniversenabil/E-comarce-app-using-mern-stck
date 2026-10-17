import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'

function Navber() {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCArtitems, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/collection', label: 'Collection' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
  ]

  return (
    <div className='relative flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <img src={assets.logo} className='w-36' alt='Logo' />
      </Link>

      <ul className='hidden sm:flex gap-7 text-sm text-gray-700'>
        {navLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} className='flex flex-col items-center gap-1'>
            <p>{label}</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        ))}
      </ul>

      <div className='flex items-center gap-6'>
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt='Search'
        />

        <div className='group relative'>
          <img
            onClick={() => !token && navigate('/login')}
            src={assets.profile_icon}
            className='w-5 cursor-pointer'
            alt='Profile'
          />
          {token && (
            <div className='group-hover:block hidden absolute right-0 pt-4 z-10'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-blue-700 rounded'>
                <p onClick={() => navigate('/profile')} className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='Cart' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCArtitems()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt='Menu'
        />
      </div>

      {/* Mobile sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'
          }`}
      >
        <div className='flex flex-col text-gray-700'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              onClick={() => setVisible(false)}
              className='py-2 pl-6 border'
              to={to}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navber