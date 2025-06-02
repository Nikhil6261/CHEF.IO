import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className=' w-full  h-[5rem] p-10 bg-blue-200 flex items-center justify-between text-xl uppercase text-black ' >


      <h1> Chef.io  </h1>

      <div className="flex items-center justify-center gap-2 ">

        <NavLink className={(e) => (e.isActive ? 'text-red-400' : "")} to="/home"> home </NavLink>

        <NavLink className={(e) => (e.isActive ? 'text-red-400' : "")} to="/recipes">  recipes </NavLink>


        <NavLink className={(e) => (e.isActive ? 'text-red-400' : "")} to="/about">  About </NavLink>

        <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/favroite" > Favorite </NavLink>

      </div>
    </div>
  )
}

export default Navbar
