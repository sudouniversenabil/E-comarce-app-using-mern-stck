import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'

import { assets } from '../assets/assets'
import { ShopContext } from '../context/Shopcontext'

import { Cartotal } from '../components/Cartotal'

// This function shows all cart data on the cart page
function Cart() {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext)

  const [cartdata, setCartdata] = useState([])

  useEffect(() => {
    const tempData = []

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }

    setCartdata(tempData)
  }, [cartItems])

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="Your" text2="cart" />
      </div>

      <div>
        {cartdata.map((item) => {
          const productdata = products.find(
            (product) => product._id === item._id
          )

          if (!productdata) return null

          return (
            <div
              key={`${item._id}-${item.size}`}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] gap-4 items-center"
            >
              {/* Product information */}
              <div className="flex items-start gap-6">
                <img
                  src={productdata.image[0]}
                  className="w-16 sm:w-20"
                  alt={productdata.name}
                />

                <div>
                  <p className="text-sm sm:text-lg">
                    {productdata.name}
                  </p>

                  <div className="flex items-center gap-5">
                    <p>
                      {currency}
                      {productdata.price}
                    </p>

                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <input

                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => {
                  const quantity = Number(e.target.value)

                  if (quantity >= 1) {
                    updateQuantity(item._id, item.size, quantity)
                  }
                }}
                className="w-16 border px-2 py-1"
              />

              {/* Delete */}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                alt="Remove item"
              />
            </div>
          )
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm : max-w-5'>
          <Cartotal />
        </div>

      </div>
    </div>
  )
}

export default Cart
