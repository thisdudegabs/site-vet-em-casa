import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Consulta from "../pages/Consulta";
import Contato from "../pages/Contato";
import Especialidades from "../pages/Especialidades";
import Acupuntura from "../pages/Acupuntura";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Vacinas from "../pages/Vacinas";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/consulta" element={<Consulta />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/especialidades" element={<Especialidades />} />
      <Route path="/acupuntura" element={<Acupuntura />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/vacinas" element={<Vacinas />} />
    </Routes>
  );
};

export default Routers;
