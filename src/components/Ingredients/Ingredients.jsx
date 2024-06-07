import React from 'react';
import './ingredients.css'

function Ingredients({ ingredients }) {
  return (
    <div className='all'>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id} className='eachFood'>
          <img src={ingredient.img} alt={`Ingredient ${ingredient.id}`} className='img'/>
          <p className='name'> {ingredient.plate}</p>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;