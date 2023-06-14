import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/exames.css";
import ExamesLista from "../components/UI/ExamesLista";
import SectionExames from "../components/UI/SectionExames";

const Exames = () => {
  return (
    <Helmet title="Consulta">
      <section className="consulta_page-section">
        <Container>
          <Row>
            <Col className="section_costum">
              <SectionExames />
            </Col>
          </Row>
        </Container>

        <button className="btn costum_exames-btn ">
          <Link to="/contato">Examinar meu Pet</Link>
        </button>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="vacinas_section mb-5 text-center">
              <h6 className="costum_section-subtitle">Veja todos os</h6>
              <h2 className="section_title">Exames Disponíveis</h2>
            </Col>

            <ExamesLista />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Exames;
