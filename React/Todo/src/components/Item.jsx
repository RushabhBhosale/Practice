import React from 'react'

const Item = ({foodItems, handleDelete, handleUpdate, handleEdit}) => {
  return (
    <li className='p-3' style={{listStyle: 'none'}}>
      <span className='h3 mx-4'>{foodItems}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  )
}

export default Item