import React from "react";
import "../../styles/card-time.css";
import { Row, Col, Container } from "reactstrap";
import WavingHand from "../../assets/all-images/CardTime/waving-hand.png";
import InstaIcon from "../../assets/all-images/CardTime/instagram.png";

const CardTime = () => {
  return (
    <Container>
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h2>Dr. Victor Villar</h2>
            <p>Médico Veterinário</p>
            <button>Passe o Mouse</button>
          </div>

          <div className="back">
            <img src={WavingHand} alt="" />
            <h1>
              Dr. Victor <span className="break-line">Villar</span>
            </h1>
            <p>
              Sou um médico veterinário formado em Medicina Veterinária, Pós
              Graduando em Medicina de Felinos e espealicista em Clínica Médica
              de Felinos.
            </p>

            <Row className="details">
              <Col className="cachorros">
                <h2>100+</h2>
                <p>Cachorros Atendidos</p>
              </Col>
              <Col className="gatos">
                <h2>50+</h2>
                <p>Gatos Atendidos</p>
              </Col>
              <Col className="vacinas">
                <h2>70+</h2>
                <p>Vacinas Aplicadas</p>
              </Col>
            </Row>

            <Row className="icons_details">
              <button>Seguir</button>
              <a href="https://www.instagram.com/vet_vilar/">
                <img src={InstaIcon} alt="Icone do Instagram" />
              </a>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CardTime;
