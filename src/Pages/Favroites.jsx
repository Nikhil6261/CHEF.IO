import React, { useContext } from 'react'
import ReacipeContext from '../../context/ReacipeContext'

const Favroites = () => {

const {fav} = useContext(ReacipeContext)

console.log(fav);

  return (
    <div>
      
      <h1>fav</h1>
    </div>
  )
}

export default Favroites
