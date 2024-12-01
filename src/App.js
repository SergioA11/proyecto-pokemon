import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';  
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Items from './pages/Items';
import Berries from './pages/Berries'; 
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/items" element={<Items />} />
          <Route path="/berries" element={<Berries />} /> {/* Añadimos la nueva ruta */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
