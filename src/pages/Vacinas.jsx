import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/vacinas.css";

import VacinasLista from "../components/UI/VacinasLista";
import SectionVacinas from "../components/UI/SectionVacinas";

const Vacinas = () => {
  return (
    <Helmet title=" - Vacinas">
      <section className="vacina_page-section">
        <Container>
          <Row>
            <SectionVacinas />
          </Row>
        </Container>

        <button
          className="btn costum_vacina-btn"
          style={{ top: "-12vh", left: "14vw" }}
        >
          <Link to="/contato">Cuidar do meu Pet</Link>
        </button>
      </section>

      <section className="curve-bg">
        <Container>
          <Row>
            <Col lg="12" className="vacinas_section mb-5 text-center">
              <h6 className="section_subtitle custom_margin_top">
                Veja todas as
              </h6>
              <h2 className="section_title">Vacinas Aplicáveis</h2>
            </Col>

            <VacinasLista />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Vacinas;
