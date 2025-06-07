import React, { useContext, useState } from 'react'
import { recipecontext } from '../../context/ReacipeContext'
import { useNavigate } from 'react-router-dom'

import chef from '../assets/chef_high_quality.png'
import Donut from '../assets/donut.png'
import Icream from '../assets/ice_cream.png'


const Home = () => {

  const { DishData } = useContext(recipecontext)

  const [active, setActive] = useState(true)

  const Navigate = useNavigate()

  return (


    <div className='realtive'>

      <div className=" w-full overflow-hidden h-screen flex-wrap p-4 justify-evenly  bg-gradient-to-b from-White to Plum ">

        <div className='w-full h-[63rem] flex '>

          <div className='left   w-1/2 h-[63rem]  '>

            <div className=' flex w-[60rem] p-[3rem] h-[63rem] flex-col justify-center   items-center'>

              <div className='flex flex-col items-center '>

                <h1 className=' text-Green   flex gap-7 mb-5 dm-serif-text-regular-italic text-7xl text-center uppercase'>
                  Chefs
                  <span className=' w-[3rem]  flex h-[5rem] '> Un <img className=' w-[5rem]  gap-0  h-[4.5rem] ' src={Icream} alt="" />te. </span> </h1>

                <h1 className=' text-Green  flex gap-7 mb-5 dm-serif-text-regular-italic text-7xl text-center uppercase'>
                  Tastebuds
                  <span className=' w-[5rem] flex h-[5rem]     '> Rej <img className=' w-[5rem] h-[5rem] ' src={Donut} alt="" />  ice. </span> </h1>

              </div>


              <p className='dm-serif-text-regular text-Plum text-xl ml-[8rem] w-[50rem] text-center '> Welcome to a place where culinary creativity comes alive.
                Here, passionate chefs from around the world come together to share their most
                treasured recipes — from secret family dishes to bold

                {active != true ? <span  >, modern creations. Whether you’re a home cook, a food lover, or someone
                  simply looking for dinner inspiration, you’ll find something here to spark your appetite. </span>
                  : <span onClick={() => setActive(!active)} className='More cursor-pointer text-blue-500'>...More </span>}


              </p>

              <button type="button " onClick={() => Navigate('/recipes')} className=' dm-serif-text-regular w-[12rem] h-[4rem] ml-[5rem] text-xl mt-[1.5rem] rounded-xl hover:bg-Stone transition duration-200 hover:scale-95  hover:text-Plum  bg-Begin'> Explore  </button>

            </div>

          </div>

          <div className='right w-1/2 h-[63rem] '>


            <div className=' w-[60rem] h-[64rem] flex items-end bottom-0 justify-center ' >

              <img
                className=" w-[50rem] h-[55rem]  object-contain "
                src={chef}
                alt="Chef in Kitchen"
              />
            </div>

          </div>

        </div>

      </div>


    </div>
  )
}

export default Home
