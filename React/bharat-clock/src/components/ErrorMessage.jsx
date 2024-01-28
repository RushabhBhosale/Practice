import React from 'react'

const ErrorMessage = ({ items }) => {


   return (
      <>
         {items.length === 0 ? <h3 className='my-3'>No Tasks Added</h3> : null}
      </>
   )
}

export default ErrorMessage