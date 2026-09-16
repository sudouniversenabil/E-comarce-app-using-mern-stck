import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextprovider = (props) => {
  const currency = "$"
  const delivary_fee = 10
  const [search, setSearch] = useState('')

  const [showSearch, setShowSearch] = useState(false)

  const [cartItems, SetCartItems] = useState({})

  const addToCart = async (itemid, size) => {
    if (!size) {
      toast.error("select products size")
      return;
    }
    let cartDAta = structuredClone(cartItems)  //this is struredClone is a deep keap deap copy
    if (cartDAta[itemid]) {
      if (cartDAta[itemid][size]) {
        cartDAta[itemid][size] += 1



      } else {
        cartDAta[itemid][size] = 1
      }
    } else {
      cartDAta[itemid] = {}
      cartDAta[itemid][size] = 1
    }
    SetCartItems(cartDAta)
  }
  const getCArtitems = () => {
    //this is a crt cunt code it is keep user how many cart add ther cart optino 
    let totalconunt = 0
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item]) {
            totalconunt += cartItems[items][item]
          }
        } catch (error) {
          toast.error(error)

        }
      }
      return totalconunt
    }
  }
  // this funtions works cart item del and modiy

  const updateQuantity = async (itemid, size, quantity) => {
    let cartData = structuredClone((cartItems))
    cartData[itemid][size] = quantity
    SetCartItems(cartData)
  }

  const value = {
    products, currency, delivary_fee, search, showSearch, setSearch, setShowSearch,
    addToCart, cartItems, getCArtitems, updateQuantity
  }
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextprovider
