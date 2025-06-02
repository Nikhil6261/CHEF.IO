import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { recipecontext } from '../../context/ReacipeContext'
import RecipeCard from '../component/RecipeCard'

const Recipes = () => {
  const { DishData } = useContext(recipecontext)
  
  return (
    <>
      <div className='p-5 flex  justify-between'>
        <span></span>

        <NavLink className=' w-[13rem] uppercase flex  justify-center items-center rounded-xl h-[3.8rem] bg-red-200 '
          to='/recipes/create-recipe'  > new  Recipe</NavLink>

      </div>

      <div className="w-full h-[55rem] bg-black">

        {DishData.length != 0 ? <div> <RecipeCard />  </div> : <div className='text-2xl uppercase text-red-400  p-5' > recipe not found </div>}


      </div>


    </>
  )
}

export default Recipes
