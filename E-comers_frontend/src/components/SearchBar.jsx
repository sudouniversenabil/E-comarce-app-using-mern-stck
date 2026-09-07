import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

function SearchBar() {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visiable, setVisiable] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisiable(true)
        } else {
            setVisiable(false)
        }
    }, [location])

    return showSearch && visiable ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                
                <input
                    className='flex-1 outline-none bg-inherit text-sm'
                    type="text"
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <img
                    className='inline w-3 cursor-pointer'
                    src={assets.search_icon}
                    alt=""
                />
            </div>

            <img
                className='inline w-3 cursor-pointer'
                onClick={() => setShowSearch(false)}
                src={assets.cross_icon}
                alt=""
            />
        </div>
    ) : null
}

export default SearchBar