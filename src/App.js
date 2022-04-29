import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home.pages';
import Autos from './pages/autos/autos.pages';
import Clientes from './pages/clientes/clientes.pages';

function App() {
  return (

    <Router>
      <div className="margenes-gral">
        <h1 className="titulo-gral">
          Servicio Mecánico de Autos
        </h1>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/autos" element={<Autos/>} />
          <Route exact path="/clientes" element={<Clientes/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
