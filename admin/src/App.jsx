import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Naver from "./components/Naver";
import Siderbar from "./components/Siderbar";
import Login from "./components/Login";

import Add from "./page/Add";
import List from "./page/List";
import Oders from "./page/Oders";

const backendURL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />

      {token === "" ? (
        <Login Tok={setToken} />
      ) : (
        <>
          <Naver setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Siderbar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Oders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { backendURL };
export default App;