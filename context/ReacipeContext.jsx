import { createContext, useState } from 'react'

export const recipecontext = createContext(null)

const ReacipeContext = (props) => {


  const [DishData, setDishData] = useState([
  
    {
    title: 'Pasta',
    img: 'https://www.eatingwell.com/thmb/KS-_UNyR5HVAfleFPgo2BCEIE6g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-CarrotSaladWithLemonVinaigrette-beauty-33-7440b2f40d2d4bfa98110b8582287f00.jpg',
    id:'1sdasadd',
    chef: 'nikhil',
    inst:'vegetables, fruits, meat, seafood, grains, dairy, spices, herbs, and nuts. ',
    desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptas, sunt fugit recusandae eos mollitia officia voluptatum ipsum commodi cupiditate sequi ',
  },
  {
    title: 'chiken',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB87rn87EQhmxevapIa2qTBEAe_WKs_et6Gg&s',
    id:'2sadsd',
    chef: 'aman',
    inst:'chiken , vegetables, fruits, meat, seafood, grains, dairy, spices, herbs, and nuts. ',
    desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptas, sunt fugit recusandae eos mollitia officia voluptatum ipsum commodi cupiditate sequi ',
  },

])

  return (

    <recipecontext.Provider value={{ DishData, setDishData }}>
      {props.children}
    </recipecontext.Provider>

  )
}

export default ReacipeContext

