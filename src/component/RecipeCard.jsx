import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { recipecontext } from '../../context/ReacipeContext'



const RecipeCard = () => {

    const { DishData } = useContext(recipecontext)

    const Navigate = useNavigate()

    return (

        <div className=' flex  p-5 flex-wrap   justify-self-auto'  >
            {
                DishData.map((recipe, index) => {


                    return <div key={index} className=' border-1 text-Plum w-[22rem] ml-[2.5rem] overflow-hidden
                      h-[35rem] flex flex-col rounded-2xl m-4 ' >

                        <div className=' w-[22rem] h-[22rem]'>

                            <img src={recipe.img} className=' w-[22rem] h-[22rem]  items-center   object-cover  ' />
                        </div>


                        <div className=' backdrop-blur-2xl h-[15rem] bg-transparent bg-gradient-to-b from-sky-100 to-sky-800  '>

                            <div className='   ml-5 mt-2 '>
                                <div className=' flex items-end gap-2 '>

                                    <h1 className='text-3xl  text-Green bold text-mintGreen'>{recipe.title}</h1>

                                    <h2 className=' text-xl   text-Green bold '> by {recipe.chef}</h2>
                                </div>

                                {recipe.desc?.length > 0 &&
                                    (<p className='text-Plum mt-2  leading-5'> {recipe.desc.slice(0, 100)} <span className='text-sky-50'>... more</span> </p>
                                    )}
                            </div>

                            <div className=' flex p-3 gap-2'>


                                <button onClick={() => Navigate(`/recipes/create-recipe/${recipe.id}`)} className=' mt-4 w-[10rem] rounded h-[3rem] bg-sky-100 text-Plum  hover:bg-gradient-to-b from-White to-sky-200  hover:scale-105  transition-all ease-in-out duration-500 '> Update</button>

                                <button onClick={() => Navigate(`/recipes/create-recipe/${recipe.id}`)} className='bg-mintGreen mt-4 w-[10rem] border-2 backdrop-blur-2xl bg-emerald-200  rounded h-[3rem]   hover:bg-gradient-to-b from-White to-emerald-200  hover:scale-105  transition-all ease-in-out duration-500 '> Favorites </button>

                            </div>

                        </div>


                    </div>
                })
            }


        </div>

    )

}

export default RecipeCard