import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/especialidades.css";
import "../styles/card-time.css";

import ImgEspeci from "../assets/all-images/Animais/dog4.jpg";
import CardTime from "../components/UI/CardTime";

import TrabalheConosco from "../components/UI/TrabalheConosco";

const Especialidades = () => {
  const [showCardTime, setShowCardTime] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCardTime(true);
    }, 4000); // Tempo de espera em milissegundos (por exemplo, 500ms)

    return () => clearTimeout(timer); // Limpa o temporizador ao desmontar o componente
  }, []);

  useEffect(() => {
    import("../styles/especialidades.css");
  }, []);

  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="section_especialidades-conteudo">
                <h2 className="section_title"> As nossas Especialidades! </h2>
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

                <button className="btn especialidades_btn mt-4">
                  <Link to="/contato">Quero Viver Mais Com Meu Pet!</Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="especialidades_img">
                <img src={ImgEspeci} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle">Especialistas</h6>
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
