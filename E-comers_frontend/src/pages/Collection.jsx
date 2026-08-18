import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import Title from '../components/Title'

import ProductItem from '../components/ProductItem'

function Collection() {

  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(true)

  const [filterProduct, setFilterProducts] = useState([])

  useEffect(() => {
    setFilterProducts(products)
  }, [products])



  return (
    <div className='flex flex-col sm:flex-row gap-1 pt-10 border-t '>
      {/* filter option */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap -2' onClick={() => setShowFilter(!showFilter)}>Filters
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ""}`} alt="" /> </p>
        {/* catagory filter */}

        <div className={`border border-e-gray-300 pl-5 py-6 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium  '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"MEN"} />Men

            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"WOMEN"} />WOMEN

            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"KIDS"} /> kids

            </p>
          </div>
        </div>
        {/* SUB CATAGORY filter */}
        <div className={`border border-e-gray-300 pl-5 py-6 my-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium  '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Topwear"} />Topwear

            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Bottomwear"} /> Bottomwear

            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Winterwear"} /> Winterwear

            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={'COLLECTIONS'} />

          {/* PRODUCT SORT */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relaven</option>
            <option value="low-high">Sort by: low-high</option>
            <option value="high-low">Sort by: high-low</option>
          </select>
        </div>
        {/* map product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>

        {
          filterProduct.map((item, index) => {
            return (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            )
          })


        }


        </div>
      </div>
    </div>
  )
}

export default Collection