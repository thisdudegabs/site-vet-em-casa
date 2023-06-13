import React from "react";

import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/contato.css";

import TopoDePágina from "../components/UI/TopoDePágina";

const socialLinks = [
  {
    url: "#",
    icon: "ri-instagram-line",
  },
];

const Contato = () => {
  return (
    <Helmet title="Contato">
      <TopoDePágina title="Nos Contate!" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7" className="contact_us">
              <h6 className="fw-bold mb-3">Fale Conosco :)</h6>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contato;
