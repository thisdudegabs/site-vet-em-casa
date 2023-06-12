import React from "react";
import "../../styles/card-time.css";

import { Row, Col, Container } from "reactstrap";
import WavingHand from "../../assets/all-images/CardTime/waving-hand.png";
import InstaIcon from "../../assets/all-images/CardTime/instagram.png";

const CardTime = () => {
  return (
    <Container>
      <div className="card-container">
        <div className="card">
          <div className="card-inner">
            <div className="front1">
              <h2>Dr. Victor</h2>
              <p>Médico Veterinário</p>
              <button>Aqui!</button>
            </div>

            <div className="back">
              <img src={WavingHand} alt="" />
              <h1>
                Dr. Victor <span className="break-line">Villar</span>
              </h1>
              <p>
                Sou um médico veterinário formado em Medicina Veterinária, Pós
                Graduando em Medicina de Felinos e espealicista em Clínica
                Médica de Felinos.
              </p>

              <Row className="details">
                <Col className="detalhe1">
                  <h2>100+</h2>
                  <p>Cachorros Atendidos</p>
                </Col>
                <Col className="detalhe2">
                  <h2>50+</h2>
                  <p>Gatos Cuidados</p>
                </Col>
                <Col className="detalhe3">
                  <h2>70+</h2>
                  <p>Vacinas Aplicadas</p>
                </Col>
              </Row>

              <Row className="icons_details">
                <button>Seguir</button>
                <a href="https://www.instagram.com/vet_vilar/" target="_blank">
                  <img src={InstaIcon} alt="Icone do Instagram" />
                </a>
              </Row>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="front2">
              <h2>Dra. Bruna </h2>
              <p>Médica Veterinária</p>
              <button>Aqui!</button>
            </div>

            <div className="back">
              <img src={WavingHand} alt="" />
              <h1>
                Dra. Bruna <span className="break-line">Simonato</span>
              </h1>
              <p>
                Sou uma médica veterinário formado em Medicina Veterinária, Pós
                Graduando em Acupuntura Veterinária, também formada em
                Fitoterapia em Medicina Tradicional Chinesa e Fisio.
                Veterinária.
              </p>

              <Row className="details">
                <Col className="detalhe1">
                  <h2>50+</h2>
                  <p>Animais Recuperados</p>
                </Col>
                <Col className="detalhe2">
                  <h2>50+</h2>
                  <p>Donos Felizes</p>
                </Col>
                <Col className="detalhe3">
                  <h2>200+</h2>
                  <p>Sessões de Fisioterapia</p>
                </Col>
              </Row>

              <Row className="icons_details">
                <button>Seguir</button>
                <a
                  href="https://instagram.com/brunasimonatovet?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <img src={InstaIcon} alt="Icone do Instagram" />
                </a>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CardTime;
