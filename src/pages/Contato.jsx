import React from "react";

import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/contato.css";

import TopoDePágina from "../components/UI/TopoDePágina";
import SectionContato from "../components/UI/SectionContato";

const Contato = () => {
  return (
    <Helmet title="Contato">
      <TopoDePágina title="Nos Contate!" />
      <section>
        <Container>
          <Row>
            <SectionContato />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contato;
