// function for add product
import { v2 as cloudinary } from "cloudinary"
import product_model from "../model/product_model.js";
// import products from "razorpay/dist/types/products.js";
const addProudut = async (req, res) => {
  try {
    const body = req.body;

    const name = body.name;
    const description = body.description ?? body.discription;
    const price = body.price;
    const category = body.category;
    const subCategory = body.subCategory ?? body.subcategory;
    const sizes = body.sizes ?? body.size;
    const bestseller = body.bestseller;

    const images = [
      req.files?.image1?.[0],
      req.files?.image2?.[0],
      req.files?.image3?.[0],
      req.files?.image4?.[0],
    ].filter(Boolean);

    if (images.length === 0) {
      return res.json({ success: false, message: "At least one image is required" });
    }

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: sizes ? JSON.parse(sizes) : [],
      bestseller: bestseller === "true",
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new product_model(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully" });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};
// list Product
const listProudut = async (req, res) => { 
  try {
    const produts= await product_model.find({})
    res.json({success:true,produts})
  } catch (error) {
    console.log(error)
    res.json({prome:"some promonm",mass:error.message})
  }
};

 
const removeProudut = async (req, res) => {
  try {
    await product_model.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"product is remove"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
 };

// single product info
const singleProudut = async (req, res) => {
  try {
    const {productId}=req.body
    const product =await product_model.findById(productId)
    res.json({success:false,product})
  } catch (error) {
    console.log(error)
    res.json({success:false,maes:error.message})
    
  }
 };

export { addProudut, listProudut, removeProudut, singleProudut };

