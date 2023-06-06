import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import Oeffnungszeiten from './pages/Oeffnungszeiten';
import Galerie from './pages/Galerie';
import Speisekarte from './pages/Speisekarte';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
          path='/'
          element={ <Home text="Home"/>} />

          <Route
          path='/Kontakt'
          element={ <Kontakt text="Kontakt" />} />

          <Route
          path='/Oeffnungszeiten'
          element={ <Oeffnungszeiten text="Öffnungszeiten" />} />

          <Route
          path='/Galerie'
          element={ <Galerie text="Galerie" />} />

          <Route
          path='/Speisekarte'
          element={ <Speisekarte text="Speisekarte" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
