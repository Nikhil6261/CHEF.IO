import React, { useContext } from 'react'
import { recipecontext } from '../../context/ReacipeContext'
import RecipeCard from '../component/RecipeCard'

const Home = () => {
  
  const { DishData} = useContext(recipecontext)

  return (
    
          <div className="w-full h-screen flex-wrap p-4 justify-evenly  bg-gray-800 ">

        {DishData.length != 0 ? <div> <RecipeCard />  </div> : "recipe not found"}


      </div>


  )
}

export default Home
