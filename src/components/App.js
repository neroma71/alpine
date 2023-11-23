// App.js
import React from 'react';
import Logo from './Logo';
import Carrousel from './Carrousel';
import Presentation from './Presentation';
import Card from './Card';
import Menu from './Menu'; 
import '../App.css';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Logo />
          <Menu />
        </header>
        <Carrousel />
        <Presentation />
        <Card />
      </div>
    </>
  );
}

export default App;
