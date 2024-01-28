import React from 'react'
import Item from './Item'

const FoodItems = ({ items, handleDelete, handleUpdate }) => {

   return (
      <>
         {items.map((item, index) => (
            <Item
               foodItems={item}
               key={item}
               handleDelete={() => handleDelete(item)}
               handleUpdate={() => handleUpdate(index, item)}
               handleEdit={() => handleEdit(index)}
            />
         ))}
      </>
   )
}

export default FoodItems