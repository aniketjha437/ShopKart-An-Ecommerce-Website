import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar