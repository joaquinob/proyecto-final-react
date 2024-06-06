import React, { useState } from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import { Ingredients } from '../Ingredients/Ingredients'
import { Menu } from '../Menu/Menu'



function Home({user, setUser}) {


    const [ing, setIng] = useState('')
    const [men, setMen] = useState('')

    const handleBack = () => {
        setUser([])
    }

    function op_ingredients(){
    setIng('1');
    setMen('0')
    }

    function op_menu(){
    setIng('0');
    setMen('1')
    }

  return (
    <>
        <nav className='nav'>
            <ul className='ul'>
                <li className='list'>
                    <NavLink className='btn' onClick={op_ingredients}>Seleccionar ingredientes</NavLink>
                </li>
                <li className='list'>
                    <NavLink className='btn' onClick={op_menu}>Menú</NavLink>
                </li>
                <li className='list'>
                    <button className='btn' onClick={handleBack}>Cerrar sesión</button>
                </li>
            </ul>
        </nav>
        <h1> ¡Bienvenido {user}!</h1>
      
        {ing === '1' && <Ingredients />}
        {men === '1' && <Menu />}
    </>
  )
}

export default Home
