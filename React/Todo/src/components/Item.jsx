import React, { useState } from 'react'
import './item.css'

const Item = ({foodItems, handleDelete}) => {

  const [done, handleDone] = useState(false);

  return (
    <li className='p-3' style={{listStyle: 'none'}}>
      <span className={`h3 mx-4 ${done}`}>{foodItems}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => handleDone(!done)}>Done</button>
    </li>
  )
}

export default Item