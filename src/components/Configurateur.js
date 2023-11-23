import React from 'react';
import ConfigurateurPure from './ConfigurateurPure';
import ConfigurateurLegende from './ConfigurateurLegende';
import { useParams } from 'react-router';
import Logo from './Logo';
import Menu from './Menu'; 

function Configurateur() {
  const { name } = useParams()
  return (
    <div className="configurateur">
    <header>
          <Logo />
          <Menu />
      </header>
    <div>
      {
        name === "a110-pure"? <ConfigurateurPure /> :  <ConfigurateurLegende /> 
      }
    </div>
    </div>
  )
}

export default Configurateur
