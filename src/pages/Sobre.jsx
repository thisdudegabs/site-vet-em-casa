import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/sobre.css";
import "../assets/all-images/Fillers/wavebg1.svg";
import Galeria from "../components/UI/Galeria";
import SectionDiferenciaisAbout from "../components/UI/SectionDiferenciaisAbout";
import SectionValoresEmpresa from "../components/UI/SectionValoresEmpresa";

const Sobre = () => {
  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="costum-intro">
                <h1>
                  NÓS <i class="ri-heart-3-fill"></i> O QUE FAZEMOS
                </h1>
                <p>
                  Nosso excelente time de veterinários, acupunturistas e de mais
                  diversas especialidades, se dedica para o bem estar e conforto
                  do seu pet, atendendo diretamente da sua casa!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="curve-bg">
        <Galeria />
      </section>

      <section>
        <Container>
          <Row>
            <Col>
              <div className="costum-about">
                <h1>
                  Uma experiência de consulta veterinária com o conforto do
                  atendimento em casa!
                </h1>
                <p>
                  Somos um time profissional de médicos veterinários dedicados a
                  fazer a sua vida e a do seu Pet mais confortável com
                  <br />
                  consulta no conforto da sua casa, além de sessões de
                  acupuntura, fisioterapia, <br />
                  vacinas e exames quando necessários!
                </p>

                <div className="vantagens-costum">
                  <SectionDiferenciaisAbout />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="curve-bg">
        <Container>
          <Row>
            <Col>
              <div className="valores-text">
                <h1>NOSSOS VALORES</h1>

                <p>
                  Commodo excepteur aliquip labore culpa exercitation quis. In
                  nulla non elit laborum cillum sit exercitation officia velit.
                  Anim veniam nisi cillum labore ullamco nostrud aute dolor do
                  sit enim. Officia ex cupidatat non laborum aliqua cupidatat
                  nisi.
                </p>
              </div>
            </Col>

            <Col>
              <div>
                <SectionValoresEmpresa />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Sobre;
