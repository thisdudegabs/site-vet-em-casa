import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Consulta from "../pages/Consulta";
import Contato from "../pages/Contato";
import Especialidades from "../pages/Especialidades";
import Exames from "../pages/Exames";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Vacinas from "../pages/Vacinas";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Consulta />} />
      <Route path="/" element={<Contato />} />
      <Route path="/" element={<Especialidades />} />
      <Route path="/" element={<Exames />} />
      <Route path="/" element={<Sobre />} />
      <Route path="/" element={<Vacinas />} />
    </Routes>
  );
};

export default Routers;
