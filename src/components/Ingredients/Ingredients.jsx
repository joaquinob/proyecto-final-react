import React from 'react';

function Ingredients({ ingredients }) {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <img src={ingredient.img} alt={`Ingredient ${ingredient.id}`} />
          <p>Ingrediente {ingredient.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;