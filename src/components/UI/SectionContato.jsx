import React from "react";
import { Container, Row, Col } from "reactstrap";
import ContatoImg from "../../assets/all-images/Fillers/contato.jpg";
import "../../styles/section-contato.css";

const SectionContato = ({ contatoClass }) => {
  return (
    <section
      className="section_contato"
      style={
        contatoClass === "ContatoPage"
          ? { marginTop: "0px" }
          : { marginTop: "250px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="contato_img">
              <img src={ContatoImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="section_contato-conteudo">
              <h2 className="section_title">
                Marque seu Atendimento Agora Mesmo!
              </h2>
              <p className="description">
                Incididunt enim ea sit commodo. Enim anim non reprehenderit
                minim laborum cupidatat. Reprehenderit voluptate reprehenderit
                tempor tempor pariatur eu. Qui culpa Lorem reprehenderit culpa
                occaecat ut. In commodo minim non adipisicing pariatur deserunt
                eiusmod do commodo consequat tempor culpa. Deserunt mollit
                deserunt labore aliqua laborum. Culpa commodo culpa excepteur ut
                consequat dolor amet magna adipisicing. Reprehenderit fugiat
                dolore ex esse dolor reprehenderit esse.
              </p>
            </div>

            <div
              className="button-icon-wrapper"
              style={{ position: "relative" }}
            >
              <i className="ri-whatsapp-line custom-icon"></i>
              <a
                href="https://wa.me/5511989911582"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link"
              >
                <button className="btn contact_btn custom-button">
                  Marcar Consulta ou Exame!
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionContato;
