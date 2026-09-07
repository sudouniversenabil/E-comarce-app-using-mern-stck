import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'
import { products } from '../assets/assets'

const Product = () => {
  const { productId } = useParams()  // what is the use parms i need more explin
  const { Product } = useContext(ShopContext)
  const [productdata, setproductdata] = useState(false)
  const [image, seImage] = useState('')
  const fetchProductData = async () => {
    Product.map((item) => {
      if (item._id === productId) {
        setproductdata(item)
        seImage(item.image[0])
        return null
      }
    })
  }
  useEffect(() => {
    fetchProductData()
  }, [productdata])
  console.log(productId)
  return productdata ? (
    <div className='border-t-2 pt-10 ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12'>
        {/* product iamges */}
        <div className='flex-1 flex flex-col gap-2 sm:flex-row'>
          <div className='flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
{
  productdata.image.map((item,index)=>(
<img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 	
flex-shrink:0 cursor-pointer' alt="" />
  ))
}
          </div>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'>Sorry , please type another</div>
}

export default Product