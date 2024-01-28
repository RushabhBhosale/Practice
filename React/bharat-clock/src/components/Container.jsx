import React from 'react'

const Container = ({ children }) => {
   return (
      <div className='w-50 border border-2 border-success p-3 m-3 rounded-4'>{children}</div>
   )
}

export default Container