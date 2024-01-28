import React, { useState } from 'react'
import FoodItems from './FoodItems'
import ErrorMessage from './ErrorMessage'
import Container from './Container'
import FoodInput from './FoodInput'

const Map = () => {


   const [foodItems, setFooditems] = useState([])
   // const [textVal, setTextVal] = useState("Entered food item in the input")

   const handleChange = (event) => {
      if (event.key === 'Enter') {
         let newFoodItem = event.target.value;
         event.target.value = '';
         let newItems = [...foodItems, newFoodItem];
         setFooditems(newItems);
      }
   };

   console.log(foodItems)

   return (
         <Container>
            <h1>Todo</h1>
            <ul>
               <FoodInput handleChange={handleChange} />
               <ErrorMessage items={foodItems} />
               <FoodItems items={foodItems} />
            </ul>
         </Container>

   )
}

export default Map