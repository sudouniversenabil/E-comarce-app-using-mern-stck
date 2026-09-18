

import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/Shopcontext'
const Oder = () => {
  const { products, currency } = useContext(ShopContext)
  return (
    <div className='border-t pt-16'>
      hiiii

      <div className='text-2xl'>
        <Title text1={"MY"} text2={"Oders"} />

      </div>
      <div >
        {
          products.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="py-4 border-b border-t text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 sm:w-20"
                  src={item.image[0]}
                  alt=""
                />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base'>
                    <p className='text-lg '>{currency}{item.price}</p>
                    <p>Quantity : 1</p>
                    <p>Size : M</p>
                  </div>
                  <p className='mt-3'>Date: <span className='text-gray-500'> 25/8/2024</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-3'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm'>Ready to ship</p>
              </div>
              <div>
                <button className='border px-5 py-2 text-sm  font-medium rounded-sm '>tTrack oder</button>
              </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>

  )
}

export default Oder