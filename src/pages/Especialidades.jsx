import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/especialidades.css";
import "../styles/card-time.css";

import CardTime from "../components/UI/CardTime";

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
    <Helmet title=" - Especialidades">
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-2 mt-5 text-center">
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
