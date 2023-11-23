import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Config from './Config';
import Configurateur from './Configurateur';
import ConfigurateurPure from './ConfigurateurPure';
import ConfigurateurLegende from './ConfigurateurLegende';

function AppRouter() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/config" element={<Config />} />
          <Route path="/configurateur" element={<Configurateur />}>
          <Route path="/configurateur/:name" element={<ConfigurateurPure />} />
          <Route path="/configurateur/:name" element={<ConfigurateurLegende />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
