import React from "react";
import { Col, Row } from "reactstrap";
import vantagensLista from "../../assets/data/vantagensLista";
import "../../styles/section-vantagens.css";

const SectionVantagensConsulta = () => {
  const groupedvantagensLista = chunkArray(vantagensLista, 2);

  return (
    <>
      {groupedvantagensLista.map((group, index) => (
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
    style={{ marginLeft: "-50px", marginRight: "-50px" }}
  >
    <div className="services_item items_costum1">
      <span className="mb-3 d-inline-block text-center">
        <i className={item.icon} />
      </span>

      <div className="service_content content_costum1">
        <h6 className="text-center">{item.title}</h6>
        <p
          className="section_description description_costum1 compact"
          style={{ marginLeft: "180px", maxWidth: "300px" }}
        >
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
export default SectionVantagensConsulta;
