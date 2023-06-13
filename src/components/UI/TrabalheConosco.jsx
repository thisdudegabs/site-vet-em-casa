import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/trabalhe-conosco.css?v=1.0.0";

import trabalheImg from "../../assets/all-images/Animais/trabalhedog.png";

const TrabalheConosco = () => {
  return (
    <section className="trabalhe_conosco">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="trabalhe_conosco-img">
            <img
              src={trabalheImg}
              alt="cachorro-trabalhe-conosco"
              className="w-100"
            />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section_title trabalhe_conosco-title">
              Quer cuidar dos animais conosco?
            </h2>

            <button className="btn trabalhe_conosco-btn mt-4">
              Nos contate!
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrabalheConosco;
