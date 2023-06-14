import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/consulta.css";
import "../styles/section-consulta.css";
import TestimonialSlider from "../components/UI/TestimonialSlider";
import SectionConsulta from "../components/UI/SectionConsulta";

const Consulta = () => {
  const customStyles = {
    position: "relative",
    top: "-100px",
    left: "990px",
  };

  return (
    <Helmet title="Consulta">
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

      <section className="testimonial-section">
        <Container>
          <Row>
            <Col lg="12" className="clientTitle mb-4 text-center">
              <h6 className="section_subtitle">O que os clientes dizem</h6>
              <h2 className="section_title">Avaliações</h2>
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
