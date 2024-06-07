import React from 'react';
import './menu.css';

function Menu({ selectedIngredients }) {
  return (
    <div className='menu'>
      <h2>Ingredientes Seleccionados</h2>
      {selectedIngredients.length === 0 ? (
        <p>No hay ingredientes seleccionados</p>
      ) : (
        <div className='selectedIngredients'>
          {selectedIngredients.map((ingredient) => (
            <div key={ingredient.id} className='eachFood selected'>
              <img src={ingredient.img} alt={`Ingredient ${ingredient.id}`} className='img' />
              <p className='name'>{ingredient.plate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;