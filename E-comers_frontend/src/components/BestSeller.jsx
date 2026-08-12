import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title'
import ProductItem from './ProductItem'
function BestSeller() {
  const { products } = useContext(ShopContext)
  const [bestSeller, setbestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller))
    setbestSeller(bestProduct.slice(0, 5))
  }, [products])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={"best"} text2={'sellers'} />
        <p className='w-3/4 m-auto text-x5 sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maxime quam! Esse!</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6' >
        {
          bestSeller.map((item, index) => {
            return (

              <ProductItem
                key={item._id}
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
  )
}

export default BestSeller