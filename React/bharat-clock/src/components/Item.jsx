import React from 'react'

const Item = ({ foodItem, bought ,handleBuyButton }) => {

   return (
         <li className={`fs-2 my-3 text-black list-group-item ${bought && "active"}`}>
            <span>{foodItem}</span>
            <button onClick={handleBuyButton} className='btn btn-warning mx-4'>Done</button>
         </li>
   )
}

export default Item