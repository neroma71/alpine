import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <nav className="menu_principal">
        <ul>
          <li><Link to="/config">MODELES</Link></li>
          <li><Link to="/">FORMULE 1</Link></li>
          <li><Link to="/">RACING</Link></li>
          <li><Link to="/">UNIVERS ALPINE</Link></li>
          <li><Link to="/">BOUTIQUE</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;
