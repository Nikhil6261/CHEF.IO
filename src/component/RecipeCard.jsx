import React, { useContext } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { recipecontext } from '../../context/ReacipeContext'



const RecipeCard = () => {

    const { DishData } = useContext(recipecontext)

 const Navigate = useNavigate()

    return (

        <div className=' flex p-5 flex-wrap   justify-self-auto'  >
            {
                DishData.map((recipe, index) => {


                    return <div key={index} className=' bg-Green w-[22rem] ml-[2.5rem]  h-[35rem] flex flex-col rounded-2xl m-4 ' >


                        <img src={recipe.img} className='w-[19rem] h-[19rem] items-center  ml-[1.5rem] m-2 rounded-2xl' />

                        <div className='  ml-5 mt-2'>

                            <h1 className='text-3xl   bold text-mintGreen'>{recipe.title}</h1>

                            <h2 className=' text-xl    bold text-white'>{recipe.chef}</h2>

  {recipe.desc?.length > 0 && 
  ( <p className='text-white'> {recipe.desc.slice(0, 100)} <span className='text-blue-400'>... more</span> </p>
            )}
                        </div>


<div className=' flex p-3 gap-2'>

                        <button onClick={()=> Navigate(`/recipes/create-recipe/${recipe.id}`) } className='bg-mintGreen mt-4 w-[10rem] rounded h-[3rem]'> Update</button>
                      
                        <button onClick={()=> Navigate(`/recipes/create-recipe/${recipe.id}`) } className='bg-mintGreen mt-4 w-[10rem] rounded h-[3rem]'> Favorites </button>

</div>

                    </div>
                })
            }


        </div>

    )

}

export default RecipeCard