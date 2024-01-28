import React from 'react'

const FoodInput = ({ handleChange }) => {

   return (
      <div>
         <input type="text" placeholder='Enter Food Items' className='w-100 p-2 my-3' onKeyDown={handleChange} />
      </div>
   )
}

export default FoodInput