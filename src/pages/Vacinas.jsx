import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/vacinas.css";

import ImgVacina from "../assets/all-images/Animais/dog6.jpg";
import VacinasLista from "../components/UI/VacinasLista";

const Vacinas = () => {
  return (
    <Helmet title="Vacinas">
      <section className="vacina_page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="section_vacina-div">
                <h2 className="section_title text-center">
                  Por que vacinar meu Pet?
                </h2>
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

              <button className="btn vacina_btn mt-4">
                <Link to="/contato">Cuidar do meu Pet</Link>
              </button>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="consulta_page-img">
                <img src={ImgVacina} alt="" className="w-100 rounded-3" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="vacinas_section mb-5 text-center">
              <h6 className="section_subtitle">Veja todas as</h6>
              <h2 className="section_title">Vacinas Aplicáveis</h2>
            </Col>

            <VacinasLista />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Vacinas;
