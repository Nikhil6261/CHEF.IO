import React, { useContext, useEffect } from 'react'
import { recipecontext } from '../../context/ReacipeContext'
import UpdateForm from './UpdateForm'
import { useParams } from 'react-router-dom'

const UpdateCard = (props) => {

    const { DishData, setDishData } = useContext(recipecontext)

    const { id } = useParams();

    const recipe = DishData.find((r) => r.id == id)

    const inst = recipe.inst.split(',')





    return (

        <div className=' flex bg-sky-100  ' >

            <div className='p-5  bg-gray-800 w-1/2 mt-[6.3rem] h-[57rem] flex flex-col rounded-2xl m-4 ' >

                <div className=' flex '>

                    <div className=' flex  w-[30rem] h-[30rem]'>

                        <img src={recipe.img} className='w-[30rem] ml-3 mt-3  h-[30rem]   rounded-2xl  ' />
                    </div>

                    <div className=' inst m-[1rem] '>{

                            inst.map((element, index )=> {
                                
                               return <li key={index} className='text-xl font-semibold dm-serif-text-regular w-[20rem] text-White  m-5 bold text-mintGreen'>{ element}</li>
                            })
                            
                            }
                    </div>

                </div>



                <h1 className=' dm-serif-text-regular text-4xl  py-5 pl-5 bold text-white '>{recipe.title}</h1>

                <h2 className=' dm-serif-text-regular text-2xl pl-5  font-semibold   text-white '>{recipe.chef}</h2>
                <p className=' dm-serif-text-regular w-[30rem]  text-white m-5'> {recipe.desc} </p>

            </div>



            <UpdateForm RecipeID={id} DishData={DishData} setDishData={setDishData} />

        </div>

    )
}

export default UpdateCard



