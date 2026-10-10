
import React, { useState } from 'react'
import { assets } from '../../admin_assets/assets'
import Axios  from 'axios'
import { backendURL } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])


  // Size select / remove
  const toggleSize = (size) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter(item => item !== size))
    } else {
      setSizes([...sizes, size])
    } 
  }


  // Form submit
const onSubmitHandler = async (e) => {
  e.preventDefault()

  try {
    const formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("category", category)
    formData.append("subCategory", subCategory)
    formData.append("bestseller", bestseller)
    formData.append("sizes", JSON.stringify(sizes))

    image1 && formData.append("image1", image1)
    image2 && formData.append("image2", image2)
    image3 && formData.append("image3", image3)
    image4 && formData.append("image4", image4)

    const response = await Axios.post(
      backendURL + "api/product/add",
      formData,{ headers: { token }})
      // { headers: { token } }
    console.log(response.data);
    
    if (response.data.success) {
      toast.success(response.data.message)
      setName("")
      setDescription("")
      setPrice("")
      setSizes([])
      setImage1(false)
      setImage2(false)
      setImage3(false)
      setImage4(false)
    } else {
      toast.error(response.data.message)
    }

  } catch (error) {
    console.log(error)
    // toast.error(error.response?.data?.message || error.message)
  }
}


  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-6"
    >

      {/* Upload Image */}
      <div>

        <p className="mb-2 text-sm font-medium">
          Upload Images
        </p>

        <div className="flex gap-3">

          <label htmlFor="image1" className="cursor-pointer">
            <img
              className="w-20 h-20 object-cover border rounded"
              src={image1 ? URL.createObjectURL(image1) : assets.upload_area}
              alt="Upload"
            />

            <input
              type="file"
              id="image1"
              hidden
              onChange={(e) => setImage1(e.target.files[0])}
            />
          </label>


          <label htmlFor="image2" className="cursor-pointer">
            <img
              className="w-20 h-20 object-cover border rounded"
              src={image2 ? URL.createObjectURL(image2) : assets.upload_area}
              alt="Upload"
            />

            <input
              type="file"
              id="image2"
              hidden
              onChange={(e) => setImage2(e.target.files[0])}
            />
          </label>


          <label htmlFor="image3" className="cursor-pointer">
            <img
              className="w-20 h-20 object-cover border rounded"
              src={image3 ? URL.createObjectURL(image3) : assets.upload_area}
              alt="Upload"
            />

            <input
              type="file"
              id="image3"
              hidden
              onChange={(e) => setImage3(e.target.files[0])}
            />
          </label>


          <label htmlFor="image4" className="cursor-pointer">
            <img
              className="w-20 h-20 object-cover border rounded"
              src={image4 ? URL.createObjectURL(image4) : assets.upload_area}
              alt="Upload"
            />

            <input
              type="file"
              id="image4"
              hidden
              onChange={(e) => setImage4(e.target.files[0])}
            />
          </label>

        </div>
      </div>


      {/* Product Name */}
      <div className="w-full">

        <p className="mb-2 text-sm font-medium">
          Product Name
        </p>

        <input
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded outline-none focus:border-black"
          type="text"
          placeholder="Type here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      </div>


      {/* Product Description */}
      <div className="w-full">

        <p className="mb-2 text-sm font-medium">
          Product Description
        </p>

        <textarea
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded outline-none resize-none focus:border-black"
          rows="4"
          placeholder="Write product description here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

      </div>


      {/* Category / Subcategory / Price */}
      <div className="flex flex-col sm:flex-row gap-6 w-full">

        {/* Category */}
        <div>

          <p className="mb-2 text-sm font-medium">
            Product Category
          </p>

          <select
            className="border border-gray-300 px-3 py-2 rounded outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>

        </div>


        {/* Subcategory */}
        <div>

          <p className="mb-2 text-sm font-medium">
            Product Subcategory
          </p>

          <select
            className="border border-gray-300 px-3 py-2 rounded outline-none"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>

        </div>


        {/* Price */}
        <div>

          <p className="mb-2 text-sm font-medium">
            Product Price
          </p>

          <input
            className="w-28 border border-gray-300 px-3 py-2 rounded outline-none"
            type="number"
            placeholder="34"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

        </div>

      </div>


      {/* Product Sizes */}
      <div>

        <p className="mb-2 text-sm font-medium">
          Product Sizes
        </p>

        <div className="flex gap-3">

          <div
            onClick={() => toggleSize("S")}
            className={`border px-4 py-2 cursor-pointer ${sizes.includes("S") ? "bg-black text-white" : ""
              }`}
          >
            <p>S</p>
          </div>


          <div
            onClick={() => toggleSize("M")}
            className={`border px-4 py-2 cursor-pointer ${sizes.includes("M") ? "bg-black text-white" : ""
              }`}
          >
            <p>M</p>
          </div>


          <div
            onClick={() => toggleSize("L")}
            className={`border px-4 py-2 cursor-pointer ${sizes.includes("L") ? "bg-black text-white" : ""
              }`}
          >
            <p>L</p>
          </div>


          <div
            onClick={() => toggleSize("XL")}
            className={`border px-4 py-2 cursor-pointer ${sizes.includes("XL") ? "bg-black text-white" : ""
              }`}
          >
            <p>XL</p>
          </div>


          <div
            onClick={() => toggleSize("XXL")}
            className={`border px-4 py-2 cursor-pointer ${sizes.includes("XXL") ? "bg-black text-white" : ""
              }`}
          >
            <p>XXL</p>
          </div>

        </div>

      </div>


      {/* Bestseller */}
      <div className="flex items-center gap-2">

        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={(e) => setBestseller(e.target.checked)}
          className="w-4 h-4 cursor-pointer accent-black"
        />

        <label
          htmlFor="bestseller"
          className="text-sm text-gray-700 cursor-pointer"
        >
          Add to Bestseller
        </label>

      </div>


      {/* Submit */}
      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded cursor-pointer hover:bg-gray-800"
      >
        Add Product
      </button>

    </form>
  )
}

export default Add

