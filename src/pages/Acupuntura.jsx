import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/acupuntura.css";
import TratamentosLista from "../components/UI/TratamentosLista";
import SectionAcupuntura from "../components/UI/SectionAcupuntura";

const Acupuntura = () => {
  return (
    <Helmet title="Consulta">
      <section className="consulta_page-section">
        <Container>
          <Row>
            <Col className="section_costum">
              <SectionAcupuntura />
              <button className="btn mt-4 costum_acupuntura-btn ">
                <Link to="/contato">Examinar meu Pet</Link>
              </button>
            </Col>
          </Row>
        </Container>
        <div></div>
      </section>

      <section className="curve-bg">
        <Container>
          <Row>
            <Col lg="12" className="vacinas_section mb-5 text-center">
              <h6 className="costum_section-subtitle">Veja mais</h6>
              <h2 className="section_title">Tratamentos Disponíveis</h2>
            </Col>

            <TratamentosLista />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Acupuntura;
