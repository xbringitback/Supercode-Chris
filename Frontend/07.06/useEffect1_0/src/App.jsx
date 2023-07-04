import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CarList from './components/CarList'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/CarList' element={<CarList />} />
          <Route path="/" element={<Cars />} />
          <Route path="/Data/:carid" element={<CarDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
