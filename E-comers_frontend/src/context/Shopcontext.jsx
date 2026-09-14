import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext()

const ShopContextprovider = (props) => {
    const currency = "$"
    const delivary_fee = 10
    const [search,setSearch]=useState('')
    const[showSearch,setShowSearch]=useState(false)
    const[cartItems,SetCartItems]=useState({})
    const addToCart= async(itemid,size)=>{
let cartDAta=structuredClone  (cartItems)
    }
    const value = {
        products, currency, delivary_fee,search,showSearch,setSearch,setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextprovider