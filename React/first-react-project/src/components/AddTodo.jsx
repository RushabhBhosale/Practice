import React from 'react'



const AddTodo = () => {
   return (
      <div className="container text-center">
         <div className="row">
            <div className="col-6 fw-bold fs-5">
               <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div className="col-4 fw-bold fs-5">
               <input type="date" name="" id="" />
            </div>
            <div className="col-2 fw-bold fs-5">
               <button type="button" style={{minWidth: '90px'}} className="btn btn-success my-1">Add</button>
            </div>
         </div>
      </div>
   )
}

export default AddTodo