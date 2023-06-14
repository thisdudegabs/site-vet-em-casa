import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container } from "reactstrap";

import HeroSlider from "../components/UI/HeroSlider";
import SectionConsulta from "../components/UI/SectionConsulta";
import SectionVacinas from "../components/UI/SectionVacinas";
import SectionAcupuntura from "../components/UI/SectionAcupuntura";
import SectionEspecialidades from "../components/UI/SectionEspecialidades";

import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/animation.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Helmet title="Home">
      {/* ========== parte do hero ============== */}

      <section className="p-0 hero_slider-section">
        <HeroSlider />
      </section>

      {/* ========== parte sobre Consulta ============== */}
      <section className="section-consulta" data-aos="fade-down">
        <Container>
          <SectionConsulta />
        </Container>
      </section>

      {/* ========== parte sobre Vacinas ============== */}
      <section className="section-vacinas" data-aos="fade-down">
        <Container>
          <SectionVacinas />
        </Container>
      </section>

      {/* ========== parte sobre Exames ============== */}
      <section className="section-exames" data-aos="fade-down">
        <Container>
          <SectionAcupuntura />
        </Container>
      </section>

      {/* ========== parte sobre Especialidades ============== */}
      <section className="section-especialidades" data-aos="fade-down">
        <Container>
          <SectionEspecialidades />
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
