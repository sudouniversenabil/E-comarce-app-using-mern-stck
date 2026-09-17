import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title'

export const Cartotal = () => {
  const {
    currency,
    delivary_fee,
    getCartAmount
  } = useContext(ShopContext)

  const subtotal = getCartAmount()
  const total = subtotal === 0 ? 0 : subtotal + delivary_fee

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'cart'} text2={'total'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>

        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{subtotal}</p>
        </div>

        <hr />

        <div className='flex justify-between'>
          <p>Shipping fee</p>
          <p>{currency} {delivary_fee}</p>
        </div>

        <hr />

        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency} {total}</b>
        </div>

      </div>
    </div>
  )
}