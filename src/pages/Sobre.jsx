import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/sobre.css";
import "../assets/all-images/Fillers/wavebg1.svg";

const Sobre = () => {
  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            <Col>
              <section>
                <div>
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
      </section>

      <section>
        <div className="galeria">
          <div>
            <span>
              <img
                src="../assets/all-images/Galeria/foto1.png"
                alt="Foto Veterinário Com o Pet 1"
              />
            </span>

            <span>
              <img
                src="../assets/all-images/Galeria/foto2.png"
                alt="Foto Veterinário Com o Pet 2"
              />
            </span>

            <span>
              <img
                src="../assets/all-images/Galeria/foto3.png"
                alt="Foto Veterinário Com o Pet 3"
              />
            </span>

            <span>
              <img
                src="../assets/all-images/Galeria/foto4.png"
                alt="Foto Veterinário Com o Pet 4"
              />
            </span>

            <span>
              <img
                src="../assets/all-images/Galeria/foto5.png"
                alt="Foto Veterinário Com o Pet 5"
              />
            </span>

            <span>
              <img
                src="../assets/all-images/Galeria/foto6.png"
                alt="Foto Veterinário Com o Cachorro"
              />
            </span>

            <span>
              <img
                src="../assets/all-images/Galeria/foto7.png"
                alt="Foto Veterinário Com o Cachorro"
              />
            </span>

            <span>
              <img
                src="../assets/all-images/Galeria/foto8.jpeg"
                alt="Foto Veterinário Com o Cachorro"
              />
            </span>

            <span>
              <img
                src="../assets/all-images/Galeria/foto9.jpeg"
                alt="Foto Veterinário Com o Cachorro"
              />
            </span>

            <span>
              <img
                src="../assets/all-images/Galeria/foto10.png"
                alt="Foto Veterinário Com o Cachorro"
              />
            </span>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Sobre;
