import React from 'react'

const TodoItem = ({todoDate, todoName}) => {
   return (
      <div className="container text-center my-2">
         <div className="row">
            <div className="col-6 fw-bold fs-5">
               {todoName}
            </div>
            <div className="col-4 fw-bold fs-5">
               {todoDate}
            </div>
            <div className="col-2 fw-bold fs-5">
               <button type="button" style={{minWidth: '90px'}} className="btn btn-danger">Delete</button>
            </div>
         </div>
      </div>
   )
}

export default TodoItem