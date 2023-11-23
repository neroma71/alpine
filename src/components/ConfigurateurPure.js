import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { actions } from '../features/car/Car';
import { useDispatch, useSelector } from 'react-redux';

import blanc1 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard1.jpg';
import blanc2 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard2.jpg';
import blanc3 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard3.jpg';
import blanc4 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard4.jpg';

import bleu1 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard1.jpg';
import bleu2 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard2.jpg';
import bleu3 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard3.jpg';
import bleu4 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard4.jpg';

import noir1 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard1.jpg';
import noir2 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard2.jpg';
import noir3 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard3.jpg';
import noir4 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard4.jpg';

import couleur1 from '../assets/images/configurateur/couleurs/selection/blanc.jpg';
import couleur2 from '../assets/images/configurateur/couleurs/selection/bleu.jpg';
import couleur3 from '../assets/images/configurateur/couleurs/selection/noir.jpg';

function ConfigurateurPure() {
  const { name } = useParams();
  const cars = useSelector((state) => state.alpine.cars);

  const currentView = useSelector((state) => state.alpine.currentView);
  const currentColor = useSelector((state) => state.alpine.currentColor);
  const dispatch = useDispatch();
  const totalViews = 4;


  const handleNextClick = () => {
    dispatch(actions.setCurrentView((currentView + 1) % totalViews));
  };

  const handlePrevClick = () => {
    dispatch(actions.setCurrentView((currentView - 1 + totalViews) % totalViews));
  };

  const handleColorClick = (colorIndex) => {
    dispatch(actions.setCurrentColor(colorIndex));
  };

  const imagesByColor = [
    [blanc1, blanc2, blanc3, blanc4],
    [bleu1, bleu2, bleu3, bleu4],
    [noir1, noir2, noir3, noir4],
  ];
  const carrosserieImages = [couleur1, couleur2, couleur3];

  return (
    <>
      <div className="configurateur-container">
        <h2>{name}</h2>
        <img src={imagesByColor[currentColor][currentView]} alt={`View ${currentView}`} />
        <div className="slide_btn">
          <button onClick={handlePrevClick} className="prev">
            Précédent
          </button>
          <button onClick={handleNextClick} className="next">
            Suivant
          </button>
        </div>
      </div>
      <div className="couleur">
        {carrosserieImages.map((carrosserie, colorIndex) => (
          <img
            key={colorIndex}
            src={carrosserie} 
            alt={`Carrosserie ${colorIndex + 1}`}
            onClick={() => handleColorClick(colorIndex)}
          />
        ))}
      </div>
    </>
  );
}

export default ConfigurateurPure;
