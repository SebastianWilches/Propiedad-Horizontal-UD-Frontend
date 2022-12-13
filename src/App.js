import './App.css';
import Residente from './vistas/residente/Residente';
import Responsable from './vistas/responsable/Responsable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/residente' element={<Residente />} />
          <Route path='/responsable' element={<Responsable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
