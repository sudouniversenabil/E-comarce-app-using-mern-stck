import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendURL } from "../App";
import { toast } from "react-toastify";

const currency = "$";

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "api/product/list");
      console.log(response.data);

      if (response.data.success) {
        // backend-er key naam jai hok, ekhane ta dhorbe
        // const data =
        //   response.data.products ||
        //   response.data.product ||
        //   response.data.data ||
        //   [];
        setList(response.data.produts);
        console.log(list);

        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const reomveproduct = async (id)=>{
    try {
      const responce = await axios.post(backendURL+"api/product/remove",{id},{headers:{token}})
      console.log(responce)
      if (responce.data.success) {
        toast.success(responce.data.message)
        await fetchList()
      }else{
        toast.error(responce.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  useEffect(() => {
    
    fetchList();
  }, []);

  return (
    <div>
      <p className="mb-2">All product list</p>

      <div className="flex flex-col gap-2">
        {/* table title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* product rows */}
        {list.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
          >
            <img className="w-12" src={item.image?.[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {"4"}
              {item.price}
            </p>
            <p onClick={()=>reomveproduct(item._id)} className="text-right md:text-center cursor-pointer text-lg">
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;