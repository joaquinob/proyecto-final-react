import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'

function Home({user, setUser}) {

    const handleBack = () => {
        setUser([])
    }
  return (
    <>
        <nav className='nav'>
            <ul className='ul'>
                <li className='list'>
                    <button className='btn'>Seleccionar ingredientes</button>
                </li>
                <li className='list'>
                    <button className='btn'>Menú</button>
                </li>
                <li className='list'>
                    <button className='btn' onClick={handleBack}>Cerrar sesión</button>
                </li>
            </ul>
        </nav>
        <h1> ¡Bienvenido {user}!</h1>
      
    </>
  )
}

export default Home
