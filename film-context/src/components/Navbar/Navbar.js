import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const Navbar = () => {

  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className='navbar navbar-dark bg-dark mb-4'>
      <span className='p-3 navbar-brand'>
        <h2>{user ? `Hola ${user.name}` : 'Bienvenidx'}</h2>
      </span>
      { user 
      ? <button 
          className='m-3 btn btn-primary'
          onClick={logout}
        >
          Cerrar Sesion
       </button> 
      : <button 
          className='m-3 btn btn-primary'
          onClick={login}  
        >
          Iniciar Sesion
       </button>
      }
    </nav>
  ) 
}

export default Navbar;