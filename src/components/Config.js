import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import Menu from './Menu'; 
import { Link } from 'react-router-dom';

const Config = ({ cars }) => {
  return (
    <>
      <div className="modeles">
        <header>
          <Logo />
          <Menu />
        </header>
        {cars.map((car, index) => (
          <div className="colcard" key={index}>
            <h3>{car.name}</h3>
            <p>{car.price} €</p>
            <img src={car.modele} alt={`Image ${car.name}`} />
            <p>{car.description}</p>
            <Link to={`/configurateur/${encodeURIComponent(car.name.toLowerCase())}`}>Customiser</Link>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cars: state.alpine.cars,
});

export default connect(mapStateToProps)(Config);
