import './App.css';
import Responsable from './vistas/residentes/responsable/Responsable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/residente' element={<Responsable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
