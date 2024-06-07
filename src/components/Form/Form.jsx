import { useState } from 'react';

import './form.css';

function Form({ setUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (ev) => {
        ev.preventDefault()

        if(username === '' || password === ''){
            setError(true)
            return 
        }

        setError(false)

        setUser([username])
    }



  return (
    <div className='div'>
        <h1>Iniciar sesión</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input 
            type="text" 
            name='Username' 
            placeholder='Username'
            className='input'
            value={username} 
            onChange={ev => setUsername(ev.target.value)} />
        <input 
            type="password" 
            name='Password' 
            placeholder='Password'
            className='input'
            value={password} 
            onChange={ev => setPassword(ev.target.value)} />
        <button className='input btn'>Acceder</button>
      </form>
      <div className='error'>
        {error && <p>Todos los campos son obligatorios</p>}
      </div>
    </div>
  )
}

export default Form
