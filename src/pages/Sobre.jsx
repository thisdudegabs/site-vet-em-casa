import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/sobre.css";
import "../assets/all-images/Fillers/wavebg1.svg";
import Galeria from "../components/UI/Galeria";

const Sobre = () => {
  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            <Col>
              <section>
                <div className="costum">
                  <h1>NÓS AMAMOS O QUE FAZEMOS</h1>
                  <p>
                    Nosso excelente time de veterinários, fisioterapeutas,
                    acupunturistas, cardiologistas e de mais diversas
                    especialidades, se dedica para o bem estar e conforto do seu
                    pet, atendendo diretamente da sua casa!
                  </p>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Galeria />
      </section>

      {/*}      <section>
        <div className="curva-bg">


          <div className="curva-cima">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#987ea4"
                fill-opacity="10"
                d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,192C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="curva-baixo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#987ea4"
                fill-opacity="10"
                d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,192C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
  </section>*/}
    </Helmet>
  );
};

export default Sobre;
