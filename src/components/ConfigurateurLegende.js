import React from 'react';
import { useParams } from 'react-router-dom';
import { actions } from '../features/car/Car';
import { useDispatch, useSelector } from 'react-redux';

import blanclegende1 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg';
import blanclegende2 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg';
import blanclegende3 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg';
import blanclegende4 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg';

import bleulegende1 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg';
import bleulegende2 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg';
import bleulegende3 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg';
import bleulegende4 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg';

import noirlegende1 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg';
import noirlegende2 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg';
import noirlegende3 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg';
import noirlegende4 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg';

import couleur1 from '../assets/images/configurateur/couleurs/selection/blanc.jpg';
import couleur2 from '../assets/images/configurateur/couleurs/selection/bleu.jpg';
import couleur3 from '../assets/images/configurateur/couleurs/selection/noir.jpg';

function ConfigurateurLegende() {
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
    [blanclegende1, blanclegende2, blanclegende3, blanclegende4],
    [bleulegende1, bleulegende2, bleulegende3, bleulegende4],
    [noirlegende1, noirlegende2, noirlegende3, noirlegende4],
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

export default ConfigurateurLegende;
