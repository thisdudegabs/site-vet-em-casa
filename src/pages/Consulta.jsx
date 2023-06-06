import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import ImgConsulta from "../assets/all-images/Animais/dog7.jpg";
import "../styles/consulta.css";
import "../styles/section-consulta.css";
import TestimonialSlider from "../components/UI/TestimonialSlider";

const Consulta = () => {
  return (
    <Helmet title="Consulta">
      <section className="consulta_page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="consulta_page-img">
                <img src={ImgConsulta} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="section_consulta-content">
                <h2 className="section_title">Seu Pet precisa de consulta?</h2>
                <p className="description">
                  Incididunt enim ea sit commodo. Enim anim non reprehenderit
                  minim laborum cupidatat. Reprehenderit voluptate reprehenderit
                  tempor tempor pariatur eu. Qui culpa Lorem reprehenderit culpa
                  occaecat ut. In commodo minim non adipisicing pariatur
                  deserunt eiusmod do commodo consequat tempor culpa. Deserunt
                  mollit deserunt labore aliqua laborum. Culpa commodo culpa
                  excepteur ut consequat dolor amet magna adipisicing.
                  Reprehenderit fugiat dolore ex esse dolor reprehenderit esse.
                  Id tempor veniam consectetur aute dolor adipisicing laborum.
                  Eiusmod cupidatat deserunt ipsum labore enim anim cupidatat
                  proident amet esse eiusmod velit excepteur. Incididunt enim ea
                  sit commodo. Enim anim non reprehenderit minim laborum
                  cupidatat. Reprehenderit voluptate reprehenderit tempor tempor
                  pariatur eu. Qui culpa Lorem reprehenderit culpa occaecat ut.
                  In commodo minim non adipisicing pariatur deserunt eiusmod do
                  commodo consequat tempor culpa.
                </p>
              </div>

              <button className="btn contact_btn mt-4">
                <Link to="/contato">Entrar em Contato</Link>
              </button>
            </Col>
          </Row>
        </Container>
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
