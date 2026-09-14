import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import RalatlProdut from '../components/RalatlProdut'
const Product = () => {
  const { productId } = useParams()  // what is the use parms i need more explin
  const { products, currency } = useContext(ShopContext)
  const [productdata, setproductdata] = useState(false)
  const [image, seImage] = useState('')
  const [size, setSize] = useState("")
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductdata(item)
        seImage(item.image[0])
        return null
      }
    })
  }
  useEffect(() => {
    console.log(productdata)
    fetchProductData()
  }, [productdata])
  // console.log(productId)

  return productdata ? (
    <div className='border-t-2 pt-10 ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12'>
        {/* product iamges */}
        <div className='flex-1 flex flex-col gap-2 sm:flex-row'>
          <div className='flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productdata.image.map((item, index) => (
                <img onClick={() => seImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 	
flex-shrink:0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-4/5'>
            <img className='w-[50%] h-au' src={image} alt="" />
          </div>
        </div>
        {/* =========prodct info============ */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />

          </div>
          <p className='mt-5 text-2xl font-medium'> {currency}{productdata.price}</p>
          <p className='mt-5 text-gray-500 w-[80%]'>{productdata.description}</p>

          <div className='flex flex-col gap-4 my my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 cursor-pointer bg-amber-100'>
              {productdata.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`cursor-pointer border py-2 px-4  bg-gray-150 ${size === item ? 'border-amber-600 ' : ""}`} key={index}> {item}</button>
              ))}
            </div>
          </div>

          <button className='bg-black text-white p-7 text-sm active:bg-red-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-80%' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100& Original Product</p>
            <p>Easy return and exahange policy within 7 days</p>
            <p>Cash on delyvery and exachage policy within 7 days </p>
          </div>
        </div>
        {/* -------Discrimtpn & and Review section------------ */}
        <div className=' mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Descrimption</b>
            <p className='border pox-5 py-3 text-sm'>Reviews(122)</p>

          </div>
        </div>
      </div>
      {/* display the realdate product */}
      <RalatlProdut category={productdata.category} subCategory={productdata.subCategory} />
    </div>
  ) : <div className='opacity-0'>Sorry , please type another</div>
}

export default Product
