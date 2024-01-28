import React from 'react'

const FoodInput = ({ handleChange }) => {
   return (
      <>
         <input type="text" onKeyDown={handleChange} className='px-5 py-2' />
      </>
   )
}

export default FoodInput