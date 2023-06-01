import React from "react";
import { Container, Row, Col } from "reactstrap";
import ImgExames from "../../assets/all-images/Animais/dog8.jpg";
import "../../styles/section-exames.css";

const SectionExames = ({ examesClass }) => {
  return (
    <section
      className="section_exames"
      style={
        examesClass === "ExamesPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="exames_img">
              <img src={ImgExames} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="section_exames-conteudo">
              <h2 className="section_title">Realizamos exames na sua casa!</h2>
              <p className="description">
                Incididunt enim ea sit commodo. Enim anim non reprehenderit
                minim laborum cupidatat. Reprehenderit voluptate reprehenderit
                tempor tempor pariatur eu. Qui culpa Lorem reprehenderit culpa
                occaecat ut. In commodo minim non adipisicing pariatur deserunt
                eiusmod do commodo consequat tempor culpa. Deserunt mollit
                deserunt labore aliqua laborum. Culpa commodo culpa excepteur ut
                consequat dolor amet magna adipisicing. Reprehenderit fugiat
                dolore ex esse dolor reprehenderit esse. Id tempor veniam
                consectetur aute dolor adipisicing laborum. Eiusmod cupidatat
                deserunt ipsum labore enim anim cupidatat proident amet esse
                eiusmod velit excepteur. Incididunt enim ea sit commodo. Enim
                anim non reprehenderit minim laborum cupidatat. Reprehenderit
                voluptate reprehenderit tempor tempor pariatur eu. Qui culpa
                Lorem reprehenderit culpa occaecat ut. In commodo minim non
                adipisicing pariatur deserunt eiusmod do commodo consequat
                tempor culpa.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionExames;
