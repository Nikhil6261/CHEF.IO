import React, { useContext, useEffect } from 'react'
import { recipecontext } from '../../context/ReacipeContext'
import UpdateForm from './UpdateForm'
import { useParams } from 'react-router-dom'

const UpdateCard = (props) => {

    const { DishData, setDishData } = useContext(recipecontext)
    
    const { id } = useParams();

    const recipe = DishData.find((r) => r.id == id)

    return (

        <div className=' flex' >            
            
                    <div  className=' bg-Green w-[60rem] h-[57rem] flex flex-col rounded-2xl m-4 ' >

                        <div className=' flex justify-center items-center w-[60rem] h-[25rem]'>
                            <img src={recipe.img} className='w-[25rem] h-[25rem]   rounded-2xl  ' />
                        </div>

                        <div className=' m-5 '>

                            <h1 className='text-3xl  m-5 bold text-mintGreen'>{recipe.title}</h1>

                            <h2 className=' text-xl  m-5  bold text-white'>{recipe.chef}</h2>

                            <p className='  text-white m-5'> {recipe.desc} </p>

                        </div>



                    </div>

            

            <UpdateForm RecipeID= { id} DishData={DishData} setDishData={setDishData} />

        </div>

    )
}

export default UpdateCard



