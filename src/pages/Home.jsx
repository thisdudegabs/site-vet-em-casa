import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import HeroSlider from "../components/UI/HeroSlider";
import SectionConsulta from "../components/UI/SectionConsulta";
import SectionVacinas from "../components/UI/SectionVacinas";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ========== parte do hero ============== */}

      <section className="p-0 hero_slider-section">
        <HeroSlider />
      </section>

      {/* ========== parte sobre Consulta ============== */}
      <SectionConsulta />

      {/* ========== parte sobre Vacinas ============== */}
      <SectionVacinas />

      {/* ========== parte sobre Vacinas ============== */}
    </Helmet>
  );
};

export default Home;
