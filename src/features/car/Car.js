// Car.js
import { createSlice } from '@reduxjs/toolkit';
import pure from '../../assets/images/configurateur/modele/selection/pure.png';
import legende from '../../assets/images/configurateur/modele/selection/legende.png';

const initialState = {
  cars: [
    {
      name: "A110-pure",
      price:54700,
      modele: pure,
      description: "With its central ridges and hollowed-out sides, A110 proudly displays its kinship with the Berlinette. Drawn in a single stroke, the design effortlessly underpins the Alpine heritag",
    },
    {
      name: "A110-légende",
      price:58500,
      modele: legende,
      description: "With its central ridges and hollowed-out sides, A110 proudly displays its kinship with the Berlinette. Drawn in a single stroke, the design effortlessly underpins the Alpine heritag",
    },
  ],
  currentView: 0,
  currentColor: 0,
};

export const carSlice = createSlice({
  name: 'alpine',
  initialState,
  reducers: {
    setCurrentView: (state, action) => {
      state.currentView = action.payload;
    },
    setCurrentColor: (state, action) => {
      state.currentColor = action.payload;
    },
  },
});

export const { reducer: carReducer, actions } = carSlice;
