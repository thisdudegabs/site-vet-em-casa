import React from "react";

import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

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
