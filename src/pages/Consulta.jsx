import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/consulta.css";
import "../styles/section-consulta.css";
import TestimonialSlider from "../components/UI/TestimonialSlider";
import SectionConsulta from "../components/UI/SectionConsulta";
import SectionVantagensConsulta from "../components/UI/SectionVantagensConsulta";

const Consulta = () => {
  const customStyles = {
    /*const devido a erro na estilização do botão via css*/
    className: "btn-location",
    position: "relative",
    top: "-10vh",
    left: "65vw",
  };

  return (
    <Helmet title=" - Consulta">
      <section className="consulta_page-section custom_consulta">
        <Container>
          <Row>
            <SectionConsulta />
          </Row>
        </Container>

        <button
          className="btn contact_btn mt-4 custom_consulta-btn"
          style={{ ...customStyles }}
        >
          <Link to="/contato">Entrar em Contato</Link>
        </button>
      </section>

      <section className="curve-bg1">
        <Container>
          <Row>
            <Col lg="12" className="vantagens_section mb-5 text-center">
              <h6 className="costum_section-subtitle">Veja todas as</h6>
              <h2 className="costum_section-title">Vantagens </h2>
            </Col>

            <SectionVantagensConsulta />
          </Row>
        </Container>
      </section>

      <section className="testimonial-section">
        <Container>
          <Row>
            <Col lg="12" className="clientTitle mb-4 text-center">
              <h6 className="costum_section-subtitle">
                O que os clientes dizem
              </h6>
              <h2 className="costum_section-subtitle">Avaliações</h2>
            </Col>
            <Col lg="12">
              <TestimonialSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Consulta;
