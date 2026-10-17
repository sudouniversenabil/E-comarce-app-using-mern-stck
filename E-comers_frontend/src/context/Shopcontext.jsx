import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext()

const ShopContextprovider = (props) => {
  const currency = "$"
  const delivary_fee = 10

  const backendurl = import.meta.env.VITE_BG_URL
  const [search, setSearch] = useState('')

  const [showSearch, setShowSearch] = useState(false)

  const [cartItems, setCartItems] = useState({})
  const navigate = useNavigate()
// bg er code 
  const [products, setProducts] = useState([])

  const [token, setToken] = useState('')



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
    setCartItems(cartDAta)
  }
  //this is a crt cunt code it is keep user how many cart add ther cart optino 
  const getCArtitems = () => {
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
    }
    return totalconunt
  }
  // this funtions works cart item del and modiy

  const updateQuantity = async (itemid, size, quantity) => {
    let cartData = structuredClone((cartItems))
    cartData[itemid][size] = quantity
    setCartItems(cartData)
  }
  // it show all add cart with all documet
  const getCartAmount = () => {
    let totalAmount = 0

    for (const items in cartItems) {
      let itemInfo = products.find(
        (product) => product._id === items
      )
      if (!itemInfo) continue

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount +=
              cartItems[items][item] * itemInfo.price
          }
        } catch (error) {
          console.log(error)
        }
      }
    }

    return totalAmount
  }

  const getProdutsdata = async () => {
    try {
      const respone = await axios.get(backendurl + '/api/product/list')
      console.log(respone.data)
      if (respone.data.success){
        setProducts(respone.data.products || [])
      }else{
        toast.error(respone.data.message)
      }
    } catch (error) {
console.log(error)
toast.error(error.message)
    }
  }
  useEffect(() => {
    getProdutsdata()
  }, [])

  // page reload dileo token thakbe
  useEffect(() => {
    const saved = localStorage.getItem('token')
    if (saved) setToken(saved)
  }, [])

  const value = {
    products, currency, delivary_fee, search, showSearch, setSearch, setShowSearch,
    addToCart, backendurl ,setToken,token, cartItems, getCArtitems, updateQuantity, getCartAmount, navigate,setCartItems
  }
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextprovider