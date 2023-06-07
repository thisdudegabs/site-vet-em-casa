import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import ImgExames from "../assets/all-images/Animais/dog8.jpg";
import "../styles/exames.css";
import "../styles/section-exames.css";
import ExamesLista from "../components/UI/ExamesLista";

const Exames = () => {
  return (
    <Helmet title="Consulta">
      <section className="consulta_page-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="exames_section-img">
                <img src={ImgExames} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="section_exames-div">
                <h2 className="section_title">
                  Realizamos exames na sua casa!
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

              <button className="btn exames_btn mt-4">
                <Link to="/contato">Examinar meu Pet</Link>
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="vacinas_section mb-5 text-center">
              <h6 className="section_subtitle">Veja todos os</h6>
              <h2 className="section_title">Exames Disponíveis</h2>
            </Col>

            <ExamesLista />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Exames;
