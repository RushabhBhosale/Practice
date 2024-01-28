import React, { useState } from 'react';
import FoodInput from './FoodInput';
import Container from './Container';
import FoodItems from './FoodItems';

const TodoList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [editFoodItem, setEditFoodItem] = useState(null);

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
    setEditFoodItem(null);
  };

  const handleUpdate = (index, updateItem) => {
    const updatedList = [...foodItems]; // Corrected from FoodItems to foodItems
    updatedList[index] = updateItem;
    setFoodItems(updatedList);
    setEditFoodItem(null); // Set editFoodItem to null after handling the edit action
  };

  const handleEdit = (index) => {
    setEditFoodItem(index);
  };

  return (
    <Container>
      <FoodInput handleChange={handleChange} />
      <FoodItems
        items={foodItems}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
      />
    </Container>
  );
};

export default TodoList;
