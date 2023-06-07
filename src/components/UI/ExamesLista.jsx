import React from "react";
import { Col, Row } from "reactstrap";
import "../../styles/exames-lista.css";
import examesData from "../../assets/data/examesData";

const ExamesLista = () => {
  const groupedExamesData = chunkArray(examesData, 2);

  return (
    <>
      {groupedExamesData.map((group, index) => (
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
    <div className="services_item">
      <span className="mb-3 d-inline-block text-center">
        <i className={item.icon} />
      </span>

      <div className="service_content">
        <h6 className="text-center">{item.title}</h6>
        <p
          className="section_description compact"
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

export default ExamesLista;
