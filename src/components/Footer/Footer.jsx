import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import logoImg from "../../assets/all-images/Logo/logo2.png";

const quickLinks = [
  {
    path: "/consulta",
    display: "Consulta",
  },
  {
    path: "/vacinas",
    display: "Vacinas",
  },

  {
    path: "/acupuntura",
    display: "Acupuntura",
  },
  {
    path: "/especialidades",
    display: "Especialidades",
  },
  {
    path: "/contato",
    display: "Contato",
  },
  {
    path: "/sobre",
    display: "Sobre",
  },
];

const Footer = () => {
  const data = new Date();
  const ano = data.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo-container">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <img
                    src={logoImg}
                    className="logo_footer"
                    alt="Logo"
                    style={{ marginTop: "15px", marginLeft: "-80px" }}
                  />
                </Link>
              </h1>
              <p className="logo_footer-content">
                Qui sint qui ut amet. Dolore minim cillum ut laborum nisi ipsum
                amet.
              </p>
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title">Links Rápidos</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick_link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-4">Atendimento</h5>
              <p className="office_info">
                <i class="ri-home-2-line icon-spacing"></i>
                Rua dos Buritis, 54 - São Paulo - SP, 04321-000
              </p>

              <p className="office_info">
                <i class="ri-phone-line icon-spacing"></i>
                0800-219-88-77
              </p>

              <p className="office_info">
                <i class="ri-mail-line icon-spacing"></i>
                vitao@vetemcasa.com.br
              </p>

              <p className="office_info">
                <i class="ri-time-line icon-spacing"></i>
                Seg - Sab das 9:00 - 19:00
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-4">Trabalhe Conosco</h5>

              <p className="office_info">
                <i class="ri-mail-line icon-spacing"></i>
                trabalhe@vetemcasa.com.br
              </p>

              <p className="office_info">
                <i class="ri-time-line icon-spacing"></i>
                Seg - Sab das 9:00 - 19:00
              </p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer_bottom">
              <div className="d-flex align-items-center justify-content-center gap-1 pt-4">
                <p className="section_description" style={{ fontSize: "1rem" }}>
                  <i class="ri-copyright-line"></i>Copyright {ano} -
                  Desenvolvido por Gabriel Franco.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
