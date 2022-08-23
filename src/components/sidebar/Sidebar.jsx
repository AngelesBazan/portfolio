import React from 'react';
import Links from './Links';
import TextTyping from './TextTyping';
import "../../styles/sidebar/sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='perfil'>
        <div className='avatar'></div>
        <div className='name'>ANGELES BAZAN</div>
        <TextTyping />
      </div>
      <div className='enlaces'>
        <Links name="Home" path="/"/>
        <Links name="Sobre mí" path="/SobreMi"/>
        <Links name="Portafolio" path="/Portafolio"/>
        <Links name="Contacto" path="/Contacto"/>
      </div>
      <div className='copy'>&copy; 2022 Todos los derechos reservados</div>
    </div>
  )
}

export default Sidebar