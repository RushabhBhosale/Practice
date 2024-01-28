import React from 'react'

const ButtonsContainer = () => {

   const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

   return (
      <div className="buttons-container d-flex align-content-center flex-wrap justify-content-center fw-bold">
         {buttonNames.map((button) => (
            <button key={button}>{button}</button>
         ))}
      </div>
   )
}

export default ButtonsContainer