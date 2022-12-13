import './App.css';
import Residente from './vistas/residente/Residente';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/residente' element={<Residente />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
