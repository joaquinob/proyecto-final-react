import React from 'react';
import './ingredients.css';

function Ingredients({ ingredients, selectedIngredients, onSelectIngredient }) {
  return (
    <div className='all'>
      {ingredients.map((ingredient) => (
        <div
          key={ingredient.id}
          className={`eachFood ${selectedIngredients.includes(ingredient) ? 'selected' : ''}`}
          onClick={() => onSelectIngredient(ingredient)}
        >
          <img src={ingredient.img} alt={`Ingredient ${ingredient.id}`} className='img' />
          <p className='name'> {ingredient.plate}</p>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;