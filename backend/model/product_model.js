import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name :{type : String,require:true},
    description:{type: String,require:true},
    price:{type:Array,require:true},
    Category:{type:String,require:true},
    subCategory:{type:String,require:true},
    sizes:{type:Array,require:true},
    bestseller:{type:Boolean},
    data:{type:Number,require:true}

})

// const productModel = mongoose.models.product || mongoose.model("product", productSchema)


const product_model = mongoose.models.product || mongoose.model("product",productSchema)


export default product_model