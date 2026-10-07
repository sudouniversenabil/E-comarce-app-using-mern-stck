import React, { useState } from 'react'
import Naver from './components/Naver'
import Siderbar from './components/Siderbar'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import Add from './page/Add'
import List from './page/List'
import Oders from './page/Oders'

const App = () => {
  const [token, setToken] = useState("")

  return (
    <div className="bg-gray-50 min-h-screen">
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Naver />
          <hr />

          <div className="flex w-full">
            <Siderbar />

            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Oders />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App