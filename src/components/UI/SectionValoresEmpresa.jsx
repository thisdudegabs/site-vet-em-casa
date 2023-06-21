import React from "react";
import { Col, Row } from "reactstrap";
import valoresLista from "../../assets/data/valoresLista";
import "../../styles/section-valores.css";

const SectionValoresEmpresa = () => {
  const groupedvaloresLista = chunkArray(valoresLista, 2);

  return (
    <>
      {groupedvaloresLista.map((group, index) => (
        <Row key={index} className="justify-content-center">
          {group.map((item) => (
            <ServiceItem item={item} key={item.id} />
          ))}
        </Row>
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col
    lg="6"
    md="6"
    sm="12"
    className="mb-3"
    style={{ marginLeft: "-1vw", marginRight: "1vw" }}
  >
    <div className="services_item items_costum-valores">
      <span className="mb-3 d-inline-block text-center">
        <i className={item.icon} />
      </span>

      <div className="service_content content_costum-valores">
        <h6 className="text-center">{item.title}</h6>
        <p className="section_description description_costum-valores compact">
          {item.desc}
        </p>
      </div>
    </div>
  </Col>
);

const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export default SectionValoresEmpresa;
