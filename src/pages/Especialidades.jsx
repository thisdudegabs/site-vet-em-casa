import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/especialidades.css";
import "../styles/card-time.css";

import CardTime from "../components/UI/CardTime";
import SectionEspecialidades from "../components/UI/SectionEspecialidades";

import TrabalheConosco from "../components/UI/TrabalheConosco";

const Especialidades = () => {
  const [showCardTime, setShowCardTime] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCardTime(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    import("../styles/especialidades.css");
  }, []);

  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle custom_top">Especialistas</h6>
              <h2 className="section_title">Nosso Time</h2>
              <CardTime showCardTime={showCardTime} />
            </Col>
          </Row>
        </Container>
      </section>

      <TrabalheConosco />
    </Helmet>
  );
};

export default Especialidades;
