import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateForm = (props) => {

    const { register, handleSubmit, reset } = useForm()
    const { DishData, setDishData, RecipeID } = props


    const Navigate = useNavigate()

    //update funtion   
    function submitHandle(update) {

        const index = DishData.findIndex((e) => e.id == RecipeID)

        const copydata = [...DishData]
        copydata[index] = { ...copydata[index], ...update }

        setDishData(copydata)
        Navigate('/recipes')
    }

    function DeleteHandle(update) {

        const FilterDish = DishData.filter((e) => e.id !== RecipeID)
        setDishData(FilterDish)

        toast.success('recipe deleted')
        Navigate('/recipes')
    }




    return (

        <div className=' w-full h-screen flex-col flex items-center justify-center bg-gray-800'>

            <h1 className=' text-Sand text-3xl uppercase mb-8'> make u dish </h1>

            <form onSubmit={handleSubmit(submitHandle)}
                className=' w-[50%] h-[40rem] flex flex-col  items-center justify-evenly  shadow-2xl' >

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

                <div className=' flex '>

                    <button className=' submit uppercase shadow-md mr-4  shadow-gray-700 rounded w-[10rem] h-[3rem] '> update </button>
                    <button onClick={DeleteHandle} className=' delete ml-4 uppercase shadow-md  shadow-gray-700 rounded w-[10rem] h-[3rem] '> Delete </button>
                </div>

            </form>

        </div>
    )


}

export default UpdateForm
