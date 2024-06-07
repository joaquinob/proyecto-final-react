import React, { useState } from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import Ingredients from '../Ingredients/Ingredients';
import Menu from '../Menu/Menu';

function Home({ user, setUser, ingredient }) {
  const [ing, setIng] = useState('');
  const [men, setMen] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleBack = () => {
    setUser([]);
  };

  function op_ingredients() {
    setIng('1');
    setMen('0');
  }

  function op_menu() {
    setIng('0');
    setMen('1');
  }

  const handleSelectIngredient = (ingredient) => {
    setSelectedIngredients((prev) => {
      if (prev.includes(ingredient)) {
        return prev.filter((item) => item !== ingredient);
      } else if (prev.length < 3) {
        return [...prev, ingredient];
      }
      return prev;
    });
  };

  return (
    <div className='div'>
      <nav className='nav'>
        <ul className='ul'>
          <li className='list'>
            <NavLink className='btn' onClick={op_ingredients}>Seleccionar platos</NavLink>
          </li>
          <li className='list'>
            <NavLink className='btn' onClick={op_menu}>Ver menú</NavLink>
          </li>
          <li className='list'>
            <button className='btn' onClick={handleBack}>Cerrar sesión</button>
          </li>
        </ul>
      </nav>
      <h1 className='welcome'> ¡Bienvenid@ {user}!</h1>
      <h2>¡Seleccione 3 platos para su menú!</h2>
      {ing === '1' && (
        <Ingredients
          ingredients={ingredient}
          selectedIngredients={selectedIngredients}
          onSelectIngredient={handleSelectIngredient}
        />
      )}
      {men === '1' && <Menu selectedIngredients={selectedIngredients} />}
    </div>
  );
}

export default Home;