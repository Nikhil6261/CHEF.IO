import React from 'react'
import { NavLink , useNavigate } from 'react-router-dom'


const Navbar = () => {

  const Navigate = useNavigate()
  

  return (
    <div className='  CabinetGrotesk-Regular absolute w-[100rem] ml-[15rem] mt-2 rounded-xl drop-shadow-xl bg-Begin  h-[3rem] border-1  p-10  flex items-center justify-between text-xl uppercase text-Snow ' >


      <h1 onClick={ ()=> Navigate('/home') } className=' cursor-pointer' >  Chef.io  </h1>

      <div className="flex items-center justify-center gap-6 ">

        <NavLink className={(e) => (e.isActive ? 'text-red-400' : "")} to="/home"> home </NavLink>

        <NavLink className={(e) => (e.isActive ? 'text-red-400' : "")} to="/recipes">  recipes </NavLink>


        <NavLink className={(e) => (e.isActive ? 'text-red-400' : "")} to="/about">  About </NavLink>

        <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/favroite" > Favorite </NavLink>

      </div>
    </div>


  )

}

export default Navbar
