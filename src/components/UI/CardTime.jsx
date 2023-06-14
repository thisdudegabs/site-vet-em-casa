import React from "react";
import "../../styles/card-time.css";
import Victor from "../../assets/all-images/CardTime/victorvillar.jpg";
import Bruna from "../../assets/all-images/CardTime/brunasimonato.jpeg";
import MaisEspeci from "../../assets/all-images/CardTime/outros.jpeg";

const CardTime = () => {
  return (
    <div className="card-container">
      <div className="card1">
        <div className="imgBx1">
          <img src={Victor} alt="Doutor Victor" />
        </div>

        <div className="content1">
          <div className="details1">
            <h2>
              Dr. Victor Vilar
              <span style={{ display: "block" }}> Veterinário</span>
            </h2>
            <div className="data1">
              <h3>
                +400 <span style={{ display: "block" }}> Consultas Feitas</span>
              </h3>
              <h3>
                +150
                <span style={{ display: "block" }}> Vacinas Aplicadas</span>
              </h3>
              <h3>
                +400 <span style={{ display: "block" }}> Animais Salvos</span>
              </h3>
            </div>

            <div className="actionBtn1">
              <a
                href="https://www.instagram.com/vet_vilar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Seguir</button>
              </a>

              <a
                href="https://wa.me/5511989911582"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Chat</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card2">
        <div className="imgBx2">
          <img src={Bruna} alt="Doutora Bruna" />
        </div>

        <div className="content2">
          <div className="details2">
            <h2>
              Dra. Bruna Simonato
              <span style={{ display: "block" }}> Veterinária</span>
            </h2>
            <div className="data2">
              <h3>
                50+
                <span style={{ display: "block" }}> Animais Recuperados</span>
              </h3>
              <h3>
                50+ <span style={{ display: "block" }}> Donos Felizes</span>
              </h3>
              <h3>
                200+
                <span style={{ display: "block" }}>
                  Sessões de Fisioterapia
                </span>
              </h3>
            </div>

            <div className="actionBtn2">
              <a
                href="https://instagram.com/brunasimonatovet?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Seguir</button>
              </a>

              <a
                href="https://wa.me/5511989911582"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Chat</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card3">
        <div className="imgBx3">
          <img src={MaisEspeci} alt="Mais Especialistas" />
        </div>

        <div className="content3">
          <div className="details3">
            <h2>Outras Especialidades</h2>
            <div className="data3">
              <div className="column">
                <h3>Med. Felinos</h3>
                <h3>Dermato</h3>
              </div>
              <div className="column">
                <h3>Cardio</h3>
                <h3>Onco</h3>
              </div>
              <div className="column">
                <h3>Fisiatria</h3>
                <h3>Oftalmo</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTime;
