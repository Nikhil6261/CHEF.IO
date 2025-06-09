import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

import { recipecontext } from '../../context/ReacipeContext'

const Create = () => {

  const { DishData, setDishData } = useContext(recipecontext)

  const Navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()


  function submitHandle(recipe) {
    recipe.id = nanoid()

    setDishData([...DishData, recipe])

    toast.success("dish regester")
    reset()
    Navigate(-1)
  }



  return (

    <div className=' w-full h-screen flex-col flex items-center justify-center  bg-gradient-to-b from-random to-gray-800 '>

      <h1 className=' text-Sand text-3xl uppercase mb-8'> make u dish </h1>

      <form onSubmit={handleSubmit(submitHandle)}
        className=' w-[40%] h-[40rem] flex flex-col  items-center justify-evenly text-White bg-gray-800   shadow-2xl' >

        <input
          className='w-[32rem]  p-2 text-xl rounded  border-b  text-Stone'
          {...register('title')}
          placeholder='Title'
          type="text"
        />
        <input
          className='w-[32rem]  p-2 text-xl rounded  border-b  text-Stone'
          {...register('img')}
          placeholder='IMG'
          type="url"
        />

        <input
          className='w-[32rem]  p-2 text-xl rounded  border-b  text-Stone'
          {...register('chef')}
          placeholder='Chef'
          type="text"
        />


        <input
          className='w-[32rem]  p-2 text-xl  rounded  border-b  text-Stone'
          {...register('desc')}
          placeholder='Decs'
          type="text"
        />

        <input
          className='w-[32rem]  p-2 text-xl  rounded  border-b  text-Stone'
          {...register('inst')}
          placeholder='inst'
          type="text"
        />

        <textarea className='border w-[32rem] '>


        </textarea>

        <button className=' submit uppercase shadow-md  shadow-gray-700 rounded w-[10rem] h-[3rem] '> submit </button>

      </form>

    </div>
  )
}

export default Create
