import React, { useState } from 'react';
import FoodInput from './FoodInput';
import Container from './Container';
import FoodItems from './FoodItems';

const TodoList = () => {
  const [foodItems, setFoodItems] = useState([]);

  const handleChange = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItem = [newFoodItem, ...foodItems];
      setFoodItems(newItem);
    }
  };

  const handleDelete = (deleteItem) => {
    const newFood = foodItems.filter((item) => item !== deleteItem);
    setFoodItems(newFood);
  };

  return (
    <Container>
      <FoodInput handleChange={handleChange} />
      <FoodItems
        items={foodItems}
        handleDelete={handleDelete}
      />
    </Container>
  );
};

export default TodoList;
