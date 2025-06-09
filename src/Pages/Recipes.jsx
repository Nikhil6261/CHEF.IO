import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { recipecontext } from '../../context/ReacipeContext'
import RecipeCard from '../component/RecipeCard'

const Recipes = () => {
  const { DishData } = useContext(recipecontext)
  
  return (
    <>

    <div className="w-full h-screen   bg-sky-100  ">

      
      <div className='p-5 flex justify-between bg-gradient-to-b    '>
        
        <span> </span>
        

        <NavLink className=' w-[13rem] mt-[7rem] h-[3.5rem]  uppercase flex  justify-center items-center rounded-xl h-[3.8rem] transition-all ease-in-out border text-Plum hover:bg-Plum hover:text-random '
          to='/recipes/create-recipe'  > new  Recipe</NavLink>

      </div>

      <div  >

        {DishData.length != 0 ? <div> <RecipeCard />  </div> : <div className='text-2xl uppercase text-red-400  p-5' > recipe not found </div>}


      </div>
      
      </div>


    </>
  )
}

export default Recipes
