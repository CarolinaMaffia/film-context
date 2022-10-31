import React from 'react';

const Navbar = () => {

  const user = {
    name: 'Matu'
  }

  return (
    <nav className='navbar navbar-dark bg-dark mb-4'>
      <span className='p-3 navbar-brand'>
        <h2>{user ? `Hola ${user.name}` : 'Bienvenidx'}</h2>
      </span>
      { user 
      ? <button className='m-3 btn btn-primary'>
          Cerrar Sesion
       </button> 
      : <button className='m-3 btn btn-primary'>
          Iniciar Sesion
       </button>
      }
    </nav>
  ) 
}

export default Navbar;